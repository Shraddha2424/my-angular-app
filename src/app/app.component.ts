import { Component, computed, effect, Input, Signal, signal, ViewChild, viewChild, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
// import { CommonModule,NgSwitchCase } from '@angular/common';

import { eventNames } from 'process';
import { runInContext } from 'vm';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { UserComponent } from './user/user.component';
import { User1Component } from "./user1/user1.component";
import { CurrencyConvertorPipe } from './pipe/currency-convertor.pipe';



@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, NgIf,NgFor, FormsModule, User1Component,CommonModule,CurrencyConvertorPipe ,UserComponent,ViewChild],
  // template: `<h1>Hello World from Angular 19!</h1>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true

})
export class AppComponent  implements AfterViewInit {
  // //   title = 'Angular 19 version'
  // //   // name = "shraddha ajabe"
  // color1='green';
  // count=signal(10);
  // x=20;

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
  //  count=0
  //   handleCounter(val:string){
  //     if(val=='minus'){
  //       this.count=this.count-1
  //     }else if(val =='plus'){
  //       this.count=this.count+1
  //     }else{
  //       this.count=0
  //     }

  //   }
  // event listener

  // handleEvent(event:Event){
  //   console.log("function called",event.type);
  //   console.log("value",(event.target as HTMLInputElement).value);

  // }

  // get set 

  //   name="";
  //   displayName="";
  //   email="";
  //   getName(event:Event){
  //     this.name=(event.target as HTMLInputElement).value;

  //   }

  //   showName(){
  //    this.displayName=this.name;
  //   }
  //   setName(){
  //     this.name="shraddha"
  //   }
  //  getEmail(val:string){

  //   this.email=val
  //  }
  //  setEmail(){
  //   // console.log(val);
  //   this.email="Default@gmail.com"
  //  }

  // if else | control flow

  // display=true
  //   toggleDiv=true;
  //   color=1;



  //   hide(){
  //     this.display=false
  //   }
  //   show(){
  //     this.display= true
  //   }
  //   toggle(){
  //     this.display=!this.display
  //   }
  //   toggleTwo(){
  //   this.toggleDiv=!this.toggleDiv;
  //   }

  //   handColor(val:number){
  //    this.color=val
  //   }
  //   handleInput(event:Event){
  //     this.color=parseInt((event.target as HTMLInputElement).value)
  //   } 

  // switch case

  // handleColor1(val:string){
  //    this.color1=val
  // }
  // changedColor(event:Event){
  //   this.color1=(event.target as HTMLInputElement).value
  // }

  // users=["anil","shraddha","ganesh","tejas","varsha"];

  // students=[
  //   {name:"anul",age:24,email:"anl@gmail.com"},
  //   {name:"varsha",age:14,email:"varsha@gmail.com"},
  //   {name:"tejas",age:28,email:"tejas@gmail.com"},
  //   {name:"anuj",age:20,email:"anuj@gmail.com"},
  // ];
  // getName(name:string){
  //  console.log(name); 
  // }
  //   constructor(){
  //      effect(()=>{
  //       console.log(this.count());
  //      })
  //   } 
  // updateValue(val:string){
  // // this.count.set(100);

  // if(val=='inc'){
  //  this.count.set(this.count()+1)
  // }else{
  //   this.count.set(this.count()-1)
  // }
  // }

  // data :WritableSignal<number>=signal(10);
  // // count:Signal<number>= computed(()=>10);
  // updateSignal(){
  //   this.data.update((val)=>val+1)
  // }

  //  x=signal(10);
  //  y=signal(30);
  //  z=computed(()=>this.x()+this.y());

  //  showValue(){
  //   console.log(this.z());
  //   this.x.set(100)
  //   console.log(this.z())
  //  }
  //  updateX(){
  //   this.x.set(200)
  //  }
  // Effect
  // userName=signal('anil');
  // count=signal(0)
  // displayHeading=false;

