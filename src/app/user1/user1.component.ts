import { Component, Input, input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user1',
  imports: [],
  templateUrl: './user1.component.html',
  styleUrl: './user1.component.css'
})
export class User1Component {

  // @Input() user:string=''

  //  @Input() user:string=''    //pass data parent to child comp

  //-----------------------pass data child to parent comp-----------------

  @Output() getUsers = new EventEmitter<string[]>();
  
  users=['anil','shraddha','tejs','ganesh','varsha','shubham'];

  loadData() {
    this.getUsers.emit(this.users);
  }
}

