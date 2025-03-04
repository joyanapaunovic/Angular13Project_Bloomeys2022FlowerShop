import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFlower } from 'src/app/interfaces/i-flower';
import { ITypeOfOccassion } from 'src/app/interfaces/i-type-of-occassion';
import { FlowersService } from 'src/app/services/flowers.service';
import { TypeOfOccassionService } from 'src/app/services/type-of-occassion.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private typeOfOccasionService: TypeOfOccassionService, 
              private flowersService: FlowersService,
              public route: Router,
              private activatedRoute: ActivatedRoute) { }

  // => PODACI
  types: ITypeOfOccassion[] = [];
  flowers: IFlower[] = [];
  idCategory: any = '';

  // => METODE
  showNumberCircled(category: any, typeId: any) {
    // console.log(category.classes)
    if(category.classes == "active-category"){
        // var idCircled = document.querySelector('.id-circled');
        var idCircled = document.getElementsByClassName('id-circled') as HTMLCollectionOf<HTMLElement>;
        // console.log(idCircled)
        for(let i = 0; i <= idCircled.length; i++){
            if(idCircled[i]){
                if((typeId - 1) == i){
                  // idCircled[i].style.visibility = "visible";
                  idCircled[i].setAttribute("style", "visibility: visible;");
                } 
                else {
                  // idCircled[i].style.visibility = "hidden";
                  idCircled[i].setAttribute("style", "visibility: hidden;");
                }
            }
        }
    }
}

  ngOnInit(): void {
    //FLOWERS
    this.flowersService.getFlowers().subscribe({
      next: flowersData => {
        this.flowers = flowersData;
        // console.log(flowersData)
      }, 
      error: errorMessage => {
        console.log(errorMessage);
      }
    });
    // CATEGORIES
    this.typeOfOccasionService.getTypes().subscribe({
        next: data => {
          // console.log(data);
          this.types = data;
        }, 
        error: errorMessage => {
          console.log(errorMessage);
        }
    });
     // GET ID PARAMETER from route => CATEGORY 
     this.activatedRoute.paramMap.subscribe(parameter => {
      // console.log(parameter)
      this.idCategory = parameter.get('idCategory');
      // console.log(this.idCategory);
    });
  }

}
