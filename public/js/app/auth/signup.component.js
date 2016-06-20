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
var common_1 = require('@angular/common');
var alert_1 = require('ng2-bootstrap/components/alert');
var router_1 = require('@angular/router');
var user_1 = require('./user');
var auth_service_1 = require('./auth.service');
var SignupComponent = (function () {
    function SignupComponent(_fb, _authService, _routeSegment) {
        this._fb = _fb;
        this._authService = _authService;
        this._routeSegment = _routeSegment;
        this.user = user_1.User;
        this.propEdit = false;
        // this.signupForm.value.admin = false;
    }
    SignupComponent.prototype.onSubmit = function () {
        if (this.signupForm.value.admin == null) {
            this.signupForm.value.admin = false;
        }
        var user = new user_1.User(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName, this.signupForm.value.admin);
        var id = this._routeSegment.getParam('id');
        if (id) {
            this._authService.updateUser(id, user)
                .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        }
        else {
            console.log(user);
            this._authService.signupUser(user)
                .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signupForm = this._fb.group({
            firstName: ['', common_1.Validators.required],
            lastName: ['', common_1.Validators.required],
            admin: [],
            email: ['', common_1.Validators.required],
            password: ['', common_1.Validators.required],
        });
        this.signupForm.value.admin = false;
        var id = this._routeSegment.getParam('id');
        this.btnTitle = id ? 'Edit user' : 'Add new user';
        if (!id) {
            return;
        }
        // console.log(id);        
        this._authService.getUser(id)
            .subscribe(function (response) {
            _this.user = response;
            console.log(_this.user);
        });
        this.propEdit = true;
    };
    SignupComponent.prototype.setAdmin = function () {
        if (!this.signupForm.value.admin || this.signupForm == null) {
            this.signupForm.value.admin = true;
        }
        else {
            this.signupForm.value.admin = false;
        }
        console.log(this.signupForm.value.admin);
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'signup.template.html',
            styles: ["\n        .ng-invalid.ng-touched {\n         border: 1px solid red;\n        }\n        \n\n    "],
            directives: [alert_1.AlertComponent]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.UserAuthService, router_1.RouteSegment])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFvRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RFLHNCQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQUM1Qiw2QkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQWUvQztJQU1JLHlCQUFvQixHQUFnQixFQUFVLFlBQTZCLEVBQVUsYUFBMkI7UUFBNUYsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSmhILFNBQUksR0FBRyxXQUFJLENBQUM7UUFFWixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR3RCLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUMsQ0FBQztRQUNELElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFekMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7aUJBQ2pDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQXJCLENBQXFCLEVBQ3BCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFBO1FBQzVELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2lCQUM3QixTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixFQUNuQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQ25DLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUdELGtDQUFRLEdBQVI7UUFBQSxpQkF3QkM7UUF2Qk8sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNqQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUd0QyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRXBDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLFdBQVcsR0FBRyxjQUFjLENBQUM7UUFDbEQsRUFBRSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ0wsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELDJCQUEyQjtRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDeEIsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUFNLEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFBO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FBRSxDQUFBO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBRXpCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUV4QyxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBbEZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLE1BQU0sRUFBRSxDQUFDLGtHQU1SLENBQUM7WUFDRixVQUFVLEVBQUUsQ0FBQyxzQkFBYyxDQUFDO1NBQy9CLENBQUM7O3VCQUFBO0lBMEVGLHNCQUFDO0FBQUQsQ0F4RUEsQUF3RUMsSUFBQTtBQXhFWSx1QkFBZSxrQkF3RTNCLENBQUEiLCJmaWxlIjoiYXV0aC9zaWdudXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtBbGVydENvbXBvbmVudH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9jb21wb25lbnRzL2FsZXJ0JztcclxuaW1wb3J0IHtSb3V0ZVNlZ21lbnR9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCB7VXNlckF1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NpZ251cC50ZW1wbGF0ZS5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICBgXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtBbGVydENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBzaWdudXBGb3JtIDogQ29udHJvbEdyb3VwO1xyXG4gICAgdXNlciA9IFVzZXI7XHJcbiAgICBidG5UaXRsZTogc3RyaW5nO1xyXG4gICAgcHJvcEVkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IFVzZXJBdXRoU2VydmljZSwgcHJpdmF0ZSBfcm91dGVTZWdtZW50OiBSb3V0ZVNlZ21lbnQpIHtcclxuICAgICAgICAvLyB0aGlzLnNpZ251cEZvcm0udmFsdWUuYWRtaW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHsgIFxyXG4gICAgICAgIGlmKHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiA9PSBudWxsKSB7ICAgICAvL05vdCBzdXJlIHdoeSBuZ09uSW5pdCBpcyBub3QgcGFzc2lnbiB0aGUgYXNzaWduZW1udCBvZiBmYWxzZSB0byBhZG1pbiBjb250cm9sLiBUaGlzIGlzIHdvcmthcm91bmQgY2hlY2tcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXNlciA9IG5ldyBVc2VyKHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5lbWFpbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLnBhc3N3b3JkLCBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0udmFsdWUuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5sYXN0TmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluKVxyXG5cclxuICAgICAgIHZhciBpZCA9IHRoaXMuX3JvdXRlU2VnbWVudC5nZXRQYXJhbSgnaWQnKTsgXHJcbiAgICAgICAgaWYoaWQpIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UudXBkYXRlVXNlcihpZCwgdXNlcilcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbnVwVXNlcih1c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSxcclxuICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7ICBcclxuICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBhZG1pbjogW10sXHJcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGlkID0gdGhpcy5fcm91dGVTZWdtZW50LmdldFBhcmFtKCdpZCcpOyBcclxuICAgICAgICB0aGlzLmJ0blRpdGxlID0gaWQgPyAnRWRpdCB1c2VyJyA6ICdBZGQgbmV3IHVzZXInO1xyXG4gICAgICAgIGlmKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4geyB0aGlzLnVzZXIgPSByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgIHRoaXMucHJvcEVkaXQgPSB0cnVlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRBZG1pbigpIHtcclxuICAgICAgICBpZighdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluIHx8IHRoaXMuc2lnbnVwRm9ybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpZ251cEZvcm0udmFsdWUuYWRtaW4pXHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
