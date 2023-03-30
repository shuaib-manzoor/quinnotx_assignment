import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  environment = environment;
  loginForm: any;
  submitted = false
  loginedUser = {
    username: 'quinnox@gmail.com',
    password: "123456"
  }
  fieldTextType = false;

  constructor( private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.status == 'INVALID') {
      return
    }

    Swal.fire({
      text: "Logging in. Please wait...",
      icon: "info",
      didOpen: () => {
        Swal.showLoading();
      }
    })
    setTimeout(() => {
      Swal.close();
      if (this.loginForm.value.username == this.loginedUser.username && this.loginForm.value.password == this.loginedUser.password) {
        this.router.navigate(["/engineers"])
      }
      else {
        Swal.fire("Error", "Email or password is incorrect. Please provide the correct one.", 'error');
        return
      }
    }, 1500);
  }

  get f() { return this.loginForm.controls }

  toggleFieldTextType() { this.fieldTextType = !this.fieldTextType }

  noFeature() {
    Swal.fire("Not allowed", "This feature is not allowed in this version.", 'info')
  }

}
