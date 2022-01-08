import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[AuthService]
})
export class NavbarComponent implements OnInit {

  public isLogged = false;
  public user: any;
  public user$: Observable<any> = this.authService.angularFireAuth.user;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  async ngOnInit() {

   const user = await this.authService.getCurrentUser();
   if(user){
     this.isLogged = true;
    //  console.log('User', user);
   }
  }

  async onLogout(){
    try{
      await this.authService.logout();
      this.router.navigate(['/login']);
    }
    catch(error){
      console.log(error)
    }
  }

}
