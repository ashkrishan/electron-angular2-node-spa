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
var admin_component_1 = require('./admin.component');
var AuthenticationComponent = (function () {
    function AuthenticationComponent(_router) {
        this._router = _router;
        this.isToken = false;
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('token') && sessionStorage.getItem('token') != null) {
            this.isToken = true;
            return;
        }
        this._router.navigateByUrl('/auth/signin');
    };
    AuthenticationComponent = __decorate([
        router_1.Routes([
            { path: '/admin/:id', component: signup_component_1.SignupComponent },
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/signin', component: signin_component_1.SigninComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent },
            { path: '/admin', component: admin_component_1.AdminComponent },
        ]),
        core_1.Component({
            selector: 'my-auth',
            template: "\n            <div *ngIf=\"isToken\">\n                <header>\n                        <ul class=\"nav nav-pills\" id=\"sublinks\">\n                            <li><a class=\"menu-button\" [routerLink]=\"['./signup']\">Create New User</a></li>\n                            <li><a class=\"menu-button\"  [routerLink]=\"['./admin']\">User Admin</a></li>\n                        </ul>\n                </header>\n            </div>\n            <router-outlet></router-outlet>\n            \n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n    header {\n    background: white;\n    color: #000;\n    position: relative;\n    \n\n    animation-name: slideDown;\n\tanimation-duration: 1s;\t\n\tanimation-timing-function: ease;\t\n\tvisibility: visible !important;\n}\nheader ul {\n    list-style: none;\n    margin-bottom: 20px;\n    padding: 0;\n}\nheader ul li{\n    display: inline-block;\n    margin-right: 20px\n}\n\n@keyframes slideDown {\n    0% {\n\t\ttransform: translateY(-100%);\n\t}\n\t50%{\n\t\ttransform: translateY(8%);\n\t}\n\t65%{\n\t\ttransform: translateY(-4%);\n\t}\n\t80%{\n\t\ttransform: translateY(4%);\n\t}\n\t95%{\n\t\ttransform: translateY(-2%);\n\t}\t\t\t\n\t100% {\n\t\ttransform: translateY(0%);\n\t}\t\n}\n\nul#sublinks > li {    \n    background-color: rgba(0, 72, 255, 0.04);\n    border-radius: 10%;\n    font-weight: bold;\n}\n\n.nav ul > li:hover ul {\n    visibility:visible;\n    opacity:1;\n    filter:alpha(opacity=100);\n}\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;
// ul#sublinks {
//     transition:2000ms ease-in-out;
// }
// 0% {
//     transform: translateY(-80px);
// }
// 100% {
//     transform: translateY(0);
// }
// animation-name: dropHeader;
// animation-iteration-count: 1;
// animation-timing-function: ease-out;
// animation-duration: 0.6s; 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQWdELGlCQUFpQixDQUFDLENBQUE7QUFFbEUsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFvRmpEO0lBR0ksaUNBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRjNCLFlBQU8sR0FBVyxLQUFLLENBQUM7SUFJL0IsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNLENBQUM7UUFDVixDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTdGTDtRQUFDLGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztZQUNoRCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7U0FDOUMsQ0FBQztRQUVELGdCQUFTLENBQUU7WUFDUixRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsbWZBV1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixNQUFNLEVBQUUsQ0FBQyxrNkJBc0RSLENBQUM7U0FDTCxDQUFDOzsrQkFBQTtJQWtCRiw4QkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksK0JBQXVCLDBCQWdCbkMsQ0FBQTtBQUlELGdCQUFnQjtBQUVoQixxQ0FBcUM7QUFFckMsSUFBSTtBQUVBLE9BQU87QUFDUCxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKLFNBQVM7QUFDVCxnQ0FBZ0M7QUFDaEMsSUFBSTtBQUVKLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFDaEMsdUNBQXVDO0FBQ3ZDLDRCQUE0QiIsImZpbGUiOiJhdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSAnLi9zaWdudXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gJy4vc2lnbmluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tICcuL2xvZ291dC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FkbWluQ29tcG9uZW50fSBmcm9tICcuL2FkbWluLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbkBSb3V0ZXMoW1xyXG4gICAge3BhdGg6ICcvYWRtaW4vOmlkJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnR9LCAgICAgIC8vY2hpbGQgcm91dGVzXHJcbiAgICB7cGF0aDogJy9zaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudH0sICAgICAgLy9jaGlsZCByb3V0ZXNcclxuICAgIHtwYXRoOiAnL3NpZ25pbicsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50fSwgICAgICAgLy9jaGlsZCByb3V0ZXNcclxuICAgIHtwYXRoOiAnL2xvZ291dCcsIGNvbXBvbmVudDogTG9nb3V0Q29tcG9uZW50fSwgICAgICAgLy9jaGlsZCByb3V0ZXNcclxuICAgIHtwYXRoOiAnL2FkbWluJywgY29tcG9uZW50OiBBZG1pbkNvbXBvbmVudH0sICAgICAgIC8vY2hpbGQgcm91dGVzXHJcbl0pXHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBzZWxlY3RvcjogJ215LWF1dGgnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzVG9rZW5cIj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHNcIiBpZD1cInN1YmxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJtZW51LWJ1dHRvblwiIFtyb3V0ZXJMaW5rXT1cIlsnLi9zaWdudXAnXVwiPkNyZWF0ZSBOZXcgVXNlcjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwibWVudS1idXR0b25cIiAgW3JvdXRlckxpbmtdPVwiWycuL2FkbWluJ11cIj5Vc2VyIEFkbWluPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICAgICAgXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHN0eWxlczogW2BcclxuICAgIGhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlRG93bjtcclxuXHRhbmltYXRpb24tZHVyYXRpb246IDFzO1x0XHJcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcdFxyXG5cdHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG5oZWFkZXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmhlYWRlciB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMjBweFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XHJcbiAgICAwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG5cdH1cclxuXHQ1MCV7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOCUpO1xyXG5cdH1cclxuXHQ2NSV7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQlKTtcclxuXHR9XHJcblx0ODAle1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQlKTtcclxuXHR9XHJcblx0OTUle1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XHJcblx0fVx0XHRcdFxyXG5cdDEwMCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuXHR9XHRcclxufVxyXG5cclxudWwjc3VibGlua3MgPiBsaSB7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA3MiwgMjU1LCAwLjA0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubmF2IHVsID4gbGk6aG92ZXIgdWwge1xyXG4gICAgdmlzaWJpbGl0eTp2aXNpYmxlO1xyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgZmlsdGVyOmFscGhhKG9wYWNpdHk9MTAwKTtcclxufVxyXG4gICAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgaXNUb2tlbjpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9yb3V0ZXI6IFJvdXRlcikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7XHJcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICE9IG51bGwpIHtcclxuICAgICAgICAgICB0aGlzLmlzVG9rZW4gPSB0cnVlOyAgICAgICAgIFxyXG4gICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYXV0aC9zaWduaW4nKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIHVsI3N1YmxpbmtzIHtcclxuICAgXHJcbi8vICAgICB0cmFuc2l0aW9uOjIwMDBtcyBlYXNlLWluLW91dDtcclxuXHJcbi8vIH1cclxuXHJcbiAgICAvLyAwJSB7XHJcbiAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MHB4KTtcclxuICAgIC8vIH1cclxuICAgIC8vIDEwMCUge1xyXG4gICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBhbmltYXRpb24tbmFtZTogZHJvcEhlYWRlcjtcclxuICAgIC8vIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAvLyBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIC8vIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42czsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
