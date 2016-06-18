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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUUxRCxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxrRUFBa0U7QUFDbEUseUNBQXNDLGlDQUFpQyxDQUFDLENBQUE7QUFDeEUsbUNBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsdUNBQW1DLGdDQUFnQyxDQUFDLENBQUE7QUE2QnBFO0lBQUE7SUFFQSxDQUFDO0lBM0JEO1FBQUMsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxxQ0FBZ0IsRUFBRztZQUMxQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFLGtEQUF1QixFQUFDO1lBQ3BELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUscUNBQWdCLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtZQUNwRCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUcsU0FBUyxFQUFFLGtEQUF1QixFQUFDO1NBSW5ELENBQUM7UUFFRCxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSwySkFLVDtZQUNELFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsMEJBQWlCLENBQUM7U0FHbkQsQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVzLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuLy9pbXBvcnQge01lc3NhZ2VzQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gJy4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RhYkRhdGFDb21wb25lbnR9IGZyb20gJy4vZGJhcHAvdGFiLWRhdGEuY29tcG9uZW50JztcclxuaW1wb3J0IHtDbGllbnRzTGlzdENvbXBvbmVudH0gZnJvbSAnLi9kYmFwcC9jbGllbnRzLWxpc3QuY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDogJy8nLCBjb21wb25lbnQ6IFRhYkRhdGFDb21wb25lbnQgIH0sXHJcbiAgICB7cGF0aDogJy9hdXRoJywgIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvZGJhcHAnLCBjb21wb25lbnQ6IFRhYkRhdGFDb21wb25lbnR9LFxyXG4gICAge3BhdGg6ICcvY2xpZW50cycsIGNvbXBvbmVudDogQ2xpZW50c0xpc3RDb21wb25lbnQgfSxcclxuICAgIHtwYXRoOiAnKicsICBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSxcclxuXHJcblxyXG5cclxuXSlcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPG15LWhlYWRlcj48L215LWhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZVVybHM6IFsnYXBwLnN0eWxlcy5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtOYXZiYXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxyXG5cclxuICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
