import {FormBuilder, FormGroup, FormsModule, Validators} from "@angular/forms";
import {ChangeDetectorRef, Component, OnInit, ViewChild} from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ContactFormModel} from "../addModel/contact-form-model";
import {GetModelsService} from "../overviewModels/get-models.service";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MainObject} from "../MainObject";
import {NgxAnnotateTextComponent, Annotation as NgxAnnotation, NgxAnnotateTextModule} from 'ngx-annotate-text';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxAnnotateTextModule,
    FormsModule,
    MatButtonModule
  ],
})
export class PagesComponent implements OnInit {
  models: ContactFormModel[] = [];
  fileError: string | null = null;


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.fetchMainObject();
    this.getModelsService.getModels().subscribe(
      data => {
        this.models = data;
      },
      error => {
        console.error('Error fetching models:', error);
      }
    );
  }
  @ViewChild('annotateText') ngxAnnotateText?: NgxAnnotateTextComponent;
  id: string | null | undefined;
  mainObject: MainObject = {
    text: 'Test Test Text Text Test Test',
    annotations: {
      annotations: []
    }
  };
  events: string[] = [];
  newAnnotationColor = '#008000';
  newAnnotationLabel = '';
  annotations: NgxAnnotation[] = [];
  annotationButtons: Array<{ label: string; color: string }> = [];

  constructor(
    private getModelsService: GetModelsService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  fetchMainObject(): void {
    console.log('fetchMainObject called');
    if (!this.id) {
      console.log('No id provided');
      return;
    }

    console.log(`Fetching main object with id: ${this.id}`);

    this.http.get<MainObject>(`http://localhost:8080/api/documents/${this.id}`).subscribe(data => {
      console.log('Response from server received:', data);

      this.mainObject = data;

      if (this.mainObject.annotations && this.mainObject.annotations.annotations) {
        console.log('Annotations found in the main object');

        this.annotations = this.mainObject.annotations.annotations.map(annotation => {
          console.log('Mapping annotation:', annotation);
          return new NgxAnnotation(annotation.start, annotation.end, annotation.label, annotation.color);
        });

        console.log('Mapped annotations:', this.annotations);

        // Also update the annotationButtons here
        this.annotationButtons = this.annotations.map(annotation => {
          return { label: annotation.label, color: annotation.color };
        });

      } else {
        console.log('No annotations found in the main object');
        this.annotations = [];
      }
    }, error => {
      console.error('Error occurred while fetching the main object:', error);
    });
  }

  get text(): string {
    return this.mainObject?.text || '';
  }

  addAnnotation(label: string, color: string): void {
    console.log('addAnnotation called with label:', label, 'and color:', color);

    if (!this.ngxAnnotateText) {
      console.log('ngxAnnotateText is not defined');
      return;
    }

    const selection = this.ngxAnnotateText.getCurrentTextSelection();
    console.log('Current text selection:', selection);

    if (!selection) {
      console.log('No text is selected');
      return;
    }

    if (this.ngxAnnotateText.isOverlappingWithExistingAnnotations(selection)) {
      console.log('Selected text is overlapping with existing annotations');
      alert('The selected text is already annotated.');
      return;
    }

    if (!this.annotationButtons.some(button => button.label === label)) {
      console.log('Adding new button with label:', label);
      this.annotationButtons.push({ label, color });
      this.annotationButtons = [...this.annotationButtons, { label, color }];
      this.cd.detectChanges();

    } else {
      console.log('Button with label already exists:', label);
    }

    const annotation = new NgxAnnotation(selection.startIndex, selection.endIndex, label, color);
    console.log('Created new annotation:', annotation);

    this.annotations.push(annotation);
    this.annotations = [...this.annotations];
    this.cd.detectChanges();
    console.log('Added annotation to annotations array:', this.annotations);

    this.events.push(`Added '${annotation}'`);
    console.log('Updated events:', this.events);
    this.getUniqueAnnotationButtons();
  }

  onClickAnnotation(annotation: NgxAnnotation): void {
    this.events.push(`Clicked on '${annotation}'`);
    this.cd.detectChanges();
  }

  onRemoveAnnotation(annotation: NgxAnnotation): void {
    const index = this.annotations.indexOf(annotation);
    if (index !== -1) {
      this.annotations.splice(index, 1);
      this.events.push(`Removed '${annotation}'`);
    }
  }

  removeAnnotationButton(label: string, color: string, event: MouseEvent): void {
    event.preventDefault(); // Prevent the browser's context menu from appearing.

    const buttonIndex = this.annotationButtons.findIndex(
      (button) => button.label === label && button.color === color
    );

    if (buttonIndex !== -1) {
      // Remove the button from the annotationButtons array.
      this.annotationButtons.splice(buttonIndex, 1);
    }

    // Remove all annotations matching the label and color from the annotations array.
    this.annotations = this.annotations.filter(
      (annotation) => !(annotation.label === label && annotation.color === color)
    );

    // Refresh the annotations displayed by the ngx-annotate-text component.
    this.annotations = [...this.annotations];
    this.cd.detectChanges();
    this.getUniqueAnnotationButtons();

  }

  onSave(): void {
    console.log('onSave called');
    console.log(this.mainObject);  // Zeigt die Struktur des mainObject in der Konsole

    // Überprüfen, ob mainObject existiert und Annotations hat
    if (this.mainObject && this.mainObject.annotations) {
      this.mainObject.annotations.annotations = this.annotations.map(annotation => {
        return { start: annotation.startIndex, end: annotation.endIndex, label: annotation.label, color: annotation.color };
      });
    }

    // Erstellen der JSON-Datei zum Export
    const json = JSON.stringify(this.mainObject, null, 2); // Schön formatiertes JSON
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);

    // Erstellen eines temporären 'a'-Elements zum Download der Datei
    const link = document.createElement('a');
    link.href = href;
    link.download = 'mainObject.json';
    document.body.appendChild(link);
    link.click();

    // Aufräumen
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }
  getUniqueAnnotationButtons(): void {
    const uniqueButtons = [];
    const map = new Map();

    for (const button of this.annotationButtons) {
      if (!map.has(button.label)) {
        map.set(button.label, true);
        uniqueButtons.push(button);
      }
    }

    this.annotationButtons = uniqueButtons;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.fileError = 'Keine Datei ausgewählt.';
      return;
    }

    const file = input.files[0];
    if (file.type !== 'text/plain') {
      this.fileError = 'Die Datei ist keine gültige .txt-Datei.';
      return;
    }

    this.fileError = null;

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      this.mainObject = {
        ...this.mainObject,
        text: text,
        annotations: {
          annotations: []
        }
      };
      this.cd.detectChanges();
    };
    reader.readAsText(file);
  }

  trackByFn(index: any, item: any) {
    return index; // oder item.id wenn Ihre Annotationen eindeutige IDs haben
  }

  annotate() {
    if (!this.mainObject || !this.mainObject.text) {
      console.log('Kein Text zum Annotieren vorhanden');
      return;
    }

    const requestBody = {
      text: this.mainObject.text
    };

    this.http.post<MainObject>('http://localhost:5000/annotate', requestBody).subscribe(
      data => {
        console.log('Antwort von der API erhalten:', data);

        // Aktualisieren Sie das mainObject mit den Daten von der API
        this.mainObject = data;

        // Konvertieren Sie die Annotationen des Backend in das Format, das von ngxAnnotateText verwendet wird
        this.annotations = this.mainObject.annotations.annotations.map(backendAnnotation => new NgxAnnotation(
          backendAnnotation.start,
          backendAnnotation.end,
          backendAnnotation.label,
          backendAnnotation.color
        ));

        // Aktualisieren Sie die Anzeige und den internen Zustand
        this.cd.detectChanges();
      },
      error => {
        console.error('Fehler beim Senden der Anfrage an die API:', error);
      }
    );
  }
}
