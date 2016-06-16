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
var user_1 = require('./user');
var auth_service_1 = require('./auth.service');
var SignupComponent = (function () {
    function SignupComponent(_fb, _authService) {
        this._fb = _fb;
        this._authService = _authService;
        // this.signupForm.value.admin = false;
    }
    SignupComponent.prototype.onSubmit = function () {
        var user = new user_1.User(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName, this.signupForm.value.admin);
        this._authService.signupUser(user)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this._fb.group({
            firstName: ['', common_1.Validators.required],
            lastName: ['', common_1.Validators.required],
            admin: [],
            email: ['', common_1.Validators.required],
            password: ['', common_1.Validators.required],
        });
        this.signupForm.value.admin = false;
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
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.UserAuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFvRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RFLHNCQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTlELHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQUM1Qiw2QkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQWUvQztJQUlJLHlCQUFvQixHQUFnQixFQUFVLFlBQTZCO1FBQXZELFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDdkUsdUNBQXVDO0lBQzNDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsRUFDbkMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUNuQyxDQUFDO0lBQ1YsQ0FBQztJQUdELGtDQUFRLEdBQVI7UUFDUSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDaEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1NBR3RDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFFeEMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN2QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRXhDLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUF4REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsTUFBTSxFQUFFLENBQUMsa0dBTVIsQ0FBQztZQUNGLFVBQVUsRUFBRSxDQUFDLHNCQUFjLENBQUM7U0FDL0IsQ0FBQzs7dUJBQUE7SUFnREYsc0JBQUM7QUFBRCxDQTlDQSxBQThDQyxJQUFBO0FBOUNZLHVCQUFlLGtCQThDM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0FsZXJ0Q29tcG9uZW50fSBmcm9tICduZzItYm9vdHN0cmFwL2NvbXBvbmVudHMvYWxlcnQnO1xyXG5cclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQge1VzZXJBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzaWdudXAudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgYF0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQWxlcnRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgc2lnbnVwRm9ybSA6IENvbnRyb2xHcm91cDtcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogVXNlckF1dGhTZXJ2aWNlICkge1xyXG4gICAgICAgIC8vIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gbmV3IFVzZXIodGhpcy5zaWdudXBGb3JtLnZhbHVlLmVtYWlsLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5wYXNzd29yZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0udmFsdWUuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5sYXN0TmFtZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluKVxyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ251cFVzZXIodXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSksXHJcbiAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgYWRtaW46IFtdLFxyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRBZG1pbigpIHtcclxuICAgICAgICBpZighdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluIHx8IHRoaXMuc2lnbnVwRm9ybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpZ251cEZvcm0udmFsdWUuYWRtaW4pXHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
