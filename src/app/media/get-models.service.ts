// model.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ContactFormModel} from "../addModel/contact-form-model";
@Injectable({
  providedIn: 'root'
})
export class GetModelsService {
  private apiUrl = 'http://localhost:5000'; // Allgemeine Basis-URL

  constructor(private http: HttpClient) {}

  getModels(): Observable<ContactFormModel[]> {
    return this.http.get<ContactFormModel[]>(`${this.apiUrl}/get_models`);
  }

  deleteModel(modelName: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete_model/${modelName}`);
  }
}

