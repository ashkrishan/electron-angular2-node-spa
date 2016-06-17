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
var AdminComponent = (function () {
    function AdminComponent(_usersevice, _router) {
        this._usersevice = _usersevice;
        this._router = _router;
        this.users = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._usersevice.getUsers()
            .subscribe(function (response) {
            _this.users = response;
        }, function (error) { return console.log(error); });
    };
    AdminComponent.prototype.onEdit = function (userId) {
        this._router.navigateByUrl('/auth/signup/' + userId);
    };
    AdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'admin.template.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.UserAuthService, router_1.Router])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYWRtaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFFdkMsNkJBQThCLGdCQUFnQixDQUFDLENBQUE7QUFRL0M7SUFFSSx3QkFBb0IsV0FBNkIsRUFBVSxPQUFlO1FBQXRELGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEMUUsVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUdYLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTthQUN2QixTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ0ssS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7UUFDckIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sTUFBTTtRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUV6RCxDQUFDO0lBdEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUJBQXFCO1NBQ3JDLENBQUM7O3NCQUFBO0lBdUJGLHFCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxzQkFBYyxpQkFxQjFCLENBQUEiLCJmaWxlIjoiYXV0aC9hZG1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1VzZXJBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnYWRtaW4udGVtcGxhdGUuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZG1pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHVzZXJzID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2Vyc2V2aWNlIDogVXNlckF1dGhTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7XHJcbiAgICAgICAgIHRoaXMuX3VzZXJzZXZpY2UuZ2V0VXNlcnMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHsgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuXHJcbiAgICBvbkVkaXQodXNlcklkKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9hdXRoL3NpZ251cC8nICsgdXNlcklkKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
