import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { INavigation } from '../interfaces/i-navigation';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient) { }
  url: string = "assets/data/";

  getNavigation(): Observable<INavigation[]> {
    return this.http.get<INavigation[]>(this.url + "navigation.json");
  }
}
