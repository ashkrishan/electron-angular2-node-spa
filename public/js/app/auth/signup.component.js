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
        var user = new user_1.User(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName, this.signupForm.value.admin, this.signupForm.value.FE_Code);
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
            FE_Code: [],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFvRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RFLHNCQUE2QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzlELHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQUM1Qiw2QkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQWUvQztJQU1JLHlCQUFvQixHQUFnQixFQUFVLFlBQTZCLEVBQVUsYUFBMkI7UUFBNUYsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBSmhILFNBQUksR0FBRyxXQUFJLENBQUM7UUFFWixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR3RCLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUMsQ0FBQztRQUNELElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENB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SUFDNUMsQ0FBQztJQXJGTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxNQUFNLEVBQUUsQ0FBQyxrR0FNUixDQUFDO1lBQ0YsVUFBVSxFQUFFLENBQUMsc0JBQWMsQ0FBQztTQUMvQixDQUFDOzt1QkFBQTtJQTZFRixzQkFBQztBQUFELENBM0VBLEFBMkVDLElBQUE7QUEzRVksdUJBQWUsa0JBMkUzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7QWxlcnRDb21wb25lbnR9IGZyb20gJ25nMi1ib290c3RyYXAvY29tcG9uZW50cy9hbGVydCc7XHJcbmltcG9ydCB7Um91dGVTZWdtZW50fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQge1VzZXJBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzaWdudXAudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgYF0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQWxlcnRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgc2lnbnVwRm9ybSA6IENvbnRyb2xHcm91cDtcclxuICAgIHVzZXIgPSBVc2VyO1xyXG4gICAgYnRuVGl0bGU6IHN0cmluZztcclxuICAgIHByb3BFZGl0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBVc2VyQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlU2VnbWVudDogUm91dGVTZWdtZW50KSB7XHJcbiAgICAgICAgLy8gdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7ICBcclxuICAgICAgICBpZih0aGlzLnNpZ251cEZvcm0udmFsdWUuYWRtaW4gPT0gbnVsbCkgeyAgICAgLy9Ob3Qgc3VyZSB3aHkgbmdPbkluaXQgaXMgbm90IHBhc3NpZ24gdGhlIGFzc2lnbmVtbnQgb2YgZmFsc2UgdG8gYWRtaW4gY29udHJvbC4gVGhpcyBpcyB3b3JrYXJvdW5kIGNoZWNrXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0udmFsdWUuYWRtaW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVzZXIgPSBuZXcgVXNlcih0aGlzLnNpZ251cEZvcm0udmFsdWUuZW1haWwsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5wYXNzd29yZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0udmFsdWUubGFzdE5hbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0udmFsdWUuRkVfQ29kZSlcclxuXHJcbiAgICAgICB2YXIgaWQgPSB0aGlzLl9yb3V0ZVNlZ21lbnQuZ2V0UGFyYW0oJ2lkJyk7IFxyXG4gICAgICAgIGlmKGlkKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnVwZGF0ZVVzZXIoaWQsIHVzZXIpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ251cFVzZXIodXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSksXHJcbiAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQgKCkgeyAgXHJcbiAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgYWRtaW46IFtdLFxyXG4gICAgICAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgRkVfQ29kZTogW10sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGlkID0gdGhpcy5fcm91dGVTZWdtZW50LmdldFBhcmFtKCdpZCcpOyBcclxuICAgICAgICB0aGlzLmJ0blRpdGxlID0gaWQgPyAnRWRpdCB1c2VyJyA6ICdBZGQgbmV3IHVzZXInO1xyXG4gICAgICAgIGlmKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmdldFVzZXIoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4geyB0aGlzLnVzZXIgPSByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgIHRoaXMucHJvcEVkaXQgPSB0cnVlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRBZG1pbigpIHtcclxuICAgICAgICBpZighdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluIHx8IHRoaXMuc2lnbnVwRm9ybSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpZ251cEZvcm0udmFsdWUuYWRtaW4pXHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
