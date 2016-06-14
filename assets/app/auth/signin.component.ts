import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {Router} from '@angular/router';

import {User} from './user';
import {UserAuthService} from './auth.service';

@Component({
    moduleId: module.id,
    templateUrl:'signin.template.html'
})

export class SigninComponent implements OnInit {
    signinForm: ControlGroup;

    constructor(private _fb: FormBuilder, private _authService: UserAuthService, private _router: Router) {

    }

    ngOnInit() {
        this.signinForm = this._fb.group({
            email: [],
            password:[]
        })

    }

    onSubmit() {
        const user = new User(this.signinForm.value.email, this.signinForm.value.password);
        this._authService.signinUser(user)
            .subscribe(data=>  { console.log(data);
                                localStorage.setItem('token', data.token);
                                localStorage.setItem('userId', data.userId);
                               },
                                    error => console.log(error)
            )
        this._router.navigate(['/']);
    }


}