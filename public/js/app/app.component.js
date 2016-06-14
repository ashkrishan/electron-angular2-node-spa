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
var messages_component_1 = require('./messages/messages.component');
var authentication_component_1 = require('./auth/authentication.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_1.Routes([
            { path: '/', component: messages_component_1.MessagesComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent },
            { path: '*', component: messages_component_1.MessagesComponent }
        ]),
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <div class=\"container\">\n            <my-header></my-header>\n            <router-outlet></router-outlet>\n        </div>\n    ",
            styleUrls: ['app.styles.css'],
            directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUUxRCxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxtQ0FBZ0MsK0JBQStCLENBQUMsQ0FBQTtBQUNoRSx5Q0FBc0MsaUNBQWlDLENBQUMsQ0FBQTtBQTBCeEU7SUFBQTtJQUVBLENBQUM7SUF4QkQ7UUFBQyxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFHO1lBQzNDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUUsa0RBQXVCLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFHLFNBQVMsRUFBRSxzQ0FBaUIsRUFBQztTQUc3QyxDQUFDO1FBRUQsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsNklBS1Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLDBCQUFpQixDQUFDO1NBR25ELENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge01lc3NhZ2VzQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcblxuXG5cbkBSb3V0ZXMoW1xuICAgIHtwYXRoOiAnLycsIGNvbXBvbmVudDogTWVzc2FnZXNDb21wb25lbnQgIH0sXG4gICAge3BhdGg6ICcvYXV0aCcsICBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJyonLCAgY29tcG9uZW50OiBNZXNzYWdlc0NvbXBvbmVudH1cblxuXG5dKVxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydhcHAuc3R5bGVzLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtOYXZiYXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxuXG4gICBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
