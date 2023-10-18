import { Component, OnInit } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {NgFor} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatRadioModule} from "@angular/material/radio";
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [MatSliderModule, MatButtonModule, MatProgressSpinnerModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatOptionModule, MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule, MatTooltipModule, MatRadioModule]
})
export class DashboardComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
