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
//import {AuthenticationComponent} from './authentication.component';
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
        console.log(userId);
        this._router.navigate(['/auth/admin/' + userId]);
    };
    AdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'admin.template.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [auth_service_1.UserAuthService, router_1.Router])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYWRtaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQXdDLGlCQUFpQixDQUFDLENBQUE7QUFFMUQscUVBQXFFO0FBRXJFLDZCQUE4QixnQkFBZ0IsQ0FBQyxDQUFBO0FBUy9DO0lBRUksd0JBQW9CLFdBQTZCLEVBQVUsT0FBZTtRQUF0RCxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRDFFLFVBQUssR0FBRyxFQUFFLENBQUM7SUFHWCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7YUFDdkIsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNLLEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFBO1FBQ3JCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLE1BQU07UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFckQsQ0FBQztJQXhCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNsQyxDQUFDOztzQkFBQTtJQXdCRixxQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0Qlksc0JBQWMsaUJBc0IxQixDQUFBIiwiZmlsZSI6ImF1dGgvYWRtaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtVc2VyQXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FkbWluLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgdXNlcnMgPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VzZXJzZXZpY2UgOiBVc2VyQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0ICgpIHtcclxuICAgICAgICAgdGhpcy5fdXNlcnNldmljZS5nZXRVc2VycygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4geyAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRWRpdCh1c2VySWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySWQpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL2FkbWluLycgKyB1c2VySWRdKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
