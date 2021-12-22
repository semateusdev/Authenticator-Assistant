import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth/auth.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup

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
    this.formRegister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  newRegister(event: Event){
    event.preventDefault()
    if(this.formRegister.valid){
      const value = this.formRegister.value
      this.authService.createUser(value.email, value.password)
      .then(()=> {
        this.router.navigate(['/'])
      })
    }
  }
}
