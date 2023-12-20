import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../Model/People';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'https://localhost:7037/api/people';
  constructor(private http: HttpClient) { }

  searchPeople(searchTerm:string): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}?searchTerm=${searchTerm}`);
  }
}
