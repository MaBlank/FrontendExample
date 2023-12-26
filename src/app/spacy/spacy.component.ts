import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModelService } from "../addModel/services/model.service";

@Component({
  selector: 'app-spacy',
  templateUrl: './spacy.component.html',
  styleUrls: ['./spacy.component.scss']
})
export class SpacyComponent implements OnInit {
  showConfirmation = false;
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    jsonFile: new FormControl(null, Validators.required),
  });

  constructor(private modelService: ModelService) { }

  ngOnInit(): void { }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.contactForm.patchValue({
        jsonFile: file
      });
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.getRawValue();
      const formData = new FormData();
      if (formValue.name) {
        formData.append('name', formValue.name);
      }
      if (formValue.description) {
        formData.append('description', formValue.description);
      }
      if (formValue.jsonFile) {
        formData.append('file', formValue.jsonFile);
      }
      this.modelService.uploadModelData(formData).subscribe(
        response => {
          console.log(response);
          this.showConfirmation = true;
          setTimeout(() => {
            window.location.reload();
          }, 750);
        },
        error => {
          console.error('Error saving data:', error);
        }
      );
    }
  }
}
