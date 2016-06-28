import {Component, OnInit, DoCheck} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {CollapseDirective} from 'ng2-bootstrap/components/collapse';
import {Router} from '@angular/router';

import {UserAuthService} from '../auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: 'navbar.template.html',
    directives: [ROUTER_DIRECTIVES, CollapseDirective],
    styles: [`
        .router-link-active {
            font-weight: bold;
            background-color:  #717B81;        
        };

        
    `],


})

export class NavbarComponent implements  OnInit, DoCheck{
    public isCollapsed:boolean = true;
    signinMarker:boolean = false;
    isAdmin:boolean = false;

    constructor(private _authService: UserAuthService ) {
    //    this.signinMarker = this._authService.isLoggedIn();
    //    console.log(this.signinMarker)
    }

    // ngAfterContentChecked() {
    //       this.signinMarker = this._authService.isLoggedIn();
    //       console.log(this.signinMarker)
    // }


    ngOnInit () {
        this.signinMarker = false;
        this.isAdmin = false;

    }

    ngDoCheck() {
        if(!this.signinMarker) { 
            this.signinMarker = this._authService.isLoggedIn();
             console.log(this.signinMarker)

            if(this.signinMarker && !this.isAdmin) {
                 this._authService.getUser(sessionStorage.getItem('userId'))
                    .subscribe(user => { this.isAdmin = user.admin  
                                     console.log(" Admin prop - " + this.isAdmin);
                                   },
                                   error => console.log(error));              
            }
        } 
    }



    // isCurrentRoute (routeUrl) {
    //     this._router.urlTree.contains(this._router.createUrlTree(['/', this._routeSegment]))

    // }


//   onClick() {
//     console.log(this.segment);
//   }
}