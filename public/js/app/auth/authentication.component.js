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
var signup_component_1 = require('./signup.component');
var signin_component_1 = require('./signin.component');
var logout_component_1 = require('./logout.component');
var AuthenticationComponent = (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent = __decorate([
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/signin', component: signin_component_1.SigninComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent },
        ]),
        core_1.Component({
            selector: 'my-auth',
            template: "\n        <div class=\"row\">\n            <div class=\"col-md-10 col-md-offset-2\">\n                    <ul class=\"nav nav-pills\">\n                        <li><a [routerLink]=\"['./signup']\">Signup</a></li>\n                        <li><a [routerLink]=\"['./signin']\">Sign-in</a></li>\n                        <li><a [routerLink]=\"['./logout']\">Logout</a></li>\n                    </ul>\n            </div>\n        </div>\n        <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFFMUQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUEyQm5EO0lBQUE7SUFFQSxDQUFDO0lBekJEO1FBQUMsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7U0FDaEQsQ0FBQztRQUVELGdCQUFTLENBQUU7WUFDUixRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsaWVBV1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNsQyxDQUFDOzsrQkFBQTtJQUlGLDhCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSwrQkFBdUIsMEJBRW5DLENBQUEiLCJmaWxlIjoiYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVzLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tICcuL3NpZ251cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSAnLi9zaWduaW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtMb2dvdXRDb21wb25lbnR9IGZyb20gJy4vbG9nb3V0LmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbkBSb3V0ZXMoW1xyXG4gICAge3BhdGg6ICcvc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnR9LCAgICAgIC8vY2hpbGQgcm91dGVzXHJcbiAgICB7cGF0aDogJy9zaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudH0sICAgICAgIC8vY2hpbGQgcm91dGVzXHJcbiAgICB7cGF0aDogJy9sb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudH0sICAgICAgIC8vY2hpbGQgcm91dGVzXHJcbl0pXHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBzZWxlY3RvcjogJ215LWF1dGgnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL3NpZ251cCddXCI+U2lnbnVwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vc2lnbmluJ11cIj5TaWduLWluPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vbG9nb3V0J11cIj5Mb2dvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
