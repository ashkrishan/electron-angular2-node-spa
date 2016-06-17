import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserAuthService} from './auth.service';


@Component({
    moduleId: module.id,
    templateUrl: 'admin.template.html'
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
        this._router.navigateByUrl('/auth/signup/' + userId);

    }

    

}