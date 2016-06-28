import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {UserAuthService} from './auth.service';

@Component({
    template:`
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <button class="btn btn-danger pull-right" (click)="onLogout()">Logout</button>
            </div>
        </div>
    `
})

export class LogoutComponent {


    constructor(private _authService: UserAuthService, private _router: Router) {

    }

    onLogout() {
        this._authService.logoutUser();
        location.reload(); //reload page after logout so navbar can be reset
        this._router.navigateByUrl('/');
        


    }

}