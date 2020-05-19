import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  input
 text
  constructor(private userService: UserService) { }

  ngOnInit(){
    this.input ={
        username:'',
        password:'',
    };
  }

  loginUser(){
    this.userService.loginNewUser(this.input).subscribe(
      response =>{
        localStorage.setItem('currentUser', JSON.stringify(response));
        alert('User '+ this.input.username + 'has login')
      },
      error => console.log('error',error)
    )
  }
  showUsers(){
    this.text = JSON.stringify(this.userService.showUsers())
  }

}
