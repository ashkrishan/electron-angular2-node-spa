import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
//import {MessagesComponent} from './messages/messages.component';
import {AuthenticationComponent} from './auth/authentication.component';
import {TabDataComponent} from './dbapp/tab-data.component';
import {ClientsListComponent} from './dbapp/clients-list.component';
import {SigninComponent} from './auth/signin.component';
import {LogoutComponent} from './auth/logout.component';



@Routes([    
    {path: '/', component: SigninComponent  },
    {path: '/clients/:id', component: TabDataComponent },
    {path: '/auth',  component: AuthenticationComponent},
    {path: '/dbapp', component: TabDataComponent},
    {path: '/clients', component: ClientsListComponent },
    {path: '/logout', component: LogoutComponent },
    {path: '*',  component: SigninComponent},



])

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <my-header></my-header>
         <div class="container-fluid">            
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['app.styles.css'],
    directives: [NavbarComponent, ROUTER_DIRECTIVES]

   
})
export class AppComponent {
    public isToken:boolean = false;

    constructor(public _router: Router) {

    }

    ngOnInit () {                
        if(sessionStorage.getItem('token') && sessionStorage.getItem('token') != null) {
           this.isToken = true;         
           this._router.navigateByUrl('/clients');
           return;
        } 
        
        this._router.navigateByUrl('/auth/signin');
       

    }


}
