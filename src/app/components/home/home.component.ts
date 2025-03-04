import { Component, OnInit } from '@angular/core';
import { IFlower } from 'src/app/interfaces/i-flower';
import { ITypeOfOccassion } from 'src/app/interfaces/i-type-of-occassion';
import { FlowersService } from 'src/app/services/flowers.service';
// import { FlowersService } from 'src/app/services/flowers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  // flowers: IFlower[] = [];
  // niz slika izdvojenih na pocetnoj -> predstavlja galeriju
  /*flowersGalleryHome: string[] = ['summer-spritz-bouquet.jpg', 'lavender-bouquet.png', 'flutter.jpg', 
                                  'bouquet-home.png', 'potted-flower.jpg', 'bouquet-home-2.jpg', 
                                  'bouquet1.jpg', 'bouquet2.jpg', 'bouquet3.jpg']; */
                                   // => PODACI
  types: ITypeOfOccassion[] = [];
  flowers: IFlower[] = [];
  idCategory: any = '';
  //flowersService: FlowersService;
                                  constructor(private flowerService: FlowersService){}
  ngOnInit(): void {
    // this.flowersService.getFlowers().subscribe({
    //   next: data => {
    //     this.flowers = data;
    //     console.log(data);
    //   },
    //   error: errorMessage => {
    //     console.log(errorMessage)
    //   }
    // });
    this.flowerService.getFlowers().subscribe((data) => {
      console.log('Loaded flowers:', data);
      this.flowers = data;  
    
  });
  

}
}

