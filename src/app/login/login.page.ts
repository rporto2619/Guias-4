import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formSubmitted = false;

  constructor(private navCtrl: NavController, private fb: FormBuilder) { }

  loginForm = this.fb.group({
    userEmail: ['', [Validators.required, Validators.email]],
    userPassword: ['', Validators.required],
  });

  ngOnInit() {
  }

  invalidField( field: string ): boolean {
    if ( this.loginForm.get(field)!.invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

  getErrorMessage(field: string): string{
    let message = '';
    if(this.loginForm.get(field)!.hasError('required')){
      message = 'Este campo es requerido';
    }else if(this.loginForm.get(field)!.hasError('email')){
      message = `Este campo debe no cumple con el formato de correo`;
    }

    return message;
  }
  
  onSubmit() {
    this.formSubmitted = true;
    if(!this.loginForm.invalid){
      this.navCtrl.navigateForward('/home');
      console.log('Formulario validado');
    }
  }
}























  // formValidator(): boolean {
  //   if (validator.isEmpty(this.loginForm.value.userEmail)) {
  //     this.loginFormValidator.userEmail.empty = "La dirección de correo es requerido"
  //     return false
  //   } else {

  //   }
  //   if (!validator.isEmpty(this.loginForm.value.userEmail)) {
  //     this.loginFormValidator.userEmail.email = "Ingrese una dirección de correo válida"
  //     return false
  //   } else {

  //   }
  //   if (validator.isEmpty(this.loginForm.value.userPassword)) {
  //     this.loginFormValidator.userPassword.empty = "La contraseña es requerida"
  //     return false
  //   } else {

  //   }

  //   return true
  // }

