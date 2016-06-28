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
var collapse_1 = require('ng2-bootstrap/components/collapse');
var auth_service_1 = require('../auth/auth.service');
var NavbarComponent = (function () {
    function NavbarComponent(_authService) {
        this._authService = _authService;
        this.isCollapsed = true;
        this.signinMarker = false;
        this.isAdmin = false;
        //    this.signinMarker = this._authService.isLoggedIn();
        //    console.log(this.signinMarker)
    }
    // ngAfterContentChecked() {
    //       this.signinMarker = this._authService.isLoggedIn();
    //       console.log(this.signinMarker)
    // }
    NavbarComponent.prototype.ngOnInit = function () {
        this.signinMarker = false;
        this.isAdmin = false;
    };
    NavbarComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.signinMarker) {
            this.signinMarker = this._authService.isLoggedIn();
            console.log(this.signinMarker);
            if (this.signinMarker && !this.isAdmin) {
                this._authService.getUser(sessionStorage.getItem('userId'))
                    .subscribe(function (user) {
                    _this.isAdmin = user.admin;
                    console.log(" Admin prop - " + _this.isAdmin);
                }, function (error) { return console.log(error); });
            }
        }
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-header',
            templateUrl: 'navbar.template.html',
            directives: [router_1.ROUTER_DIRECTIVES, collapse_1.CollapseDirective],
            styles: ["\n        .router-link-active {\n            font-weight: bold;\n            background-color:  #717B81;        \n        };\n\n        \n    "],
        }), 
        __metadata('design:paramtypes', [auth_service_1.UserAuthService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQseUJBQWdDLG1DQUFtQyxDQUFDLENBQUE7QUFHcEUsNkJBQThCLHNCQUFzQixDQUFDLENBQUE7QUFtQnJEO0lBS0kseUJBQW9CLFlBQTZCO1FBQTdCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUoxQyxnQkFBVyxHQUFXLElBQUksQ0FBQztRQUNsQyxpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUM3QixZQUFPLEdBQVcsS0FBSyxDQUFDO1FBR3hCLHlEQUF5RDtRQUN6RCxvQ0FBb0M7SUFDcEMsQ0FBQztJQUVELDRCQUE0QjtJQUM1Qiw0REFBNEQ7SUFDNUQsdUNBQXVDO0lBQ3ZDLElBQUk7SUFHSixrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFekIsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFBQSxpQkFhQztRQVpHLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBRS9CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDdkQsU0FBUyxDQUFDLFVBQUEsSUFBSTtvQkFBTSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7b0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7WUFDcEQsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBcERMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDRCQUFpQixDQUFDO1lBQ2xELE1BQU0sRUFBRSxDQUFDLGdKQU9SLENBQUM7U0FHTCxDQUFDOzt1QkFBQTtJQWtERixzQkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksdUJBQWUsa0JBZ0QzQixDQUFBIiwiZmlsZSI6Im5hdmJhci9uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRG9DaGVja30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7Q29sbGFwc2VEaXJlY3RpdmV9IGZyb20gJ25nMi1ib290c3RyYXAvY29tcG9uZW50cy9jb2xsYXBzZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtVc2VyQXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnbmF2YmFyLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBDb2xsYXBzZURpcmVjdGl2ZV0sXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzcxN0I4MTsgICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFxyXG4gICAgYF0sXHJcblxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyAgT25Jbml0LCBEb0NoZWNre1xyXG4gICAgcHVibGljIGlzQ29sbGFwc2VkOmJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc2lnbmluTWFya2VyOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzQWRtaW46Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBVc2VyQXV0aFNlcnZpY2UgKSB7XHJcbiAgICAvLyAgICB0aGlzLnNpZ25pbk1hcmtlciA9IHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKHRoaXMuc2lnbmluTWFya2VyKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgIC8vICAgICAgIHRoaXMuc2lnbmluTWFya2VyID0gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gICAgLy8gICAgICAgY29uc29sZS5sb2codGhpcy5zaWduaW5NYXJrZXIpXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0ICgpIHtcclxuICAgICAgICB0aGlzLnNpZ25pbk1hcmtlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNBZG1pbiA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuc2lnbmluTWFya2VyKSB7IFxyXG4gICAgICAgICAgICB0aGlzLnNpZ25pbk1hcmtlciA9IHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2lnbmluTWFya2VyKVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5zaWduaW5NYXJrZXIgJiYgIXRoaXMuaXNBZG1pbikge1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHsgdGhpcy5pc0FkbWluID0gdXNlci5hZG1pbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBBZG1pbiBwcm9wIC0gXCIgKyB0aGlzLmlzQWRtaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIGlzQ3VycmVudFJvdXRlIChyb3V0ZVVybCkge1xyXG4gICAgLy8gICAgIHRoaXMuX3JvdXRlci51cmxUcmVlLmNvbnRhaW5zKHRoaXMuX3JvdXRlci5jcmVhdGVVcmxUcmVlKFsnLycsIHRoaXMuX3JvdXRlU2VnbWVudF0pKVxyXG5cclxuICAgIC8vIH1cclxuXHJcblxyXG4vLyAgIG9uQ2xpY2soKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLnNlZ21lbnQpO1xyXG4vLyAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
