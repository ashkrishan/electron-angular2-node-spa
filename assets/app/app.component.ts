import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
//import {MessagesComponent} from './messages/messages.component';
import {AuthenticationComponent} from './auth/authentication.component';
import {TabDataComponent} from './dbapp/tab-data.component';
import {ClientsListComponent} from './dbapp/clients-list.component';



@Routes([
    {path: '/', component: TabDataComponent  },
    {path: '/auth',  component: AuthenticationComponent},
    {path: '/dbapp', component: TabDataComponent},
    {path: '/clients', component: ClientsListComponent },
    {path: '*',  component: AuthenticationComponent},



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

}
