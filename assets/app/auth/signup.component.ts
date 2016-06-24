import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {AlertComponent} from 'ng2-bootstrap/components/alert';
import {RouteSegment} from '@angular/router';

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
    user = User;
    btnTitle: string;
    propEdit: boolean = false;
        
    constructor(private _fb: FormBuilder, private _authService: UserAuthService, private _routeSegment: RouteSegment) {
        // this.signupForm.value.admin = false;
    }

    onSubmit() {  
        if(this.signupForm.value.admin == null) {     //Not sure why ngOnInit is not passign the assignemnt of false to admin control. This is workaround check
                this.signupForm.value.admin = false;
        }
        var user = new User(this.signupForm.value.email, 
                    this.signupForm.value.password, 
                    this.signupForm.value.firstName,
                    this.signupForm.value.lastName, 
                    this.signupForm.value.admin,
                    this.signupForm.value.FE_Code)

       var id = this._routeSegment.getParam('id'); 
        if(id) {            
            this._authService.updateUser(id, user)
                .subscribe(response => console.log(response),
                                        error => console.log(error))
        } else {
        console.log(user);
        this._authService.signupUser(user)
            .subscribe(response => console.log(response),
                     error => console.log(error)
            );
        }
    }


    ngOnInit () {  
            this.signupForm = this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            admin: [],
            email: ['', Validators.required],
            FE_Code: [],
            password: ['', Validators.required],
            
        
    
        })
        this.signupForm.value.admin = false;
        
        var id = this._routeSegment.getParam('id'); 
        this.btnTitle = id ? 'Edit user' : 'Add new user';
        if(!id) {
            return;
        }
        // console.log(id);        
        this._authService.getUser(id)
            .subscribe(response => { this.user = response
                                    console.log(this.user)
                                    } )
        this.propEdit = true;

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