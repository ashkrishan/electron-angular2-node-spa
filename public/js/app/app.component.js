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
        // }
    };
    AppComponent = __decorate([
        router_1.Routes([
            { path: '/', component: signin_component_1.SigninComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSx1QkFBZ0QsaUJBQWlCLENBQUMsQ0FBQTtBQUVsRSxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxrRUFBa0U7QUFDbEUseUNBQXNDLGlDQUFpQyxDQUFDLENBQUE7QUFDeEUsbUNBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsdUNBQW1DLGdDQUFnQyxDQUFDLENBQUE7QUFDcEUsaUNBQThCLHlCQUF5QixDQUFDLENBQUE7QUFDeEQsaUNBQThCLHlCQUF5QixDQUFDLENBQUE7QUErQnhEO0lBR0ksc0JBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRjNCLFlBQU8sR0FBVyxLQUFLLENBQUM7SUFJL0IsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUM7UUFDVixDQUFDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFHL0MsSUFBSTtJQUdSLENBQUM7SUEvQ0Q7UUFBQyxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUc7WUFDekMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRSxrREFBdUIsRUFBQztZQUNwRCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHFDQUFnQixFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7WUFDcEQsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1lBRTlDLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRyxTQUFTLEVBQUUsa0NBQWUsRUFBQztTQUkzQyxDQUFDO1FBRUQsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsNEpBS1Q7WUFDRCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QixVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLDBCQUFpQixDQUFDO1NBR25ELENBQUM7O29CQUFBO0lBc0JGLG1CQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFEQTtBQXBCWSxvQkFBWSxlQW9CeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVzLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG4vL2ltcG9ydCB7TWVzc2FnZXNDb21wb25lbnR9IGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50JztcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gJy4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtUYWJEYXRhQ29tcG9uZW50fSBmcm9tICcuL2RiYXBwL3RhYi1kYXRhLmNvbXBvbmVudCc7XG5pbXBvcnQge0NsaWVudHNMaXN0Q29tcG9uZW50fSBmcm9tICcuL2RiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gJy4vYXV0aC9zaWduaW4uY29tcG9uZW50JztcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tICcuL2F1dGgvbG9nb3V0LmNvbXBvbmVudCc7XG5cblxuXG5AUm91dGVzKFtcbiAgICB7cGF0aDogJy8nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCAgfSxcbiAgICB7cGF0aDogJy9hdXRoJywgIGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2RiYXBwJywgY29tcG9uZW50OiBUYWJEYXRhQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9jbGllbnRzJywgY29tcG9uZW50OiBDbGllbnRzTGlzdENvbXBvbmVudCB9LFxuICAgIHtwYXRoOiAnL2xvZ291dCcsIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50IH0sXG5cbiAgICB7cGF0aDogJyonLCAgY29tcG9uZW50OiBTaWduaW5Db21wb25lbnR9LFxuXG5cblxuXSlcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG15LWhlYWRlcj48L215LWhlYWRlcj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnYXBwLnN0eWxlcy5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbTmF2YmFyQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cblxuICAgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgcHVibGljIGlzVG9rZW46Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIF9yb3V0ZXI6IFJvdXRlcikge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkgeyAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICE9IG51bGwpIHtcbiAgICAgICAgICAgdGhpcy5pc1Rva2VuID0gdHJ1ZTsgICAgICAgICBcbiAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9jbGllbnRzJyk7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYXV0aC9zaWduaW4nKTtcbiAgICAgICBcblxuICAgIC8vIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
