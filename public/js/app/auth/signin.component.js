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
        this.hasSignedIn = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = this._fb.group({
            email: [],
            password: []
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new user_1.User(this.signinForm.value.email, this.signinForm.value.password);
        this._authService.signinUser(user)
            .subscribe(function (data) {
            console.log(data);
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('userId', data.userId);
            // localStorage.setItem('token', data.token);
            // localStorage.setItem('userId', data.userId);
            _this.hasSignedIn = true;
            _this._router.navigate(['/clients']);
        }, function (error) {
            _this.showError(error);
            //console.log(error); 
        });
    };
    SigninComponent.prototype.showError = function (error) {
        if (error.title == 'Check credentials' || error.title == 'No user found') {
            alert('Incorrect email address or password');
            return;
        }
        console.log(error);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SigninComponent.prototype, "hasSignedIn", void 0);
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-signin',
            templateUrl: 'signin.template.html',
            styles: ["\n        .container {\n            width: 30%;\n            margin: 10% auto;\n\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.UserAuthService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELHVCQUFvRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLHFCQUFtQixRQUFRLENBQUMsQ0FBQTtBQUM1Qiw2QkFBOEIsZ0JBQWdCLENBQUMsQ0FBQTtBQWUvQztJQUlJLHlCQUFvQixHQUFnQixFQUFVLFlBQTZCLEVBQVUsT0FBZTtRQUFoRixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUYzRixnQkFBVyxHQUFZLEtBQUssQ0FBQztJQUl0QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDN0IsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUMsRUFBRTtTQUNkLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFHRCxrQ0FBUSxHQUFSO1FBQUEsaUJBbUJDO1FBbEJHLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyw2Q0FBNkM7WUFDN0MsK0NBQStDO1lBQy9DLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQ0ksVUFBQSxLQUFLO1lBQU0sS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNwQixzQkFBc0I7UUFDMUIsQ0FBQyxDQUNoQyxDQUFBO0lBS1QsQ0FBQztJQUVPLG1DQUFTLEdBQWpCLFVBQWtCLEtBQUs7UUFDZixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLG1CQUFtQixJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksZUFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDeEUsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDO1FBQ1YsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQTNDTDtRQUFDLFlBQUssRUFBRTs7d0RBQUE7SUFmWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFDLHNCQUFzQjtZQUNsQyxNQUFNLEVBQUUsQ0FBQyxtR0FNUixDQUFDO1NBQ0wsQ0FBQzs7dUJBQUE7SUFrREYsc0JBQUM7QUFBRCxDQWhEQSxBQWdEQyxJQUFBO0FBaERZLHVCQUFlLGtCQWdEM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ25pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCB7VXNlckF1dGhTZXJ2aWNlfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LXNpZ25pbicsXHJcbiAgICB0ZW1wbGF0ZVVybDonc2lnbmluLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG5cclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzaWduaW5Gb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBASW5wdXQoKSBoYXNTaWduZWRJbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IFVzZXJBdXRoU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNpZ25pbkZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGVtYWlsOiBbXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6W11cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih0aGlzLnNpZ25pbkZvcm0udmFsdWUuZW1haWwsIHRoaXMuc2lnbmluRm9ybS52YWx1ZS5wYXNzd29yZCk7XHJcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbmluVXNlcih1c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGE9PiAgeyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgZGF0YS51c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNTaWduZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2NsaWVudHMnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7IHRoaXMuc2hvd0Vycm9yKGVycm9yKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93RXJyb3IoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYoZXJyb3IudGl0bGUgPT0gJ0NoZWNrIGNyZWRlbnRpYWxzJyB8fCBlcnJvci50aXRsZSA9PSAnTm8gdXNlciBmb3VuZCcgKSB7XHJcbiAgICAgICAgICAgICAgIGFsZXJ0KCdJbmNvcnJlY3QgZW1haWwgYWRkcmVzcyBvciBwYXNzd29yZCcpO1xyXG4gICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
