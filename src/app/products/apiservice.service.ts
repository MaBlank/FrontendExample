import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ChuckNorrisJoke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  private apiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<ChuckNorrisJoke> {
    return this.http.get<ChuckNorrisJoke>(this.apiUrl);
  }
}
