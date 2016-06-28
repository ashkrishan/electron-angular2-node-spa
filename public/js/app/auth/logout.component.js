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
var auth_service_1 = require('./auth.service');
var LogoutComponent = (function () {
    function LogoutComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    LogoutComponent.prototype.onLogout = function () {
        this._authService.logoutUser();
        location.reload(); //reload page after logout so navbar can be reset
        this._router.navigateByUrl('/');
    };
    LogoutComponent = __decorate([
        core_1.Component({
            template: "\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <button class=\"btn btn-danger pull-right\" (click)=\"onLogout()\">Logout</button>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [auth_service_1.UserAuthService, router_1.Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLDZCQUE4QixnQkFBZ0IsQ0FBQyxDQUFBO0FBWS9DO0lBR0kseUJBQW9CLFlBQTZCLEVBQVUsT0FBZTtRQUF0RCxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBRTFFLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxpREFBaUQ7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFJcEMsQ0FBQztJQXhCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsbU9BTVI7U0FDSixDQUFDOzt1QkFBQTtJQWtCRixzQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksdUJBQWUsa0JBZ0IzQixDQUFBIiwiZmlsZSI6ImF1dGgvbG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1VzZXJBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgcHVsbC1yaWdodFwiIChjbGljayk9XCJvbkxvZ291dCgpXCI+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBVc2VyQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dFVzZXIoKTtcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTsgLy9yZWxvYWQgcGFnZSBhZnRlciBsb2dvdXQgc28gbmF2YmFyIGNhbiBiZSByZXNldFxyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
