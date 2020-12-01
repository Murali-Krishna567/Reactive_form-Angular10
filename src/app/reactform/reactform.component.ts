import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MustMatch } from '../_helpers/must-match.validator';
//import { passwordValidator } from '../shared/validators/password.validator';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  
  data:any;

    submitted = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
  registerForm = this.fb.group({
    title: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    // validates date format yyyy-mm-dd
    dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    gender:['',[Validators.required]],
    phoneNumber: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue]
}, {
    validator: MustMatch('password', 'confirmPassword')
});

get f() { return this.registerForm.controls; }

// onSubmit() {
//     this.submitted = true;
//     if (this.registerForm.invalid) {
//         return;
//     }
//     console.log(this.registerForm.value)
//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
// }

onReset() {
    this.submitted = false;
    this.registerForm.reset();
  
   }

   onsubmit():void{
    this.submitted =true;
   this.data=this.registerForm.value;
          console.log(this.registerForm.value)
       }
}
