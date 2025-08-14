import { Component } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  FormsModule, 
  ReactiveFormsModule, 
  Validators 
  } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { passwordStrengthValidator } from '../../../validators/password-strength.validator'
import { passwordConfirmValidator } from '../../../validators/password-confirm.validator';
import { ConfirmPasswordErrorStateMatcher } from './signup.state-matchers';

@Component({
  selector: 'app-signup',
  imports: [
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    MatButtonModule
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  constructor(private fb: FormBuilder){ }

  confirmPasswordErrorStateMatcher : ConfirmPasswordErrorStateMatcher = new ConfirmPasswordErrorStateMatcher();
  requiredPasswordLength: number = 10

  form : FormGroup = this.fb.group({
    email: ['', [
      Validators.required, 
      Validators.email
    ]],
    password: ['', [
      Validators.required, 
      Validators.minLength(this.requiredPasswordLength),
      passwordStrengthValidator()
    ]],
    confirmPassword: ['', [
      Validators.required
    ]]
  }, {
    validators: [passwordConfirmValidator()]
  })

  get getCurrentPasswordLength(){
    return this.form.controls['password'].value?.length
  }

  get getEmailError() {
    const emailControl = this.form.controls['email'];

    if(emailControl.hasError('required')){
      return "Email jest wymagany";
    }

    if(emailControl.hasError('email')){
      return "Email ma nieprawidłowy format";
    }

    return "Błędna wartość";
  }

  get getPasswordError() {
    const passwordControl = this.form.controls['password'];

    if(passwordControl.hasError('required')){
      return "Hasło jest wymagane";
    }

    if(passwordControl.hasError('minlength')){
      return `Hasło musi zawierać minimum ${this.requiredPasswordLength} znaków`;
    }

    if(passwordControl.hasError('passwordIsNotStrongEnough')){
      return "Hasło nie spełnia wymagań złożoności";
    }

    return "Błędna wartość";
  }

  get getConfirmPasswordError() {
    const confirmPasswordControl = this.form.controls['confirmPassword'];

    if(confirmPasswordControl.hasError('required')){
      return "Potwierdzenie hasła jest wymagane";
    }

    if(this.form.hasError('passwordsAreNotTheSame')){
      return "Hasła nie są takie same";
    }

    return "Błędna wartość";
  }
}
