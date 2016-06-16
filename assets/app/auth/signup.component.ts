import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {AlertComponent} from 'ng2-bootstrap/components/alert';

import {User} from './user';
import {UserAuthService} from './auth.service';

@Component({
    moduleId: module.id,
    templateUrl: 'signup.template.html',
    styles: [`
        .ng-invalid.ng-touched {
         border: 1px solid red;
        }
        

    `],
    directives: [AlertComponent]
})

export class SignupComponent implements OnInit{
    signupForm : ControlGroup;
    
        
    constructor(private _fb: FormBuilder, private _authService: UserAuthService ) {
        // this.signupForm.value.admin = false;
    }

    onSubmit() {
        var user = new User(this.signupForm.value.email, 
                            this.signupForm.value.password, 
                            this.signupForm.value.firstName,
                             this.signupForm.value.lastName, 
                             this.signupForm.value.admin)
        this._authService.signupUser(user)
            .subscribe(response => console.log(response),
                     error => console.log(error)
            );
    }


    ngOnInit () {            
            this.signupForm = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            admin: [],
            email: ['', Validators.required],
            password: ['', Validators.required],
        
    
        })
        this.signupForm.value.admin = false;

    }

    setAdmin() {
        if(!this.signupForm.value.admin || this.signupForm == null) {
            this.signupForm.value.admin = true;
        } else {
            this.signupForm.value.admin = false;

        }
        console.log(this.signupForm.value.admin)
    }


}