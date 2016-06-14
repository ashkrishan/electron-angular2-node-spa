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
var tab_data_component_1 = require('./dbapp/tab-data.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_1.Routes([
            { path: '/', component: messages_component_1.MessagesComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent },
            { path: '/dbapp', component: tab_data_component_1.TabDataComponent },
            { path: '*', component: messages_component_1.MessagesComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUUxRCxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxtQ0FBZ0MsK0JBQStCLENBQUMsQ0FBQTtBQUNoRSx5Q0FBc0MsaUNBQWlDLENBQUMsQ0FBQTtBQUN4RSxtQ0FBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQTRCNUQ7SUFBQTtJQUVBLENBQUM7SUExQkQ7UUFBQyxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFHO1lBQzNDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUUsa0RBQXVCLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxxQ0FBZ0IsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUcsU0FBUyxFQUFFLHNDQUFpQixFQUFDO1NBSTdDLENBQUM7UUFFRCxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSw2SUFLVDtZQUNELFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQzdCLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsMEJBQWlCLENBQUM7U0FHbkQsQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7TWVzc2FnZXNDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50JztcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gJy4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtUYWJEYXRhQ29tcG9uZW50fSBmcm9tICcuL2RiYXBwL3RhYi1kYXRhLmNvbXBvbmVudCc7XG5cblxuXG5AUm91dGVzKFtcbiAgICB7cGF0aDogJy8nLCBjb21wb25lbnQ6IE1lc3NhZ2VzQ29tcG9uZW50ICB9LFxuICAgIHtwYXRoOiAnL2F1dGgnLCAgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvZGJhcHAnLCBjb21wb25lbnQ6IFRhYkRhdGFDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnKicsICBjb21wb25lbnQ6IE1lc3NhZ2VzQ29tcG9uZW50fSxcblxuXG5cbl0pXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC5zdHlsZXMuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW05hdmJhckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXG5cbiAgIFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
