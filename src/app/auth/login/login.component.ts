import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from '../interfaces/login-data.interface';
//services
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async onLogin(data: LoginData){
    const { email, password} = this.loginForm.value;
    try{
      const user = await this.authService.login(email, password);
      this.authService.login(email, password);
      if(user){
        this.router.navigate(['/home']);
      }

    }
    catch(error){
      console.log(error)
    }

  }

}
