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
        // this.signupForm.value.admin = false;
    }
    SignupComponent.prototype.onSubmit = function () {
        var user = new user_1.User(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName, this.signupForm.value.admin);
        this._authService.signupUser(user)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
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
        if (!id) {
            return;
        }
        console.log(id);
        this._authService.getUser(id)
            .subscribe(function (response) {
            _this.user = response;
            console.log(_this.user);
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFvRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RFLHNCQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQUM1Qiw2QkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQWUvQztJQUlJLHlCQUFvQixHQUFnQixFQUFVLFlBQTZCLEVBQVUsYUFBMkI7UUFBNUYsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBRmhILFNBQUksR0FBRyxXQUFJLENBQUM7UUFHUix1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFHSSxJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzthQUM3QixTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixFQUNuQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQ25DLENBQUM7SUFDVixDQUFDO0lBR0Qsa0NBQVEsR0FBUjtRQUFBLGlCQXNCQztRQXJCTyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDaEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1NBR3RDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFcEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsRUFBRSxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ0wsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDeEIsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUFNLEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFBO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLENBQUMsQ0FBRSxDQUFBO0lBRW5DLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUV4QyxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBcEVMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLE1BQU0sRUFBRSxDQUFDLGtHQU1SLENBQUM7WUFDRixVQUFVLEVBQUUsQ0FBQyxzQkFBYyxDQUFDO1NBQy9CLENBQUM7O3VCQUFBO0lBNERGLHNCQUFDO0FBQUQsQ0ExREEsQUEwREMsSUFBQTtBQTFEWSx1QkFBZSxrQkEwRDNCLENBQUEiLCJmaWxlIjoiYXV0aC9zaWdudXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtBbGVydENvbXBvbmVudH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9jb21wb25lbnRzL2FsZXJ0JztcclxuaW1wb3J0IHtSb3V0ZVNlZ21lbnR9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCB7VXNlckF1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NpZ251cC50ZW1wbGF0ZS5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICBgXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtBbGVydENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBzaWdudXBGb3JtIDogQ29udHJvbEdyb3VwO1xyXG4gICAgdXNlciA9IFVzZXI7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBVc2VyQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlU2VnbWVudDogUm91dGVTZWdtZW50KSB7XHJcbiAgICAgICAgLy8gdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7ICAgICAgXHJcblxyXG5cclxuICAgICAgICB2YXIgdXNlciA9IG5ldyBVc2VyKHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5lbWFpbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0udmFsdWUucGFzc3dvcmQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0udmFsdWUubGFzdE5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbilcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWdudXBVc2VyKHVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQgKCkgeyAgXHJcbiAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgYWRtaW46IFtdLFxyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuX3JvdXRlU2VnbWVudC5nZXRQYXJhbSgnaWQnKTsgXHJcbiAgICAgICAgaWYoIWlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UuZ2V0VXNlcihpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7IHRoaXMudXNlciA9IHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEFkbWluKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnNpZ251cEZvcm0udmFsdWUuYWRtaW4gfHwgdGhpcy5zaWdudXBGb3JtID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0udmFsdWUuYWRtaW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbilcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
