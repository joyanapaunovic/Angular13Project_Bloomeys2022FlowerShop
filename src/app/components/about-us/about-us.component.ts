import { Component, OnInit } from '@angular/core';
import { ITypeOfOccassion } from 'src/app/interfaces/i-type-of-occassion';
import { TypeOfOccassionService } from 'src/app/services/type-of-occassion.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private typeOfOccasionService: TypeOfOccassionService) { }
  types: ITypeOfOccassion[] = [];
  ngOnInit(): void {
    this.typeOfOccasionService.getTypes().subscribe({
      next: data =>
      {
        this.types = data;
        // console.log(data);
      },
      error: errorMessage => {
        console.log(errorMessage);
      }
  });

  }
}
