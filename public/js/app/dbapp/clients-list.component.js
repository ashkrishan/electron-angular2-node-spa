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
var client_data_service_1 = require('./client-data.service');
var ClientsListComponent = (function () {
    function ClientsListComponent(_clientDataService, _fb, _router) {
        this._clientDataService = _clientDataService;
        this._fb = _fb;
        this._router = _router;
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
                _this._router.navigateByUrl('/auth/signin');
            }
            else {
                console.log(error);
            }
        }); });
        //.subscribe(response => console.log(response));
        // this._clientDataService.getData()            
        //     .subscribe(response =>  { this.clients = response 
        //                               console.log(response);
        //                             }
        //                             ,error => console.log(error)
        // );
    };
    ClientsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'clients-list.template.html',
            styles: ["\n            .searchbox {\n                width: 50%;\n                margin: auto 0 ;\n                padding-bottom: 20px;\n            }\n            "]
        }), 
        __metadata('design:paramtypes', [client_data_service_1.ClientDataService, common_1.FormBuilder, router_1.Router])
    ], ClientsListComponent);
    return ClientsListComponent;
}());
exports.ClientsListComponent = ClientsListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBb0QsaUJBQWlCLENBQUMsQ0FBQTtBQUV0RSxtQkFBbUI7QUFDbkIsUUFBTyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3hDLFFBQU8sd0NBQXdDLENBQUMsQ0FBQTtBQUNoRCxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHVDQUF1QztBQUl2QyxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQWN4RDtJQUtJLDhCQUFvQixrQkFBcUMsRUFBVSxHQUFnQixFQUFVLE9BQWU7UUFBeEYsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRjVHLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFeEIsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFtQ0M7UUFsQ0csSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUM3QixTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWTthQUMxQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBZixDQUFlLENBQUM7YUFDL0IsWUFBWSxDQUFDLEdBQUcsQ0FBQzthQUNqQixvQkFBb0IsRUFBRTthQUN0QixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2FBQ3ZELFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFBTyxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQTtZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhCLENBQUMsRUFDQSxVQUFBLEtBQUs7WUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQztnQkFDMUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQy9DLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7UUFDSCxDQUFDLENBQUMsRUFaakIsQ0FZaUIsQ0FDbkMsQ0FBQTtRQUVELGdEQUFnRDtRQUdwRCxnREFBZ0Q7UUFDaEQseURBQXlEO1FBQ3pELHVEQUF1RDtRQUN2RCxnQ0FBZ0M7UUFDaEMsMkRBQTJEO1FBR3ZELEtBQUs7SUFDYixDQUFDO0lBekRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLE1BQU0sRUFBRSxDQUFDLCtKQU1BLENBQUM7U0FDYixDQUFDOzs0QkFBQTtJQXlFRSwyQkFBQztBQUFELENBdkVKLEFBdUVLLElBQUE7QUF2RVEsNEJBQW9CLHVCQXVFNUIsQ0FBQSIsImZpbGUiOiJkYmFwcC9jbGllbnRzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG4vL2ltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZUFsbCc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7Q2xpZW50RGF0YVNlcnZpY2V9IGZyb20gJy4vY2xpZW50LWRhdGEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NsaWVudHMtbGlzdC50ZW1wbGF0ZS5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAgICAgLnNlYXJjaGJveCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDAgO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjbGllbnRzOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBzZWFyY2hGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBpc1Rva2VuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2xpZW50RGF0YVNlcnZpY2U6IENsaWVudERhdGFTZXJ2aWNlLCBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5pc1Rva2VuID0gdHJ1ZTtcclxuXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzZWFyY2hib3g6IFtdXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzLnNlYXJjaGJveC52YWx1ZUNoYW5nZXNcclxuICAgICAgICAgICAgLmZpbHRlcih0ZXh0ID0+IHRleHQubGVuZ3RoID4gMilcclxuICAgICAgICAgICAgLmRlYm91bmNlVGltZSg0MDApXHJcbiAgICAgICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLl9jbGllbnREYXRhU2VydmljZS5zZWFyY2hEYXRhKHRoaXMuc2VhcmNoRm9ybS52YWx1ZSkgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+ICB7IHRoaXMuY2xpZW50cyA9IHJlc3BvbnNlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3IubmFtZSA9PSAnVG9rZW5FeHBpcmVkRXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZC4gUGxlYXNlIHJlLWxvZ2luIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYXV0aC9zaWduaW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5fY2xpZW50RGF0YVNlcnZpY2UuZ2V0RGF0YSgpICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gIHsgdGhpcy5jbGllbnRzID0gcmVzcG9uc2UgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICxlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25TZWFyY2goKSB7XHJcbiAgICAvLyAgICB0aGlzLmNsaWVudHMkID0gdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzLnNlYXJjaGJveC52YWx1ZUNoYW5nZXNcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG5cclxuICAgICAgICAvLyB2YXIgc2VhcmNoID0gdGhpcy5zZWFyY2hGb3JtLmZpbmQoJ3NlYXJjaGJveCcpO1xyXG4gICAgICAgIC8vIGxldCBzZWFyY2hTdHJlYW0gPSBzZWFyY2gudmFsdWVDaGFuZ2VzXHJcbiAgICAgICAgLy8gICAgIC5maWx0ZXIodGV4dCA9PiB0ZXh0Lmxlbmd0aCA+IDIpXHJcbiAgICAgICAgLy8gICAgIC5kZWJvdW5jZVRpbWUoNTAwKVxyXG4gICAgICAgIC8vICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG5cclxuICAgICAgICAvLyBzZWFyY2hTdHJlYW0uc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5fY2xpZW50RGF0YVNlcnZpY2UuZ2V0RGF0YSgpICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiAgeyB0aGlzLmNsaWVudHMgPSByZXNwb25zZSBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICAvLyAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gc2VhcmNoU3RyZWFtLlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoKTtcclxuICAgICAgICAvLyB0aGlzLl9jbGllbnREYXRhU2VydmljZS5zZWFyY2hEYXRhKHNlYXJjaClcclxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
