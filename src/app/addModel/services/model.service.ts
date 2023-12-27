import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ContactFormModel } from '../contact-form-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  saveModelData(formData: ContactFormModel): Observable<any> {
    return this.http.post('http://localhost:5000/save_model', formData);
  }
  uploadModelData(formData: FormData) {
    return this.http.post('http://localhost:5000/annotate_individual_spacy', formData);
  }
  uploadDictionary(formData: FormData): Observable<any> {
    return this.http.post('http://localhost:5000/save_dictionary_model', formData);
  }
}
