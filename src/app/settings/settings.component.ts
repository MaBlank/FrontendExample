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
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    api: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    madebyMB: new FormControl(false),
    model: new FormControl('', Validators.required)
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      const formData: ContactFormModel = this.contactForm.getRawValue() as ContactFormModel;
      this.saveFormData(formData);
      this.showConfirmation = true;
      setTimeout(() => {
        window.location.reload();
      }, 750);
    }
  }

  private saveFormData(formData: ContactFormModel) {
    console.log('Gespeicherte Daten:', formData);
  }
}
