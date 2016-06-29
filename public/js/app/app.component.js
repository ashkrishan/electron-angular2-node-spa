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
var signin_component_1 = require('./auth/signin.component');
var logout_component_1 = require('./auth/logout.component');
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.isToken = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('token') && sessionStorage.getItem('token') != null) {
            this.isToken = true;
            this._router.navigateByUrl('/clients');
            return;
        }
        this._router.navigateByUrl('/auth/signin');
    };
    AppComponent = __decorate([
        router_1.Routes([
            { path: '/', component: signin_component_1.SigninComponent },
            { path: '/clients/:id', component: tab_data_component_1.TabDataComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent },
            { path: '/dbapp', component: tab_data_component_1.TabDataComponent },
            { path: '/clients', component: clients_list_component_1.ClientsListComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent },
            { path: '*', component: signin_component_1.SigninComponent },
        ]),
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <my-header></my-header>\n         <div class=\"container-fluid\">            \n            <router-outlet></router-outlet>\n        </div>\n    ",
            styleUrls: ['app.styles.css'],
            directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSx1QkFBZ0QsaUJBQWlCLENBQUMsQ0FBQTtBQUVsRSxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxrRUFBa0U7QUFDbEUseUNBQXNDLGlDQUFpQyxDQUFDLENBQUE7QUFDeEUsbUNBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsdUNBQW1DLGdDQUFnQyxDQUFDLENBQUE7QUFDcEUsaUNBQThCLHlCQUF5QixDQUFDLENBQUE7QUFDeEQsaUNBQThCLHlCQUF5QixDQUFDLENBQUE7QUErQnhEO0lBR0ksc0JBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRjNCLFlBQU8sR0FBVyxLQUFLLENBQUM7SUFJL0IsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUM7UUFDVixDQUFDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFHL0MsQ0FBQztJQTVDTDtRQUFDLGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRztZQUN6QyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHFDQUFnQixFQUFFO1lBQ3BELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUUsa0RBQXVCLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxxQ0FBZ0IsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFO1lBQ3BELEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtZQUM5QyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUcsU0FBUyxFQUFFLGtDQUFlLEVBQUM7U0FJM0MsQ0FBQztRQUVELGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDRKQUtUO1lBQ0QsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSwwQkFBaUIsQ0FBQztTQUduRCxDQUFDOztvQkFBQTtJQXFCRixtQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksb0JBQVksZUFvQnhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuLy9pbXBvcnQge01lc3NhZ2VzQ29tcG9uZW50fSBmcm9tICcuL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7VGFiRGF0YUNvbXBvbmVudH0gZnJvbSAnLi9kYmFwcC90YWItZGF0YS5jb21wb25lbnQnO1xuaW1wb3J0IHtDbGllbnRzTGlzdENvbXBvbmVudH0gZnJvbSAnLi9kYmFwcC9jbGllbnRzLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tICcuL2F1dGgvc2lnbmluLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ291dENvbXBvbmVudH0gZnJvbSAnLi9hdXRoL2xvZ291dC5jb21wb25lbnQnO1xuXG5cblxuQFJvdXRlcyhbICAgIFxuICAgIHtwYXRoOiAnLycsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50ICB9LFxuICAgIHtwYXRoOiAnL2NsaWVudHMvOmlkJywgY29tcG9uZW50OiBUYWJEYXRhQ29tcG9uZW50IH0sXG4gICAge3BhdGg6ICcvYXV0aCcsICBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9kYmFwcCcsIGNvbXBvbmVudDogVGFiRGF0YUNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvY2xpZW50cycsIGNvbXBvbmVudDogQ2xpZW50c0xpc3RDb21wb25lbnQgfSxcbiAgICB7cGF0aDogJy9sb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudCB9LFxuICAgIHtwYXRoOiAnKicsICBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudH0sXG5cblxuXG5dKVxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydhcHAuc3R5bGVzLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtOYXZiYXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxuXG4gICBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgaXNUb2tlbjpib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3JvdXRlcjogUm91dGVyKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7ICAgICAgICAgICAgICAgIFxuICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT0gbnVsbCkge1xuICAgICAgICAgICB0aGlzLmlzVG9rZW4gPSB0cnVlOyAgICAgICAgIFxuICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2NsaWVudHMnKTtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9hdXRoL3NpZ25pbicpO1xuICAgICAgIFxuXG4gICAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
