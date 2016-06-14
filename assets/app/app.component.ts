import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {MessagesComponent} from './messages/messages.component';
import {AuthenticationComponent} from './auth/authentication.component';
import {TabDataComponent} from './dbapp/tab-data.component';



@Routes([
    {path: '/', component: MessagesComponent  },
    {path: '/auth',  component: AuthenticationComponent},
    {path: '/dbapp', component: TabDataComponent},
    {path: '*',  component: MessagesComponent},



])

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['app.styles.css'],
    directives: [NavbarComponent, ROUTER_DIRECTIVES]

   
})
export class AppComponent {

}
