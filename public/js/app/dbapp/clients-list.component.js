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
// import 'rxjs/add/operator/mergeAll';
var client_data_service_1 = require('./client-data.service');
var ClientsListComponent = (function () {
    function ClientsListComponent(_clientDataService, _fb) {
        this._clientDataService = _clientDataService;
        this._fb = _fb;
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
        }, function (error) { return console.log(error); }); });
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
        __metadata('design:paramtypes', [client_data_service_1.ClientDataService, common_1.FormBuilder])
    ], ClientsListComponent);
    return ClientsListComponent;
}());
exports.ClientsListComponent = ClientsListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBb0QsaUJBQWlCLENBQUMsQ0FBQTtBQUV0RSxtQkFBbUI7QUFDbkIsUUFBTyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3hDLFFBQU8sd0NBQXdDLENBQUMsQ0FBQTtBQUNoRCxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLHVDQUF1QztBQUl2QyxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQWN4RDtJQUlJLDhCQUFvQixrQkFBcUMsRUFBVSxHQUFnQjtRQUEvRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYTtJQUVuRixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQTJCQztRQTFCRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzdCLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxZQUFZO2FBQzFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFmLENBQWUsQ0FBQzthQUMvQixZQUFZLENBQUMsR0FBRyxDQUFDO2FBQ2pCLG9CQUFvQixFQUFFO2FBQ3RCLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDdkQsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUFPLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFBO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUNBLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxFQUpsQyxDQUlrQyxDQUNwRCxDQUFBO1FBRUQsZ0RBQWdEO1FBR3BELGdEQUFnRDtRQUNoRCx5REFBeUQ7UUFDekQsdURBQXVEO1FBQ3ZELGdDQUFnQztRQUNoQywyREFBMkQ7UUFHdkQsS0FBSztJQUNiLENBQUM7SUEvQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsTUFBTSxFQUFFLENBQUMsK0pBTUEsQ0FBQztTQUNiLENBQUM7OzRCQUFBO0lBK0RFLDJCQUFDO0FBQUQsQ0E3REosQUE2REssSUFBQTtBQTdEUSw0QkFBb0IsdUJBNkQ1QixDQUFBIiwiZmlsZSI6ImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8vaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VBbGwnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQge0NsaWVudERhdGFTZXJ2aWNlfSBmcm9tICcuL2NsaWVudC1kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjbGllbnRzLWxpc3QudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgICAgIC5zZWFyY2hib3gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byAwIDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpZW50c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY2xpZW50czogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gICAgc2VhcmNoRm9ybTogQ29udHJvbEdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NsaWVudERhdGFTZXJ2aWNlOiBDbGllbnREYXRhU2VydmljZSwgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyKSB7XHJcblxyXG4gICAgfSAgICBcclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc2VhcmNoYm94OiBbXVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybS5jb250cm9scy5zZWFyY2hib3gudmFsdWVDaGFuZ2VzXHJcbiAgICAgICAgICAgIC5maWx0ZXIodGV4dCA9PiB0ZXh0Lmxlbmd0aCA+IDIpXHJcbiAgICAgICAgICAgIC5kZWJvdW5jZVRpbWUoNDAwKVxyXG4gICAgICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5fY2xpZW50RGF0YVNlcnZpY2Uuc2VhcmNoRGF0YSh0aGlzLnNlYXJjaEZvcm0udmFsdWUpICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiAgeyB0aGlzLmNsaWVudHMgPSByZXNwb25zZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICAgICAgKVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5fY2xpZW50RGF0YVNlcnZpY2UuZ2V0RGF0YSgpICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gIHsgdGhpcy5jbGllbnRzID0gcmVzcG9uc2UgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICxlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25TZWFyY2goKSB7XHJcbiAgICAvLyAgICB0aGlzLmNsaWVudHMkID0gdGhpcy5zZWFyY2hGb3JtLmNvbnRyb2xzLnNlYXJjaGJveC52YWx1ZUNoYW5nZXNcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG5cclxuICAgICAgICAvLyB2YXIgc2VhcmNoID0gdGhpcy5zZWFyY2hGb3JtLmZpbmQoJ3NlYXJjaGJveCcpO1xyXG4gICAgICAgIC8vIGxldCBzZWFyY2hTdHJlYW0gPSBzZWFyY2gudmFsdWVDaGFuZ2VzXHJcbiAgICAgICAgLy8gICAgIC5maWx0ZXIodGV4dCA9PiB0ZXh0Lmxlbmd0aCA+IDIpXHJcbiAgICAgICAgLy8gICAgIC5kZWJvdW5jZVRpbWUoNTAwKVxyXG4gICAgICAgIC8vICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG5cclxuICAgICAgICAvLyBzZWFyY2hTdHJlYW0uc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5fY2xpZW50RGF0YVNlcnZpY2UuZ2V0RGF0YSgpICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiAgeyB0aGlzLmNsaWVudHMgPSByZXNwb25zZSBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICAvLyAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gc2VhcmNoU3RyZWFtLlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoKTtcclxuICAgICAgICAvLyB0aGlzLl9jbGllbnREYXRhU2VydmljZS5zZWFyY2hEYXRhKHNlYXJjaClcclxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
