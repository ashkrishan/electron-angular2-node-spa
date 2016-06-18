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
    function AuthenticationComponent() {
    }
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
            template: "\n            <header>\n                    <ul class=\"nav nav-pills\" id=\"sublinks\">\n                        <li><a class=\"menu-button\" [routerLink]=\"['./signup']\">Create User</a></li>\n                        <li><a class=\"menu-button\"  [routerLink]=\"['./signin']\">Sign-in</a></li>\n                        <li><a class=\"menu-button\"  [routerLink]=\"['./logout']\">Logout</a></li>\n                        <li><a class=\"menu-button\"  [routerLink]=\"['./admin']\">Admin</a></li>\n                    </ul>\n            </header>\n        <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n    header {\n    background: white;\n    color: #000;\n    position: relative;\n    \n\n    animation-name: slideDown;\n\tanimation-duration: 1s;\t\n\tanimation-timing-function: ease;\t\n\tvisibility: visible !important;\n}\nheader ul {\n    list-style: none;\n    margin-bottom: 20px;\n    padding: 0;\n}\nheader ul li{\n    display: inline-block;\n    margin-right: 20px\n}\n\n@keyframes slideDown {\n    0% {\n\t\ttransform: translateY(-100%);\n\t}\n\t50%{\n\t\ttransform: translateY(8%);\n\t}\n\t65%{\n\t\ttransform: translateY(-4%);\n\t}\n\t80%{\n\t\ttransform: translateY(4%);\n\t}\n\t95%{\n\t\ttransform: translateY(-2%);\n\t}\t\t\t\n\t100% {\n\t\ttransform: translateY(0%);\n\t}\t\n}\n\nul#sublinks > li {    \n    background-color: rgba(0, 72, 255, 0.04);\n    border-radius: 10%;\n    font-weight: bold;\n}\n\n.nav ul > li:hover ul {\n    visibility:visible;\n    opacity:1;\n    filter:alpha(opacity=100);\n}\n    "]
        }), 
        __metadata('design:paramtypes', [])
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFFMUQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFtRmpEO0lBQUE7SUFFQSxDQUFDO0lBakZEO1FBQUMsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQ2hELEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQztTQUM5QyxDQUFDO1FBRUQsZ0JBQVMsQ0FBRTtZQUNSLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxrbEJBVVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixNQUFNLEVBQUUsQ0FBQyxrNkJBc0RSLENBQUM7U0FDTCxDQUFDOzsrQkFBQTtJQUlGLDhCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSwrQkFBdUIsMEJBRW5DLENBQUE7QUFJRCxnQkFBZ0I7QUFFaEIscUNBQXFDO0FBRXJDLElBQUk7QUFFQSxPQUFPO0FBQ1Asb0NBQW9DO0FBQ3BDLElBQUk7QUFDSixTQUFTO0FBQ1QsZ0NBQWdDO0FBQ2hDLElBQUk7QUFFSiw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDLHVDQUF1QztBQUN2Qyw0QkFBNEIiLCJmaWxlIjoiYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVzLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tICcuL3NpZ251cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSAnLi9zaWduaW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtMb2dvdXRDb21wb25lbnR9IGZyb20gJy4vbG9nb3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QWRtaW5Db21wb25lbnR9IGZyb20gJy4vYWRtaW4uY29tcG9uZW50JztcclxuXHJcblxyXG5cclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDogJy9hZG1pbi86aWQnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudH0sICAgICAgLy9jaGlsZCByb3V0ZXNcclxuICAgIHtwYXRoOiAnL3NpZ251cCcsIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50fSwgICAgICAvL2NoaWxkIHJvdXRlc1xyXG4gICAge3BhdGg6ICcvc2lnbmluJywgY29tcG9uZW50OiBTaWduaW5Db21wb25lbnR9LCAgICAgICAvL2NoaWxkIHJvdXRlc1xyXG4gICAge3BhdGg6ICcvbG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnR9LCAgICAgICAvL2NoaWxkIHJvdXRlc1xyXG4gICAge3BhdGg6ICcvYWRtaW4nLCBjb21wb25lbnQ6IEFkbWluQ29tcG9uZW50fSwgICAgICAgLy9jaGlsZCByb3V0ZXNcclxuXSlcclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXV0aCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHNcIiBpZD1cInN1YmxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cIm1lbnUtYnV0dG9uXCIgW3JvdXRlckxpbmtdPVwiWycuL3NpZ251cCddXCI+Q3JlYXRlIFVzZXI8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwibWVudS1idXR0b25cIiAgW3JvdXRlckxpbmtdPVwiWycuL3NpZ25pbiddXCI+U2lnbi1pbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJtZW51LWJ1dHRvblwiICBbcm91dGVyTGlua109XCJbJy4vbG9nb3V0J11cIj5Mb2dvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwibWVudS1idXR0b25cIiAgW3JvdXRlckxpbmtdPVwiWycuL2FkbWluJ11cIj5BZG1pbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuXHJcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVEb3duO1xyXG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHRcclxuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1x0XHJcblx0dmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbmhlYWRlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuaGVhZGVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcclxuICAgIDAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcblx0fVxyXG5cdDUwJXtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4JSk7XHJcblx0fVxyXG5cdDY1JXtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNCUpO1xyXG5cdH1cclxuXHQ4MCV7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNCUpO1xyXG5cdH1cclxuXHQ5NSV7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcclxuXHR9XHRcdFx0XHJcblx0MTAwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG5cdH1cdFxyXG59XHJcblxyXG51bCNzdWJsaW5rcyA+IGxpIHsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDcyLCAyNTUsIDAuMDQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5uYXYgdWwgPiBsaTpob3ZlciB1bCB7XHJcbiAgICB2aXNpYmlsaXR5OnZpc2libGU7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICBmaWx0ZXI6YWxwaGEob3BhY2l0eT0xMDApO1xyXG59XHJcbiAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy8gdWwjc3VibGlua3Mge1xyXG4gICBcclxuLy8gICAgIHRyYW5zaXRpb246MjAwMG1zIGVhc2UtaW4tb3V0O1xyXG5cclxuLy8gfVxyXG5cclxuICAgIC8vIDAlIHtcclxuICAgIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwcHgpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gMTAwJSB7XHJcbiAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGFuaW1hdGlvbi1uYW1lOiBkcm9wSGVhZGVyO1xyXG4gICAgLy8gYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgIC8vIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgLy8gYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
