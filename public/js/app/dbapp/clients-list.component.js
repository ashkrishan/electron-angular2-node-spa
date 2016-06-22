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
var client_data_service_1 = require('./client-data.service');
var ClientsListComponent = (function () {
    function ClientsListComponent(_clientDataService, _fb) {
        this._clientDataService = _clientDataService;
        this._fb = _fb;
        this.clients = [];
    }
    ClientsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = this._fb.group({
            searchbox: []
        });
        this._clientDataService.getData()
            .subscribe(function (response) {
            _this.clients = response;
            console.log(response);
        }, function (error) { return console.log(error); });
    };
    ClientsListComponent.prototype.onSearch = function () {
        var search = this.searchForm.value.searchbox;
        console.log(search);
        this._clientDataService.searchData(search)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudHMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBb0QsaUJBQWlCLENBQUMsQ0FBQTtBQUV0RSxvQ0FBZ0MsdUJBQXVCLENBQUMsQ0FBQTtBQWN4RDtJQUlJLDhCQUFvQixrQkFBcUMsRUFBVSxHQUFnQjtRQUEvRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUhuRixZQUFPLEdBQUcsRUFBRSxDQUFDO0lBS2IsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDN0IsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTthQUM1QixTQUFTLENBQUMsVUFBQSxRQUFRO1lBQU8sS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUE7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQ0EsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUduRCxDQUFDO0lBQ1YsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQzthQUNyQyxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixFQUNoQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBekNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLE1BQU0sRUFBRSxDQUFDLCtKQU1BLENBQUM7U0FDYixDQUFDOzs0QkFBQTtJQWlDRiwyQkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlksNEJBQW9CLHVCQStCaEMsQ0FBQSIsImZpbGUiOiJkYmFwcC9jbGllbnRzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7Q2xpZW50RGF0YVNlcnZpY2V9IGZyb20gJy4vY2xpZW50LWRhdGEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NsaWVudHMtbGlzdC50ZW1wbGF0ZS5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAgICAgLnNlYXJjaGJveCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDAgO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjbGllbnRzID0gW107XHJcbiAgICBzZWFyY2hGb3JtOiBDb250cm9sR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2xpZW50RGF0YVNlcnZpY2U6IENsaWVudERhdGFTZXJ2aWNlLCBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIpIHtcclxuXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzZWFyY2hib3g6IFtdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NsaWVudERhdGFTZXJ2aWNlLmdldERhdGEoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+ICB7IHRoaXMuY2xpZW50cyA9IHJlc3BvbnNlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoKCkge1xyXG4gICAgICAgIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaEZvcm0udmFsdWUuc2VhcmNoYm94O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaCk7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50RGF0YVNlcnZpY2Uuc2VhcmNoRGF0YShzZWFyY2gpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