  // constructor(){
  //   effect(()=>{
  //      if(this.count()==2){
  //       this.displayHeading=true
  //     setTimeout(()=>{
  //       this.displayHeading=false
  //     },2000)
  //      }else if(this.count()==10){
  //       this.displayHeading=true
  //      }else{
  //       this.displayHeading=false 
  //      }


  //   })
  // }
  // toggleValue()
  // {
  //   this.count.set(this.count()+1)
  // }

  // //////////////////////// for loopp contextual variables////////////////////////////

  // users=["anil","shraddha","ganesh","tejas","varsha","tonny","vinay","sham"];
  // // users=[];

  // two way binding

  // name="anil";

  // changedName(event:Event){
  //  const val=(event.target as HTMLInputElement).value
  //   this.name=val
  // }

  //////////////// todo list///////////////////////////////
  // bgColor="red"
  // fontSize="30"
  // headingSizeSmall="5px"
  // headingSizeBig="80px" 

  // zoom=true

  // task = "";
  // taskList: { id: number, task: string }[] = []

  

  // addTask() {
  //   this.taskList.push({ id: this.taskList.length + 1, task: this.task })
  //   this.task = ''
  //   console.log(this.taskList)
  // }
  // deleteTask(taskId: number) {
  //   console.log( this.taskList = this.taskList.filter((item) => item.id != taskId));
  // }
  // updateHeading(){
  //   this.zoom=!this.zoom
  // }

  // showTitle=true;
  // users=["anil","shraddha","ganesh","tejas","varsha"];

  // block=0
  // updateBlock(){
  //   this.block++;
  // }
  // color="red"
  // changdColor(){
  //   this.color=this.color;
  // }

  // /////////////////////////// Routers /////////////////////


  //////////////////////////// ///////////////// Basic Reactive Forms/////////////////////////

  // name=new FormControl('anil');
  // password=new FormControl('123');

  // displayValue(){
  //   console.log(this.name.value,this.password.value);
  // }
  // setValue(){
  //   this.name.setValue('peter');
  //   this.password.setValue('1234567');
  // }

  // ///////////////////////////////form grouping/////////////////
  // profileform = new FormGroup({
  //     name:new FormControl('',[ Validators.required]),
  //     password:new FormControl('',[ Validators.required , Validators.minLength(5)]),
  //     email:new FormControl('',[ Validators.required , Validators.maxLength(20),Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]),
  // }
 
  // );
  // onSubmit(){
  //   console.log(this.profileform.value)
  // }
  // // gtter method 
  // get name(){
  //   return this.profileform.get('name');
  // }
  // get password(){
  //   return this.profileform.get('password');
  // }
  // get email(){
  //   return this.profileform.get('email');
  // }

  // setValuue(){
  //   this.profileform.setValue({
  //     name:'shraddha',
  //     password:'321',
  //     email:'shraddha@gmail.com'
  //   })
  // }
  //////////////////////////////template form///////////////////////
  // userData:any

  // addUser(val:NgForm){
  //   console.log(val);
  //   this.userData=val;

  // }

  ////////////////////////////////////  pass data parents to child component //////////


  //////////////////////////////////////////////////////
  // users=['anil','shraddha','tejas','ganesh','varsha'];

  /////////////////////////////

  // users:undefined|string[]=[];
  // handleUsers(users:string[]){
  //   this.users=users;
  // }

  //----------------------Pipes in angular------------------------
  // title="code step by step";
  // date=new Date();
  // amout=10;


  //------------------------------/custome pipe-------------------
// amout=10;
counter = 0;

  // Get reference to UserComponent
  @ViewChild(UserComponent) userComponent!: UserComponent;

  constructor() {}

  ngAfterViewInit() {
    console.log("Child Component Counter:", this.userComponent.counter);
  }

  updateCounter() {
    this.counter++;
    console.log("Parent Counter Updated:", this.counter);
  }


}
