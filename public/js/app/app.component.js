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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_1.Routes([
            { path: '/', component: tab_data_component_1.TabDataComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent },
            { path: '/dbapp', component: tab_data_component_1.TabDataComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUUxRCxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxrRUFBa0U7QUFDbEUseUNBQXNDLGlDQUFpQyxDQUFDLENBQUE7QUFDeEUsbUNBQStCLDRCQUE0QixDQUFDLENBQUE7QUE0QjVEO0lBQUE7SUFFQSxDQUFDO0lBMUJEO1FBQUMsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxxQ0FBZ0IsRUFBRztZQUMxQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFLGtEQUF1QixFQUFDO1lBQ3BELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUscUNBQWdCLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFHLFNBQVMsRUFBRSxrREFBdUIsRUFBQztTQUluRCxDQUFDO1FBRUQsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsMkpBS1Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLDBCQUFpQixDQUFDO1NBR25ELENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG4vL2ltcG9ydCB7TWVzc2FnZXNDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50JztcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gJy4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtUYWJEYXRhQ29tcG9uZW50fSBmcm9tICcuL2RiYXBwL3RhYi1kYXRhLmNvbXBvbmVudCc7XG5cblxuXG5AUm91dGVzKFtcbiAgICB7cGF0aDogJy8nLCBjb21wb25lbnQ6IFRhYkRhdGFDb21wb25lbnQgIH0sXG4gICAge3BhdGg6ICcvYXV0aCcsICBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9kYmFwcCcsIGNvbXBvbmVudDogVGFiRGF0YUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcqJywgIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnR9LFxuXG5cblxuXSlcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG15LWhlYWRlcj48L215LWhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydhcHAuc3R5bGVzLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtOYXZiYXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxuXG4gICBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
