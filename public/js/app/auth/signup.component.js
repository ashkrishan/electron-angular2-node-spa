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
    function SignupComponent(_fb, _authService, _routeSegment, _router) {
        this._fb = _fb;
        this._authService = _authService;
        this._routeSegment = _routeSegment;
        this._router = _router;
        this.user = user_1.User;
        this.propEdit = false;
        // this.signupForm.value.admin = false;
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.signupForm.value.admin == null) {
            this.signupForm.value.admin = false;
        }
        var user = new user_1.User(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName, this.signupForm.value.admin, this.signupForm.value.FE_Code);
        var id = this._routeSegment.getParam('id');
        if (id) {
            this._authService.updateUser(id, user)
                .subscribe(function (response) {
                console.log(response);
                alert('User edit successful');
                _this._router.navigate(['/auth/admin']);
            }, function (error) { return console.log(error); });
        }
        else {
            console.log(user);
            this._authService.signupUser(user)
                .subscribe(function (response) {
                console.log(response);
                alert('User - ' + response.firstName + ' has been successfully created!');
                _this._router.navigate(['/auth/admin']);
            }, function (error) { return console.log(error); });
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
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.UserAuthService, router_1.RouteSegment, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,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SUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN2QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRXhDLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUEzRkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsTUFBTSxFQUFFLENBQUMsa0dBTVIsQ0FBQztZQUNGLFVBQVUsRUFBRSxDQUFDLHNCQUFjLENBQUM7U0FDL0IsQ0FBQzs7dUJBQUE7SUFtRkYsc0JBQUM7QUFBRCxDQWpGQSxBQWlGQyxJQUFBO0FBakZZLHVCQUFlLGtCQWlGM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0FsZXJ0Q29tcG9uZW50fSBmcm9tICduZzItYm9vdHN0cmFwL2NvbXBvbmVudHMvYWxlcnQnO1xyXG5pbXBvcnQge1JvdXRlU2VnbWVudCwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQge1VzZXJBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdzaWdudXAudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgYF0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQWxlcnRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgc2lnbnVwRm9ybSA6IENvbnRyb2xHcm91cDtcclxuICAgIHVzZXIgPSBVc2VyO1xyXG4gICAgYnRuVGl0bGU6IHN0cmluZztcclxuICAgIHByb3BFZGl0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBVc2VyQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlU2VnbWVudDogUm91dGVTZWdtZW50LCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIC8vIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCkgeyAgXHJcbiAgICAgICAgaWYodGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluID09IG51bGwpIHsgICAgIC8vTm90IHN1cmUgd2h5IG5nT25Jbml0IGlzIG5vdCBwYXNzaWduIHRoZSBhc3NpZ25lbW50IG9mIGZhbHNlIHRvIGFkbWluIGNvbnRyb2wuIFRoaXMgaXMgd29ya2Fyb3VuZCBjaGVja1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1c2VyID0gbmV3IFVzZXIodGhpcy5zaWdudXBGb3JtLnZhbHVlLmVtYWlsLCBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0udmFsdWUucGFzc3dvcmQsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLmxhc3ROYW1lLCBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0udmFsdWUuYWRtaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWdudXBGb3JtLnZhbHVlLkZFX0NvZGUpXHJcblxyXG4gICAgICAgdmFyIGlkID0gdGhpcy5fcm91dGVTZWdtZW50LmdldFBhcmFtKCdpZCcpOyBcclxuICAgICAgICBpZihpZCkgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9hdXRoU2VydmljZS51cGRhdGVVc2VyKGlkLCB1c2VyKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7IGNvbnNvbGUubG9nKHJlc3BvbnNlKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnVXNlciBlZGl0IHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9hZG1pbiddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ251cFVzZXIodXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7IGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1VzZXIgLSAnICsgcmVzcG9uc2UuZmlyc3ROYW1lICArICAnIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9hZG1pbiddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0ICgpIHsgIFxyXG4gICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGFkbWluOiBbXSxcclxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIEZFX0NvZGU6IFtdLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpZCA9IHRoaXMuX3JvdXRlU2VnbWVudC5nZXRQYXJhbSgnaWQnKTsgXHJcbiAgICAgICAgdGhpcy5idG5UaXRsZSA9IGlkID8gJ0VkaXQgdXNlcicgOiAnQWRkIG5ldyB1c2VyJztcclxuICAgICAgICBpZighaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZCk7ICAgICAgICBcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5nZXRVc2VyKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHsgdGhpcy51c2VyID0gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICB0aGlzLnByb3BFZGl0ID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWRtaW4oKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiB8fCB0aGlzLnNpZ251cEZvcm0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpZ251cEZvcm0udmFsdWUuYWRtaW4gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5hZG1pbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaWdudXBGb3JtLnZhbHVlLmFkbWluKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
