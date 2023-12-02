import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactFormModel } from './contact-form-model'; // Pfad anpassen

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  showConfirmation = false;
  showValidationErrors = false;
  contactForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required]),
    isMarried: new FormControl(false),
    country: new FormControl('', Validators.required)
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.showValidationErrors = true; // Validierungsfehler anzeigen, wenn Submit gedrückt wird
    if (this.contactForm.valid) {
      const formData: ContactFormModel = this.contactForm.getRawValue() as ContactFormModel;
      this.saveFormData(formData);
      this.showConfirmation = true;
      setTimeout(() => {
        this.showConfirmation = false;
        this.resetForm();
      }, 750);
    }
  }

  resetForm() {
    this.contactForm.reset();
    setTimeout(() => {
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control) {
          control.markAsPristine();
        }
        if (control) {
          control.markAsUntouched();
        }
        if (control) {
          control.setErrors(null);
        }
      });
    });
  }

  private saveFormData(formData: ContactFormModel) {
    console.log('Gespeicherte Daten:', formData);
  }
}
