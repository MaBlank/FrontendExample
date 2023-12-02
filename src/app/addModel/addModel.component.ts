import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactFormModel } from './contact-form-model';
import { ModelService } from './services/model.service';

@Component({
  selector: 'app-settings',
  templateUrl: './addModel.component.html',
  styleUrls: ['./addModel.component.scss']
})
export class AddModelComponent implements OnInit {
  showConfirmation = false;
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    api: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    madebyMB: new FormControl(false),
    model: new FormControl('', Validators.required)
  });

  ngOnInit(): void {}

  constructor(private modelService: ModelService) {}

  onSubmit() {
    if (this.contactForm.valid) {
      const formData: ContactFormModel = this.contactForm.getRawValue() as ContactFormModel;
      this.modelService.saveModelData(formData).subscribe(response => {
        console.log(response);
        this.showConfirmation = true;
        setTimeout(() => {
          window.location.reload();
        }, 750);
      }, error => {
        console.error('Error saving data:', error);
      });
    }
  }
}
