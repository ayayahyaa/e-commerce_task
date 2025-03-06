import { CheckoutComponent } from './../checkout/checkout.component';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms' ;
import { AuthService } from '../../core/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private readonly authService = inject (AuthService);
  private readonly formBuilder = inject (FormBuilder);



  private readonly router = inject (Router);


  isLoading : boolean = false ;
  msgError :string = ""
  isSuccess :string = ""


  registerForm : FormGroup = this.formBuilder.group ({
    name: [null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20) ] ],
    email: [null , [Validators.required , Validators.email ]],
    password: [null , [Validators.required , Validators.pattern(/^\w{6,}$/)]],
    rePassword: [[null]],
    phone: [null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]],
  }, { Validators: this.confirmPassword })


  submitForm():void{
    if (this.registerForm.valid){
      this.isLoading = true;
      this.authService.sendRegisterForm(this.registerForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          if( res.message === 'success'){

            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000);

            this.isSuccess = res.message
          }
          this.isLoading = false;
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
          this.msgError = err.error.message
          this.isLoading = false;
        },
      })
    }else{
      this.registerForm.markAllAsTouched();
    }
  }
  confirmPassword (groub : AbstractControl){
    const password = groub.get('password')?.value;
    const rePassword = groub.get('rePassword')?.value;

    return password === rePassword ? null : {mismatch:true}

  }


}
