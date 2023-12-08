import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {CommonModule, NgFor} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatRadioModule} from "@angular/material/radio";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {MainObject} from "../MainObject";
import {Observable} from "rxjs";
export interface ModelEvalStructure {
  name: string;
  time: number;
  precision: number;
  recall: number;
  f1score: number;
}

const ELEMENT_DATA: ModelEvalStructure[] = [];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [MatSliderModule, CommonModule, MatTableModule, MatButtonModule, MatProgressSpinnerModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatOptionModule, MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule, MatTooltipModule, MatRadioModule, MatSortModule]
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'time', 'precision', 'recall', 'f1score'];
  dataSource = new MatTableDataSource<ModelEvalStructure>(ELEMENT_DATA);
  mainObject: MainObject = {
    text: '',
    annotations: { annotations: [] }
  };
  fileError: string | null = null;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private cd: ChangeDetectorRef, private http: HttpClient) { }

  sendFileToBackend(fileContent: any): Observable<ModelEvalStructure[]> {
    return this.http.post<ModelEvalStructure[]>('http://localhost:5000/get_eval_models', fileContent);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.fileError = 'Keine Datei ausgewählt.';
      this.cd.detectChanges();
      return;
    }

    const file = input.files[0];
    if (!file.name.endsWith('.json')) {
      this.fileError = 'Die Datei ist keine gültige .json-Datei.';
      this.cd.detectChanges();
      return;
    }

    this.fileError = null;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string);
        this.sendFileToBackend(json).subscribe(
          (data: ModelEvalStructure[]) => {
            this.dataSource.data = data;
            console.log(data);
            this.cd.detectChanges();
          },
          error => {
            // Fehlerbehandlung
          }
        );
      } catch (e) {
        this.fileError = 'Fehler beim Lesen der JSON-Datei.';
        this.cd.detectChanges();
      }
    };
    reader.readAsText(file);
  }
}
