import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';

import {User} from './user';
import {UserAuthService} from './auth.service';

@Component({
    moduleId: module.id,
    templateUrl: 'signup.template.html',
    styles: [`
        .ng-invalid.ng-touched {
         border: 1px solid red;
        }

    `]
})

export class SignupComponent implements OnInit{
    signupForm : ControlGroup;
    
    constructor(private _fb: FormBuilder, private _authService: UserAuthService ) {

    }

    onSubmit() {
        var user = new User(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName)
        this._authService.signupUser(user)
            .subscribe(response => console.log(response),
                     error => console.log(error)
            );
    }


    ngOnInit () {
            this.signupForm = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
        
    
        })
        // console.log(this.signupForm.errors);
    }


}