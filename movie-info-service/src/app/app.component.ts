import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit{
  title = 'movie-info-service';
  register;
  

  // @ViewChild('button') button: ElementRef;
  // activeSkill() {
  //   (<any>this.button).color = 'accent';
  // }
  
  constructor(private userService: UserService){

  }

  ngOnInit(){
    this.register ={
        username:'',
        password:'',
        email:''
    };
  }

  registerUser(){
    this.userService.registerNewUser(this.register).subscribe(
      response =>{
        alert('User '+ this.register.username + 'has been created')
      },
      error => console.log('error',error)
    )
  }
}
