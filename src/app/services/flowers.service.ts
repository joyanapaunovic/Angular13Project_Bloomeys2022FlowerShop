import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IFlower } from '../interfaces/i-flower';

@Injectable({
  providedIn: 'root'
})
export class FlowersService {

  constructor(private http: HttpClient) { }
  url: string = "assets/data/";

  getFlowers(): Observable<IFlower[]> {
    return this.http.get<IFlower[]>(this.url + "flowers.json");
  }

}
