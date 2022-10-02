import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from './hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
   model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

   submitted = false;

   onSubmit() { 
     this.submitted = true;
     
    }
    
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  // goToPage(pageName:string):void{
  //   this.router.navigate([`${pageName}`])
  // }

 


}
