import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ContactFormModel} from "../addModel/contact-form-model";

@Component({
  selector: 'app-model-edit-dialog',
  templateUrl: './model-edit-dialog.component.html',
  styleUrls: ['./model-edit-dialog.component.scss']
})
export class ModelEditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ModelEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContactFormModel
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
