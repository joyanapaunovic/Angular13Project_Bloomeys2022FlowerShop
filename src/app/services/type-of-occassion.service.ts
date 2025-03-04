import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ITypeOfOccassion } from '../interfaces/i-type-of-occassion';

@Injectable({
  providedIn: 'root'
})
export class TypeOfOccassionService {

  constructor(private http: HttpClient) { }
  
  getTypes(): Observable<ITypeOfOccassion[]> {
    return this.http.get<ITypeOfOccassion[]>("assets/data/type-of-occassion.json");
  }

}
