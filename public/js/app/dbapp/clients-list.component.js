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
//import 'rxjs/Rx';
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
var router_1 = require('@angular/router');
// import 'rxjs/add/operator/mergeAll';
var auth_service_1 = require('../auth/auth.service');
var client_data_service_1 = require('./client-data.service');
var ClientsListComponent = (function () {
    function ClientsListComponent(_clientDataService, _fb, _router, _authService) {
        this._clientDataService = _clientDataService;
        this._fb = _fb;
        this._router = _router;
        this._authService = _authService;
        this.isToken = false;
        this.isToken = true;
    }
    ClientsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = this._fb.group({
            searchbox: []
        });
        this.searchForm.controls.searchbox.valueChanges
            .filter(function (text) { return text.length > 2; })
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function (data) { return _this._clientDataService.searchData(_this.searchForm.value)
            .subscribe(function (response) {
            _this.clients = response;
            console.log(response);
        }, function (error) {
            console.log(error);
            if (error.error.name == 'TokenExpiredError') {
                alert("Your session has expired. Please re-login!");
                _this._authService.logoutUser();
                _this._router.navigateByUrl('/auth/signin');
                location.reload();
            }
            else {
                console.log(error);
            }
        }); });
    };
    ClientsListComponent.prototype.onEditClient = function (clientId) {
        console.log(clientId);
        this._router.navigate(['/clients/' + clientId]);
    };
    ClientsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'clients-list.template.html',
            styles: ["\n            .searchbox {\n                width: 50%;\n                margin: auto 0 ;\n                padding-bottom: 20px;\n            }\n            "]
        }), 
        __metadata('design:paramtypes', [client_data_service_1.ClientDataService, common_1.FormBuilder, router_1.Router, auth_service_1.UserAuthService])
    ], ClientsListComponent);
    return ClientsListComponent;
}());
exports.ClientsListComponent = ClientsListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBb0QsaUJBQWlCLENBQUMsQ0FBQTtBQUV0RSxtQkFBbUI7QUFDbkIsUUFBTyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3hDLFFBQU8sd0NBQXdDLENBQUMsQ0FBQTtBQUNoRCxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHVDQUF1QztBQUV2Qyw2QkFBOEIsc0JBQXNCLENBQUMsQ0FBQTtBQUlyRCxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQWN4RDtJQUtJLDhCQUFvQixrQkFBcUMsRUFBVSxHQUFnQixFQUFVLE9BQWUsRUFBVSxZQUE2QjtRQUEvSCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFGbkosWUFBTyxHQUFZLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUV4QixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQTBCSztRQXpCRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzdCLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2FBQzFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFmLENBQWUsQ0FBQzthQUMvQixZQUFZLENBQUMsR0FBRyxDQUFDO2FBQ2pCLG9CQUFvQixFQUFFO2FBQ3RCLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDdkQsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUFPLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFBO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEIsQ0FBQyxFQUNBLFVBQUEsS0FBSztZQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztnQkFDcEQsS0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzNDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLEVBZGpCLENBY2lCLENBQ25DLENBQUE7SUFFTCxDQUFDO0lBR0QsMkNBQVksR0FBWixVQUFhLFFBQVE7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBRW5ELENBQUM7SUF2RFQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsTUFBTSxFQUFFLENBQUMsK0pBTUEsQ0FBQztTQUNiLENBQUM7OzRCQUFBO0lBcUZFLDJCQUFDO0FBQUQsQ0FuRkosQUFtRkssSUFBQTtBQW5GUSw0QkFBb0IsdUJBbUY1QixDQUFBIiwiZmlsZSI6ImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8vaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlQWxsJztcclxuXHJcbmltcG9ydCB7VXNlckF1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7Q2xpZW50RGF0YVNlcnZpY2V9IGZyb20gJy4vY2xpZW50LWRhdGEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NsaWVudHMtbGlzdC50ZW1wbGF0ZS5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAgICAgLnNlYXJjaGJveCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDAgO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjbGllbnRzOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBzZWFyY2hGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBpc1Rva2VuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2xpZW50RGF0YVNlcnZpY2U6IENsaWVudERhdGFTZXJ2aWNlLCBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogVXNlckF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5pc1Rva2VuID0gdHJ1ZTtcclxuXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzZWFyY2hib3g6IFtdXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzLnNlYXJjaGJveC52YWx1ZUNoYW5nZXNcclxuICAgICAgICAgICAgLmZpbHRlcih0ZXh0ID0+IHRleHQubGVuZ3RoID4gMilcclxuICAgICAgICAgICAgLmRlYm91bmNlVGltZSg0MDApXHJcbiAgICAgICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLl9jbGllbnREYXRhU2VydmljZS5zZWFyY2hEYXRhKHRoaXMuc2VhcmNoRm9ybS52YWx1ZSkgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+ICB7IHRoaXMuY2xpZW50cyA9IHJlc3BvbnNlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3IubmFtZSA9PSAnVG9rZW5FeHBpcmVkRXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZC4gUGxlYXNlIHJlLWxvZ2luIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dFVzZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYXV0aC9zaWduaW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIG9uRWRpdENsaWVudChjbGllbnRJZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjbGllbnRJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9jbGllbnRzLycgKyBjbGllbnRJZF0pICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5fY2xpZW50RGF0YVNlcnZpY2UuZ2V0RGF0YSgpICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gIHsgdGhpcy5jbGllbnRzID0gcmVzcG9uc2UgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICxlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICBcclxuXHJcbiAgICAvLyBvblNlYXJjaCgpIHtcclxuICAgIC8vICAgIHRoaXMuY2xpZW50cyQgPSB0aGlzLnNlYXJjaEZvcm0uY29udHJvbHMuc2VhcmNoYm94LnZhbHVlQ2hhbmdlc1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcblxyXG4gICAgICAgIC8vIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaEZvcm0uZmluZCgnc2VhcmNoYm94Jyk7XHJcbiAgICAgICAgLy8gbGV0IHNlYXJjaFN0cmVhbSA9IHNlYXJjaC52YWx1ZUNoYW5nZXNcclxuICAgICAgICAvLyAgICAgLmZpbHRlcih0ZXh0ID0+IHRleHQubGVuZ3RoID4gMilcclxuICAgICAgICAvLyAgICAgLmRlYm91bmNlVGltZSg1MDApXHJcbiAgICAgICAgLy8gICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcblxyXG4gICAgICAgIC8vIHNlYXJjaFN0cmVhbS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLl9jbGllbnREYXRhU2VydmljZS5nZXREYXRhKCkgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+ICB7IHRoaXMuY2xpZW50cyA9IHJlc3BvbnNlIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgICAgIC8vICAgICApO1xyXG5cclxuICAgICAgICAvLyBzZWFyY2hTdHJlYW0uXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2gpO1xyXG4gICAgICAgIC8vIHRoaXMuX2NsaWVudERhdGFTZXJ2aWNlLnNlYXJjaERhdGEoc2VhcmNoKVxyXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
