import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {Router} from '@angular/router';

import {User} from './user';
import {UserAuthService} from './auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-signin',
    templateUrl:'signin.template.html',
    styles: [`
        .container {
            width: 30%;
            margin: 10% auto;

        }
    `]
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
                                 sessionStorage.setItem('token', data.token);
                                 sessionStorage.setItem('userId', data.userId);
                                // localStorage.setItem('token', data.token);
                                // localStorage.setItem('userId', data.userId);
                                this._router.navigate(['/clients']);
                               },
                                    error => { this.showError(error) 
                                                //console.log(error); 
                                            }
            )
        


                    
    }

    private showError(error) {
            if(error.title == 'Check credentials' || error.title == 'No user found' ) {
               alert('Incorrect email address or password');
               return;
            }
            console.log(error);
        }


}