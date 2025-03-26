import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  imports : [LoginComponent,ProfileComponent],
  // template: `<h1>Hello World from Angular 19!</h1>`,
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css',
  standalone: true
   
})
export class AppComponent {
//   title = 'Angular 19 version'
//   // name = "shraddha ajabe"
  
//   handleClickEvent(){
//    alert("function callled")
//    this.otherFunction()
//   }
//    otherFunction(){
//     alert("other func")
//    }

//    name:string="anil sidhu"
//    updateName(){
//     this.name="sidhu"
//     this.sum(40,30)
//    }
//    sum(a:number,b:number){
// alert(a+b);

//    }
  //  
 count=0
  handleCounter(val:string){
    if(val=='minus'){
      this.count=this.count-1
    }else if(val =='plus'){
      this.count=this.count+1
    }else{
      this.count=0
    }
  
  }
  // event listener

  handleEvent(event:Event){
    console.log("function called",event.type);
    // console.log("function called",(event.target as Element).className);


  }






}
