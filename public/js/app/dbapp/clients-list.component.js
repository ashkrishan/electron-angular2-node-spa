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
        // this._clientDataService.getData()
        //     .subscribe(response =>  this.clients = response
        //                             ,error => console.log(error)
        //     );
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQU94RDtJQUVJLDhCQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUR6RCxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBR2IsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxvQ0FBb0M7UUFDcEMsc0RBQXNEO1FBQ3RELDJEQUEyRDtRQUczRCxTQUFTO0lBQ2IsQ0FBQztJQWxCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtTQUM1QyxDQUFDOzs0QkFBQTtJQWlCRiwyQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksNEJBQW9CLHVCQWVoQyxDQUFBIiwiZmlsZSI6ImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7Q2xpZW50RGF0YVNlcnZpY2V9IGZyb20gJy4vY2xpZW50LWRhdGEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NsaWVudHMtbGlzdC50ZW1wbGF0ZS5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjbGllbnRzID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jbGllbnREYXRhU2VydmljZTogQ2xpZW50RGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgLy8gdGhpcy5fY2xpZW50RGF0YVNlcnZpY2UuZ2V0RGF0YSgpXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gIHRoaXMuY2xpZW50cyA9IHJlc3BvbnNlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICxlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gICAgICk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
