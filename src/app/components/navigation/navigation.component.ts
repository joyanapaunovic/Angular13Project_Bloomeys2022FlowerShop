import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavigation } from 'src/app/interfaces/i-navigation';
import { NavigationService } from 'src/app/services/navigation.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navigationLinks: INavigation[] = [];
    // {
    //   linkName: "Home",
    //   route: "/home"
    // },
    // {
    //   linkName: "About us",
    //   route: "/about-us"
    // },
    // {
    //   linkName: "Shop",
    //   route: "/shop"
    // }
    // {
    //   linkName: "Contact",
    //   route: this.getDivId()
    // }
  // ];
  constructor(public router: Router, private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.getNavigation().subscribe({
      next: navData => {
        this.navigationLinks = navData;
        // console.log(flowersData)
      }, 
      error: errorMessage => {
        console.log(errorMessage);
      }
    });
  }

  // contact
  contactId: string = "#footer";
  getToDivId() {
    return this.router.url + this.contactId;
  }



}
