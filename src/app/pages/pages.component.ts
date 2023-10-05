import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Component, OnInit} from "@angular/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
})
export class PagesComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  ngOnInit(): void {
  }
}
