import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from '../interfaces/login-data.interface';

//services
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  registerForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

 async onRegister(data: LoginData){
  const { email, password} = this.registerForm.value;
   try{
    const user = await this.authService.register(email, password);
    this.authService.register(email, password);
    // console.log(this.registerForm.value)
    if(user){
      this.router.navigate(['/home']);
    }
   }
   catch(error){
    console.log(error)
  }

  }

}
