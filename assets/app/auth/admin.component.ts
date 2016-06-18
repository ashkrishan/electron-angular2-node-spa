import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

//import {AuthenticationComponent} from './authentication.component';

import {UserAuthService} from './auth.service';


@Component({
    moduleId: module.id,
    templateUrl: 'admin.template.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AdminComponent implements OnInit{
    users = [];
    constructor(private _usersevice : UserAuthService, private _router: Router) {

    }

    ngOnInit () {
         this._usersevice.getUsers()
            .subscribe(response => { //console.log(response)
                                    this.users = response
                                    },
                                    error => console.log(error))
    }

    onEdit(userId) {
        console.log(userId);
        this._router.navigate(['/auth/admin/' + userId]);

    }

    

}