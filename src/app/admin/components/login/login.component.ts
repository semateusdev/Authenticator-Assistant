import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup

  constructor(    
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  private buildForm(){
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
  login(event: Event){
    event.preventDefault()
    if(this.formLogin.valid){
      const value = this.formLogin.value
      this.authService.login(value.email, value.password)
      .then(()=>{
        this.router.navigate(['/home'])
      })
      .catch(()=>{
        alert('Usuario / contraseña no valido')
      })
    }
  }
}
