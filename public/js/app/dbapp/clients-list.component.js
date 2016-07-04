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
    ClientsListComponent.prototype.onDownload = function () {
        //var downloadWindow = window;
        var reader = new FileReader();
        this._clientDataService.downloadClientData()
            .subscribe(function (data) {
            //downloadWindow = window.open(window.URL.createObjectURL(data));
            reader.readAsDataURL(data);
        }, function (error) { return console.log("Error downloading file"); }, function () {
            console.log('File download completed');
            //downloadWindow.close();
        });
        // var test;   
        reader.onloadend = function (e) {
            var downloadWindow = window.open(reader.result, 'csv');
            setTimeout(function () { return downloadWindow.close(); }, 20000);
            return false;
        };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBb0QsaUJBQWlCLENBQUMsQ0FBQTtBQUV0RSxtQkFBbUI7QUFDbkIsUUFBTyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3hDLFFBQU8sd0NBQXdDLENBQUMsQ0FBQTtBQUNoRCxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHVDQUF1QztBQUV2Qyw2QkFBOEIsc0JBQXNCLENBQUMsQ0FBQTtBQUlyRCxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQWN4RDtJQUtJLDhCQUFvQixrQkFBcUMsRUFBVSxHQUFnQixFQUFVLE9BQWUsRUFBVSxZQUE2QjtRQUEvSCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFGbkosWUFBTyxHQUFZLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUV4QixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQTRCQztRQTNCRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzdCLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2FBQzFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFmLENBQWUsQ0FBQzthQUMvQixZQUFZLENBQUMsR0FBRyxDQUFDO2FBQ2pCLG9CQUFvQixFQUFFO2FBQ3RCLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDdkUsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNuQixLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFCLENBQUMsRUFDQyxVQUFBLEtBQUs7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQztnQkFDMUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMzQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQztRQUNMLENBQUMsQ0FBQyxFQWhCYSxDQWdCYixDQUNMLENBQUE7SUFFVCxDQUFDO0lBR0QsMkNBQVksR0FBWixVQUFhLFFBQVE7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBRW5ELENBQUM7SUFFRCx5Q0FBVSxHQUFWO1FBQ0ksOEJBQThCO1FBQzlCLElBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFO2FBQ3ZDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDWCxpRUFBaUU7WUFDakUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixDQUFDLEVBRUwsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLEVBQXJDLENBQXFDLEVBQzlDO1lBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1lBQ3RDLHlCQUF5QjtRQUMzQixDQUFDLENBRU4sQ0FBQTtRQUNWLGVBQWU7UUFDZCxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUMxQixJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFFLENBQUM7WUFDeEQsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQXRCLENBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUduQixDQUFDLENBQUE7SUFDQyxDQUFDO0lBbkZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLE1BQU0sRUFBRSxDQUFDLCtKQU1BLENBQUM7U0FDYixDQUFDOzs0QkFBQTtJQWlIRiwyQkFBQztBQUFELENBL0dBLEFBK0dDLElBQUE7QUEvR1ksNEJBQW9CLHVCQStHaEMsQ0FBQSIsImZpbGUiOiJkYmFwcC9jbGllbnRzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG4vL2ltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZUFsbCc7XHJcblxyXG5pbXBvcnQge1VzZXJBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQge0NsaWVudERhdGFTZXJ2aWNlfSBmcm9tICcuL2NsaWVudC1kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjbGllbnRzLWxpc3QudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgICAgIC5zZWFyY2hib3gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byAwIDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpZW50c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY2xpZW50czogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgc2VhcmNoRm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgaXNUb2tlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NsaWVudERhdGFTZXJ2aWNlOiBDbGllbnREYXRhU2VydmljZSwgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IFVzZXJBdXRoU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaXNUb2tlbiA9IHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc2VhcmNoYm94OiBbXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm0uY29udHJvbHMuc2VhcmNoYm94LnZhbHVlQ2hhbmdlc1xyXG4gICAgICAgICAgICAuZmlsdGVyKHRleHQgPT4gdGV4dC5sZW5ndGggPiAyKVxyXG4gICAgICAgICAgICAuZGVib3VuY2VUaW1lKDQwMClcclxuICAgICAgICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHRoaXMuX2NsaWVudERhdGFTZXJ2aWNlLnNlYXJjaERhdGEodGhpcy5zZWFyY2hGb3JtLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudHMgPSByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAsIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmVycm9yLm5hbWUgPT0gJ1Rva2VuRXhwaXJlZEVycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgc2Vzc2lvbiBoYXMgZXhwaXJlZC4gUGxlYXNlIHJlLWxvZ2luIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0VXNlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2F1dGgvc2lnbmluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkVkaXRDbGllbnQoY2xpZW50SWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjbGllbnRJZCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2NsaWVudHMvJyArIGNsaWVudElkXSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25Eb3dubG9hZCgpIHtcclxuICAgICAgICAvL3ZhciBkb3dubG9hZFdpbmRvdyA9IHdpbmRvdztcclxuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICB0aGlzLl9jbGllbnREYXRhU2VydmljZS5kb3dubG9hZENsaWVudERhdGEoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4geyBcclxuICAgICAgICAgICAgICAgIC8vZG93bmxvYWRXaW5kb3cgPSB3aW5kb3cub3Blbih3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgZG93bmxvYWRpbmcgZmlsZVwiKSxcclxuICAgICAgICAgICAgKCkgPT4geyBjb25zb2xlLmxvZygnRmlsZSBkb3dubG9hZCBjb21wbGV0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vZG93bmxvYWRXaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKVxyXG4gICAvLyB2YXIgdGVzdDsgICBcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBkb3dubG9hZFdpbmRvdyA9IHdpbmRvdy5vcGVuKHJlYWRlci5yZXN1bHQsICdjc3YnICk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb3dubG9hZFdpbmRvdy5jbG9zZSgpLCAyMDAwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHJcblxyXG4gIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8uc3Vic2NyaWJlKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcblxyXG5cclxuICAgIC8vIHRoaXMuX2NsaWVudERhdGFTZXJ2aWNlLmdldERhdGEoKSAgICAgICAgICAgIFxyXG4gICAgLy8gICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gIHsgdGhpcy5jbGllbnRzID0gcmVzcG9uc2UgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICxlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcblxyXG4gICAgLy8gKTtcclxuXHJcblxyXG4gICAgLy8gb25TZWFyY2goKSB7XHJcbiAgICAvLyAgICB0aGlzLmNsaWVudHMkID0gdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzLnNlYXJjaGJveC52YWx1ZUNoYW5nZXNcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG5cclxuICAgIC8vIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaEZvcm0uZmluZCgnc2VhcmNoYm94Jyk7XHJcbiAgICAvLyBsZXQgc2VhcmNoU3RyZWFtID0gc2VhcmNoLnZhbHVlQ2hhbmdlc1xyXG4gICAgLy8gICAgIC5maWx0ZXIodGV4dCA9PiB0ZXh0Lmxlbmd0aCA+IDIpXHJcbiAgICAvLyAgICAgLmRlYm91bmNlVGltZSg1MDApXHJcbiAgICAvLyAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuXHJcbiAgICAvLyBzZWFyY2hTdHJlYW0uc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5fY2xpZW50RGF0YVNlcnZpY2UuZ2V0RGF0YSgpICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+ICB7IHRoaXMuY2xpZW50cyA9IHJlc3BvbnNlIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgLy8gICAgICk7XHJcblxyXG4gICAgLy8gc2VhcmNoU3RyZWFtLlxyXG5cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2gpO1xyXG4gICAgLy8gdGhpcy5fY2xpZW50RGF0YVNlcnZpY2Uuc2VhcmNoRGF0YShzZWFyY2gpXHJcbiAgICAvLyAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSksXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
