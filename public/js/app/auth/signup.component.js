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
var user_1 = require('./user');
var auth_service_1 = require('./auth.service');
var SignupComponent = (function () {
    function SignupComponent(_fb, _authService) {
        this._fb = _fb;
        this._authService = _authService;
    }
    SignupComponent.prototype.onSubmit = function () {
        var user = new user_1.User(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName);
        this._authService.signupUser(user)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this._fb.group({
            firstName: ['', common_1.Validators.required],
            lastName: ['', common_1.Validators.required],
            email: ['', common_1.Validators.required],
            password: ['', common_1.Validators.required],
        });
        // console.log(this.signupForm.errors);
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'signup.template.html',
            styles: ["\n        .ng-invalid.ng-touched {\n         border: 1px solid red;\n        }\n\n    "]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.UserAuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFvRCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXRFLHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQUM1Qiw2QkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQWEvQztJQUdJLHlCQUFvQixHQUFnQixFQUFVLFlBQTZCO1FBQXZELFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7SUFFM0UsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNqSixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsRUFDbkMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUNuQyxDQUFDO0lBQ1YsQ0FBQztJQUdELGtDQUFRLEdBQVI7UUFDUSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUd0QyxDQUFDLENBQUE7UUFDRix1Q0FBdUM7SUFDM0MsQ0FBQztJQXJDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxNQUFNLEVBQUUsQ0FBQyx3RkFLUixDQUFDO1NBQ0wsQ0FBQzs7dUJBQUE7SUErQkYsc0JBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLHVCQUFlLGtCQTZCM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQge1VzZXJBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzaWdudXAudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBzaWdudXBGb3JtIDogQ29udHJvbEdyb3VwO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBVc2VyQXV0aFNlcnZpY2UgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gbmV3IFVzZXIodGhpcy5zaWdudXBGb3JtLnZhbHVlLmVtYWlsLCB0aGlzLnNpZ251cEZvcm0udmFsdWUucGFzc3dvcmQsIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5maXJzdE5hbWUsIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5sYXN0TmFtZSlcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWdudXBVc2VyKHVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zaWdudXBGb3JtLmVycm9ycyk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
