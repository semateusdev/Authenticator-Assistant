import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logout()
    .then(()=>{
      this.router.navigate(['/'])
    })
  }

}
