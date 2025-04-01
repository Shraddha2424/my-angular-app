import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// name:null|string='';

//   constructor(private route:ActivatedRoute){}

// ngOnInit(){
//   this.route.params.subscribe((params)=>{
// console.log(params)
// this.name=params['name'];
//   })
// }
//-----------------------comp life cycle exmple-------
@Input() counter=0;
name='anil'
constructor(){
   
  console.log('constructor');
  this.name='sid'
}

ngOnInit(){
  console.log('ngOnInit')
  this.name='amol'
}
ngOnDestroy(){
  console.log('ngOnDestroy');
}
ngOnChanges(){
  console.log('ngOnChanges')
}
}
 