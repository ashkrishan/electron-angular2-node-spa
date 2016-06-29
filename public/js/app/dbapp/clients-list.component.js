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
        __metadata('design:paramtypes', [client_data_service_1.ClientDataService, common_1.FormBuilder, router_1.Router])
    ], ClientsListComponent);
    return ClientsListComponent;
}());
exports.ClientsListComponent = ClientsListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBb0QsaUJBQWlCLENBQUMsQ0FBQTtBQUV0RSxtQkFBbUI7QUFDbkIsUUFBTyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3hDLFFBQU8sd0NBQXdDLENBQUMsQ0FBQTtBQUNoRCxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLHVDQUF1QztBQUl2QyxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQWN4RDtJQUtJLDhCQUFvQixrQkFBcUMsRUFBVSxHQUFnQixFQUFVLE9BQWU7UUFBeEYsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRjVHLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFeEIsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkF3Qks7UUF2QkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUM3QixTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWTthQUMxQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBZixDQUFlLENBQUM7YUFDL0IsWUFBWSxDQUFDLEdBQUcsQ0FBQzthQUNqQixvQkFBb0IsRUFBRTthQUN0QixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2FBQ3ZELFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFBTyxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQTtZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhCLENBQUMsRUFDQSxVQUFBLEtBQUs7WUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQztnQkFDMUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQy9DLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7UUFDSCxDQUFDLENBQUMsRUFaakIsQ0FZaUIsQ0FDbkMsQ0FBQTtJQUVMLENBQUM7SUFHRCwyQ0FBWSxHQUFaLFVBQWEsUUFBUTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFFbkQsQ0FBQztJQXJEVDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxNQUFNLEVBQUUsQ0FBQywrSkFNQSxDQUFDO1NBQ2IsQ0FBQzs7NEJBQUE7SUFtRkUsMkJBQUM7QUFBRCxDQWpGSixBQWlGSyxJQUFBO0FBakZRLDRCQUFvQix1QkFpRjVCLENBQUEiLCJmaWxlIjoiZGJhcHAvY2xpZW50cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuLy9pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VBbGwnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQge0NsaWVudERhdGFTZXJ2aWNlfSBmcm9tICcuL2NsaWVudC1kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjbGllbnRzLWxpc3QudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgICAgIC5zZWFyY2hib3gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byAwIDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpZW50c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY2xpZW50czogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgc2VhcmNoRm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgaXNUb2tlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NsaWVudERhdGFTZXJ2aWNlOiBDbGllbnREYXRhU2VydmljZSwgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuaXNUb2tlbiA9IHRydWU7XHJcblxyXG4gICAgfSAgICBcclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc2VhcmNoYm94OiBbXVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybS5jb250cm9scy5zZWFyY2hib3gudmFsdWVDaGFuZ2VzXHJcbiAgICAgICAgICAgIC5maWx0ZXIodGV4dCA9PiB0ZXh0Lmxlbmd0aCA+IDIpXHJcbiAgICAgICAgICAgIC5kZWJvdW5jZVRpbWUoNDAwKVxyXG4gICAgICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5fY2xpZW50RGF0YVNlcnZpY2Uuc2VhcmNoRGF0YSh0aGlzLnNlYXJjaEZvcm0udmFsdWUpICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiAgeyB0aGlzLmNsaWVudHMgPSByZXNwb25zZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICxlcnJvciA9PiB7IGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmVycm9yLm5hbWUgPT0gJ1Rva2VuRXhwaXJlZEVycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQuIFBsZWFzZSByZS1sb2dpbiFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2F1dGgvc2lnbmluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgb25FZGl0Q2xpZW50KGNsaWVudElkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWVudElkKTtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2NsaWVudHMvJyArIGNsaWVudElkXSkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgICAgICAgLy8uc3Vic2NyaWJlKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSk7XHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLl9jbGllbnREYXRhU2VydmljZS5nZXREYXRhKCkgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiAgeyB0aGlzLmNsaWVudHMgPSByZXNwb25zZSBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gKTtcclxuICAgIFxyXG5cclxuICAgIC8vIG9uU2VhcmNoKCkge1xyXG4gICAgLy8gICAgdGhpcy5jbGllbnRzJCA9IHRoaXMuc2VhcmNoRm9ybS5jb250cm9scy5zZWFyY2hib3gudmFsdWVDaGFuZ2VzXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKTtcclxuXHJcbiAgICAgICAgLy8gdmFyIHNlYXJjaCA9IHRoaXMuc2VhcmNoRm9ybS5maW5kKCdzZWFyY2hib3gnKTtcclxuICAgICAgICAvLyBsZXQgc2VhcmNoU3RyZWFtID0gc2VhcmNoLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAgIC8vICAgICAuZmlsdGVyKHRleHQgPT4gdGV4dC5sZW5ndGggPiAyKVxyXG4gICAgICAgIC8vICAgICAuZGVib3VuY2VUaW1lKDUwMClcclxuICAgICAgICAvLyAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuXHJcbiAgICAgICAgLy8gc2VhcmNoU3RyZWFtLnN1YnNjcmliZShkYXRhID0+IHRoaXMuX2NsaWVudERhdGFTZXJ2aWNlLmdldERhdGEoKSAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gIHsgdGhpcy5jbGllbnRzID0gcmVzcG9uc2UgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICxlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICAgICAgLy8gICAgICk7XHJcblxyXG4gICAgICAgIC8vIHNlYXJjaFN0cmVhbS5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaCk7XHJcbiAgICAgICAgLy8gdGhpcy5fY2xpZW50RGF0YVNlcnZpY2Uuc2VhcmNoRGF0YShzZWFyY2gpXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
