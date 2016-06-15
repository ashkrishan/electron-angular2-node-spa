"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var navbar_component_1 = require('./navbar/navbar.component');
//import {MessagesComponent} from './messages/messages.component';
var authentication_component_1 = require('./auth/authentication.component');
var tab_data_component_1 = require('./dbapp/tab-data.component');
var clients_list_component_1 = require('./dbapp/clients-list.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_1.Routes([
            { path: '/', component: tab_data_component_1.TabDataComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent },
            { path: '/dbapp', component: tab_data_component_1.TabDataComponent },
            { path: '/clients', component: clients_list_component_1.ClientsListComponent },
            { path: '*', component: authentication_component_1.AuthenticationComponent },
        ]),
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <my-header></my-header>\n        <div class=\"container-fluid\">            \n            <router-outlet></router-outlet>\n        </div>\n    ",
            styleUrls: ['app.styles.css'],
            directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUUxRCxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxrRUFBa0U7QUFDbEUseUNBQXNDLGlDQUFpQyxDQUFDLENBQUE7QUFDeEUsbUNBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsdUNBQW1DLGdDQUFnQyxDQUFDLENBQUE7QUE2QnBFO0lBQUE7SUFFQSxDQUFDO0lBM0JEO1FBQUMsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxxQ0FBZ0IsRUFBRztZQUMxQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFLGtEQUF1QixFQUFDO1lBQ3BELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUscUNBQWdCLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtZQUNwRCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUcsU0FBUyxFQUFFLGtEQUF1QixFQUFDO1NBSW5ELENBQUM7UUFFRCxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSwySkFLVDtZQUNELFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsMEJBQWlCLENBQUM7U0FHbkQsQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50Jztcbi8vaW1wb3J0IHtNZXNzYWdlc0NvbXBvbmVudH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge1RhYkRhdGFDb21wb25lbnR9IGZyb20gJy4vZGJhcHAvdGFiLWRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7Q2xpZW50c0xpc3RDb21wb25lbnR9IGZyb20gJy4vZGJhcHAvY2xpZW50cy1saXN0LmNvbXBvbmVudCc7XG5cblxuXG5AUm91dGVzKFtcbiAgICB7cGF0aDogJy8nLCBjb21wb25lbnQ6IFRhYkRhdGFDb21wb25lbnQgIH0sXG4gICAge3BhdGg6ICcvYXV0aCcsICBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9kYmFwcCcsIGNvbXBvbmVudDogVGFiRGF0YUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvY2xpZW50cycsIGNvbXBvbmVudDogQ2xpZW50c0xpc3RDb21wb25lbnQgfSxcbiAgICB7cGF0aDogJyonLCAgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0sXG5cblxuXG5dKVxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC5zdHlsZXMuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW05hdmJhckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXG5cbiAgIFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
