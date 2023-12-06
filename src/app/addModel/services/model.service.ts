import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactFormModel } from '../contact-form-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private apiUrl = 'http://localhost:5000/save_model';

  constructor(private http: HttpClient) { }

  saveModelData(formData: ContactFormModel): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
