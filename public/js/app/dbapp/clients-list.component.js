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
var client_data_service_1 = require('./client-data.service');
var ClientsListComponent = (function () {
    function ClientsListComponent(_clientDataService) {
        this._clientDataService = _clientDataService;
        this.clients = [];
    }
    ClientsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clientDataService.getData()
            .subscribe(function (response) { return _this.clients = response; }, function (error) { return console.log(error); });
    };
    ClientsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'clients-list.template.html',
        }), 
        __metadata('design:paramtypes', [client_data_service_1.ClientDataService])
    ], ClientsListComponent);
    return ClientsListComponent;
}());
exports.ClientsListComponent = ClientsListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQU94RDtJQUVJLDhCQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUR6RCxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBR2IsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7YUFDNUIsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEVBQXZCLENBQXVCLEVBQ3RCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FHbkQsQ0FBQztJQUNWLENBQUM7SUFsQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7U0FDNUMsQ0FBQzs7NEJBQUE7SUFpQkYsMkJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDRCQUFvQix1QkFlaEMsQ0FBQSIsImZpbGUiOiJkYmFwcC9jbGllbnRzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0NsaWVudERhdGFTZXJ2aWNlfSBmcm9tICcuL2NsaWVudC1kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjbGllbnRzLWxpc3QudGVtcGxhdGUuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpZW50c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY2xpZW50cyA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2xpZW50RGF0YVNlcnZpY2U6IENsaWVudERhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgfSAgICBcclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuX2NsaWVudERhdGFTZXJ2aWNlLmdldERhdGEoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+ICB0aGlzLmNsaWVudHMgPSByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
