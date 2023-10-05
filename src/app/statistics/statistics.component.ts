import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  integerControl = new FormControl('', [this.integerValidator.bind(this)]);

  // Validator function
  integerValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^\d+$/.test(control.value);
    return valid ? null : { 'invalidInteger': { value: control.value } };
  }
  constructor() { }

  ngOnInit(): void {
  }

}
