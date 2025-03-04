import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }


  form = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]{2,14}$/)]), 
      lastName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z][a-z]{2,14}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
  });


  messageIsSuccessful: string = "";
  
  checkForm(): any {
     Object.keys(this.form.controls).forEach(el => {
        this.form.controls[el].markAllAsTouched();
      })
    // console.log(this.form)
     if(this.form.status == "INVALID"){
        this.messageIsSuccessful = "Please fill in all the required fields.";
     }
     else if(this.form.status == "VALID") {
        this.messageIsSuccessful = "You're message has been successfully sent.";
     } 
  }

}
