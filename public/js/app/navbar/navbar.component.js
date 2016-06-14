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
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n    <nav class=\"navbar navbar-default app-navbar-setting\">\n    <div class=\"container pull-left\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n            aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span> \n                <span class=\"icon-bar\"></span>\n            </button>\n            <!-- <li><a href=\"#\">Projects</a></li> -->\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n               <!-- <li><a [routerLink]=\"['/']\">Messages</a></li> -->\n                <li><a [routerLink]=\"['/auth']\">Authentication</a></li>\n                <li><a [routerLink]=\"['/dbapp']\">DB App</a></li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        .router-link-active {\n            font-weight: bold;            \n        }\n    "],
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUEwQ2xEO0lBQUE7SUFlQSxDQUFDO0lBdkREO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxrdkNBMkJUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsOEZBSVIsQ0FBQztTQUdMLENBQUM7O3VCQUFBO0lBaUJGLHNCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSx1QkFBZSxrQkFlM0IsQ0FBQSIsImZpbGUiOiJuYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgYXBwLW5hdmJhci1zZXR0aW5nXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB1bGwtbGVmdFwiPlxyXG4gICAgICAgIDwhLS0gQnJhbmQgYW5kIHRvZ2dsZSBnZXQgZ3JvdXBlZCBmb3IgYmV0dGVyIG1vYmlsZSBkaXNwbGF5IC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjYnMtZXhhbXBsZS1uYXZiYXItY29sbGFwc2UtMVwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPCEtLSA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9qZWN0czwvYT48L2xpPiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIENvbGxlY3QgdGhlIG5hdiBsaW5rcywgZm9ybXMsIGFuZCBvdGhlciBjb250ZW50IGZvciB0b2dnbGluZyAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgIDwhLS0gPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCI+TWVzc2FnZXM8L2E+PC9saT4gLS0+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvYXV0aCddXCI+QXV0aGVudGljYXRpb248L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9kYmFwcCddXCI+REIgQXBwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSAvLm5hdmJhci1jb2xsYXBzZSAtLT5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSAvLmNvbnRhaW5lci1mbHVpZCAtLT5cclxuPC9uYXY+XHJcblxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIGBdLFxyXG5cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgLy8gY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlzQ3VycmVudFJvdXRlIChyb3V0ZVVybCkge1xyXG4gICAgLy8gICAgIHRoaXMuX3JvdXRlci51cmxUcmVlLmNvbnRhaW5zKHRoaXMuX3JvdXRlci5jcmVhdGVVcmxUcmVlKFsnLycsIHRoaXMuX3JvdXRlU2VnbWVudF0pKVxyXG5cclxuICAgIC8vIH1cclxuXHJcblxyXG4vLyAgIG9uQ2xpY2soKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLnNlZ21lbnQpO1xyXG4vLyAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
