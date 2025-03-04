import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFlower } from 'src/app/interfaces/i-flower';
import { ITypeOfOccassion } from 'src/app/interfaces/i-type-of-occassion';
import { FlowersService } from 'src/app/services/flowers.service';
import { TypeOfOccassionService } from 'src/app/services/type-of-occassion.service';

@Component({
  selector: 'app-single-flower',
  templateUrl: './single-flower.component.html',
  styleUrls: ['./single-flower.component.css']
})
export class SingleFlowerComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private flowersService: FlowersService, 
              private typeOfOccassionService: TypeOfOccassionService) { }
              
  id: any = '';
  flowers: IFlower[] = [];
  types: ITypeOfOccassion[] = [];
  
  ngOnInit(): void {
    // GET FLOWERS
    this.flowersService.getFlowers().subscribe({
      next: data => {
        this.flowers = data;
        // console.log(data);
      },
      error: errorMessage => {
        console.log(errorMessage)
      }
    });
    // GET TYPES
    this.typeOfOccassionService.getTypes().subscribe({
      next: data => {
        this.types = data;
        // console.log(data);
      },
      error: errorMessage => {
        console.log(errorMessage)
      }
    });
    // GET ID PARAMETER 
    this.route.paramMap.subscribe(parameter => {
      // console.log(parameter)
      this.id = parameter.get('id');
      // console.log(this.id);
    });

  }

}
