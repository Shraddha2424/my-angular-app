import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userName:String|null ="";

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    // this.userName = this.route.snapshot.paramMap.get('name');
    // console.log(this.userName);

    // this.route.queryParams.subscribe(params=>{
    //   this.userName=params['name'];
      // console.log(params['name']);
    // })

    this.route.data.subscribe(data=>{
      this.userName=data['name'];
    })
  } 
}
