import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // constructor(private router: Router) {} // ✅ Inject Router

  // // pass data from button click and also router link
  // goToProfile(name:string) {
  //   this.router.navigate(['profile'], { queryParams: { name:name } });
  // }

  // //////////// dynamic routing ///////////////////////
  users=[
    {
      id:'1',
      name:"anil",
      age:27,
      email:'anil@gmial.com'
    },
    {
      id:'2',
      name:"shraddha",
      age:25,
      email:'shraddha@gmial.com'
    }
    , {
      id:'3',
      name:"tejas",
      age:24,
      email:'tejas@gmial.com'
    }
  ]
}
