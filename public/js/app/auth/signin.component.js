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
var router_1 = require('@angular/router');
var user_1 = require('./user');
var auth_service_1 = require('./auth.service');
var SigninComponent = (function () {
    function SigninComponent(_fb, _authService, _router) {
        this._fb = _fb;
        this._authService = _authService;
        this._router = _router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = this._fb.group({
            email: [],
            password: []
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var user = new user_1.User(this.signinForm.value.email, this.signinForm.value.password);
        this._authService.signinUser(user)
            .subscribe(function (data) {
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
        }, function (error) { return console.log(error); });
        this._router.navigate(['/']);
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'signin.template.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.UserAuthService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFvRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQUM1Qiw2QkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQU8vQztJQUdJLHlCQUFvQixHQUFnQixFQUFVLFlBQTZCLEVBQVUsT0FBZTtRQUFoRixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUVwRyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDN0IsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUMsRUFBRTtTQUNkLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzthQUM3QixTQUFTLENBQUMsVUFBQSxJQUFJO1lBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFDSSxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQ2xELENBQUE7UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQTlCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFDLHNCQUFzQjtTQUNyQyxDQUFDOzt1QkFBQTtJQThCRixzQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksdUJBQWUsa0JBNEIzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQge1VzZXJBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6J3NpZ25pbi50ZW1wbGF0ZS5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzaWduaW5Gb3JtOiBDb250cm9sR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogVXNlckF1dGhTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNpZ25pbkZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBbXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6W11cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIodGhpcy5zaWduaW5Gb3JtLnZhbHVlLmVtYWlsLCB0aGlzLnNpZ25pbkZvcm0udmFsdWUucGFzc3dvcmQpO1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ25pblVzZXIodXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhPT4gIHsgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIGRhdGEudXNlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
