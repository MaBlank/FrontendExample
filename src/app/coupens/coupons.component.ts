import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModelService} from "../addModel/services/model.service";
import {ContactFormModel} from "../addModel/contact-form-model";

@Component({
  selector: 'app-coupens',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  showConfirmation = false;
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    label: new FormControl('', Validators.required),
    examples: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  constructor(private modelService: ModelService) {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Erhalten Sie die Werte aus dem Formular als irgendein Objekt
      const formValue: any = this.contactForm.getRawValue();

      // Erstellen Sie ein Objekt für die Übermittlung, das die Modellinformation einschließt
      const formData: ContactFormModel = {
        name: formValue.name,
        api: 'http://localhost:5000/annotate_individual_gpt-4',
        description: formValue.description,
        label: formValue.label,
        examples: formValue.examples,
        madebyMB: formValue.madebyMB,
        model: 'GPT-4',
      };

      this.modelService.saveModelData(formData).subscribe(
        response => {
          console.log(response);
          this.showConfirmation = true;
          // Setzen Sie eine kurze Verzögerung vor dem Neuladen, um die Bestätigung anzuzeigen
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
