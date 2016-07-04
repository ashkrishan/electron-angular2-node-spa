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
//Core
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
//Thirdparty
var alert_1 = require('ng2-bootstrap/components/alert');
var moment = require('moment');
//app
var tabs_component_1 = require('../shared/tabs.component');
var tab_component_1 = require('../shared/tab.component');
var client_data_service_1 = require('./client-data.service');
var TabDataComponent = (function () {
    function TabDataComponent(_fb, _clientDataService, _routeSegment) {
        this._fb = _fb;
        this._clientDataService = _clientDataService;
        this._routeSegment = _routeSegment;
        this.client = {};
        this.isUserCreated = false;
    }
    TabDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientForm = this._fb.group({
            cl_firstName: ['', common_1.Validators.required],
            cl_middleName: [],
            cl_lastName: []
        });
        // let now = moment().format('LLLL');
        // console.log(now);
        var id = this._routeSegment.getParam('id');
        this.btnTitle = id ? 'Edit client' : 'Add & save new client';
        console.log(id);
        if (id) {
            this._clientDataService.getClient(id)
                .subscribe(function (response) {
                _this.client = response;
                console.log(_this.client);
                _this.created_date = moment(response.created_date).format('DD/MM/YYYY HH:mm');
                _this.modified_date = moment(response.modified_date).format('DD/MM/YYYY HH:mm');
            });
        }
    };
    TabDataComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isUserCreated = false;
        var id = this._routeSegment.getParam('id');
        if (id) {
            this._clientDataService.updateClient(id, this.clientForm.value)
                .subscribe(function (response) {
                console.log(response);
                _this.isUserCreated = true;
                _this.alertMessage = 'Client "' + response.cl_firstName + '" has been successfully edited and saved!';
            });
        }
        else {
            console.log(this.clientForm.value);
            this._clientDataService.createClient(this.clientForm.value)
                .subscribe(function (response) {
                console.log(response);
                _this.isUserCreated = true;
                _this.alertMessage = 'New client "' + response.cl_email + '" has been successfully created and saved!';
            });
        }
    };
    TabDataComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'tab-data.template.html',
            directives: [tabs_component_1.TabsComponent, tab_component_1.TabComponent, alert_1.AlertComponent],
            styles: ["\n   footer {\n   position:fixed;\n   left:0px;\n   bottom:0px;\n   height:30px;\n   width:100%;\n   background:#2c3e50;\n   color:#fff;\n\n    }\n\n    .footer-list {\n      float: right;\n    }\n  \n    .alert-message {\n      width: 50%;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, client_data_service_1.ClientDataService, router_1.RouteSegment])
    ], TabDataComponent);
    return TabDataComponent;
}());
exports.TabDataComponent = TabDataComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL3RhYi1kYXRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTTtBQUNOLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBbUQsaUJBQWlCLENBQUMsQ0FBQTtBQUNyRSx1QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3QyxZQUFZO0FBQ1osc0JBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFDOUQsSUFBWSxNQUFNLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFFakMsS0FBSztBQUNMLCtCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELG9DQUFnQyx1QkFBdUIsQ0FBQyxDQUFBO0FBZ0N4RDtJQVNFLDBCQUFvQixHQUFnQixFQUFVLGtCQUFxQyxFQUFVLGFBQTJCO1FBQXBHLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFQeEgsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUlaLGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBTS9CLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDakMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFdBQVcsRUFBRSxFQUFFO1NBQ2hCLENBQUMsQ0FBQztRQUVILHFDQUFxQztRQUNyQyxvQkFBb0I7UUFFcEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsYUFBYSxHQUFFLHVCQUF1QixDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO2lCQUNsQyxTQUFTLENBQUMsVUFBQSxRQUFRO2dCQUFNLEtBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekIsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUM3RSxLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDL0UsQ0FBQyxDQUFFLENBQUM7UUFDaEMsQ0FBQztJQUdILENBQUM7SUFHQyxtQ0FBUSxHQUFSO1FBQUEsaUJBbUJEO1FBbEJHLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFDNUQsU0FBUyxDQUFDLFVBQUEsUUFBUTtnQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNwQixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFlBQVksR0FBRyxVQUFVLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRywyQ0FBMkMsQ0FBQztZQUN4RyxDQUFDLENBQUUsQ0FBQztRQUUvQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFDdEQsU0FBUyxDQUFDLFVBQUEsUUFBUTtnQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNwQixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFlBQVksR0FBRyxjQUFjLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRyw0Q0FBNEMsQ0FBQztZQUN6RyxDQUFDLENBQUUsQ0FBQztRQUM3QixDQUFDO0lBRVAsQ0FBQztJQXpGSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDRCQUFZLEVBQUUsc0JBQWMsQ0FBQztZQUN6RCxNQUFNLEVBQUUsQ0FBQyw2UEFtQlIsQ0FBQztTQUVILENBQUM7O3dCQUFBO0lBbUVGLHVCQUFDO0FBQUQsQ0E5REEsQUE4REMsSUFBQTtBQTlEWSx3QkFBZ0IsbUJBOEQ1QixDQUFBIiwiZmlsZSI6ImRiYXBwL3RhYi1kYXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29yZVxyXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlcixDb250cm9sR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Um91dGVTZWdtZW50fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy9UaGlyZHBhcnR5XHJcbmltcG9ydCB7QWxlcnRDb21wb25lbnR9IGZyb20gJ25nMi1ib290c3RyYXAvY29tcG9uZW50cy9hbGVydCc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuLy9hcHBcclxuaW1wb3J0IHtUYWJzQ29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvdGFicy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RhYkNvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL3RhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NsaWVudERhdGFTZXJ2aWNlfSBmcm9tICcuL2NsaWVudC1kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCwgXHJcbiAgdGVtcGxhdGVVcmw6ICd0YWItZGF0YS50ZW1wbGF0ZS5odG1sJyxcclxuICBkaXJlY3RpdmVzOiBbVGFic0NvbXBvbmVudCwgVGFiQ29tcG9uZW50LCBBbGVydENvbXBvbmVudF0sXHJcbiAgc3R5bGVzOiBbYFxyXG4gICBmb290ZXIge1xyXG4gICBwb3NpdGlvbjpmaXhlZDtcclxuICAgbGVmdDowcHg7XHJcbiAgIGJvdHRvbTowcHg7XHJcbiAgIGhlaWdodDozMHB4O1xyXG4gICB3aWR0aDoxMDAlO1xyXG4gICBiYWNrZ3JvdW5kOiMyYzNlNTA7XHJcbiAgIGNvbG9yOiNmZmY7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItbGlzdCB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICBcclxuICAgIC5hbGVydC1tZXNzYWdlIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICBgXVxyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJEYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gIGNsaWVudEZvcm06IENvbnRyb2xHcm91cDtcclxuICBjbGllbnQgPSB7fTtcclxuICBidG5UaXRsZTogU3RyaW5nO1xyXG4gIGNyZWF0ZWRfZGF0ZTogc3RyaW5nOyAgXHJcbiAgbW9kaWZpZWRfZGF0ZTogc3RyaW5nO1xyXG4gIGlzVXNlckNyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBhbGVydE1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9jbGllbnREYXRhU2VydmljZTogQ2xpZW50RGF0YVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlU2VnbWVudDogUm91dGVTZWdtZW50KSB7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgICB0aGlzLmNsaWVudEZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgIGNsX2ZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY2xfbWlkZGxlTmFtZTogW10sXHJcbiAgICAgIGNsX2xhc3ROYW1lOiBbXVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGV0IG5vdyA9IG1vbWVudCgpLmZvcm1hdCgnTExMTCcpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobm93KTtcclxuXHJcbiAgICB2YXIgaWQgPSB0aGlzLl9yb3V0ZVNlZ21lbnQuZ2V0UGFyYW0oJ2lkJyk7XHJcbiAgICB0aGlzLmJ0blRpdGxlID0gaWQgPyAnRWRpdCBjbGllbnQnOiAnQWRkICYgc2F2ZSBuZXcgY2xpZW50JztcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgIGlmKGlkKSB7XHJcbiAgICAgIHRoaXMuX2NsaWVudERhdGFTZXJ2aWNlLmdldENsaWVudChpZClcclxuICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHsgdGhpcy5jbGllbnQgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNsaWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVkX2RhdGUgPSBtb21lbnQocmVzcG9uc2UuY3JlYXRlZF9kYXRlKS5mb3JtYXQoJ0REL01NL1lZWVkgSEg6bW0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGlmaWVkX2RhdGUgPSBtb21lbnQocmVzcG9uc2UubW9kaWZpZWRfZGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZIEhIOm1tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBcclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICB0aGlzLmlzVXNlckNyZWF0ZWQgPSBmYWxzZTtcclxuICAgICAgdmFyIGlkID0gdGhpcy5fcm91dGVTZWdtZW50LmdldFBhcmFtKCdpZCcpO1xyXG4gICAgICBpZihpZCkge1xyXG4gICAgICAgIHRoaXMuX2NsaWVudERhdGFTZXJ2aWNlLnVwZGF0ZUNsaWVudChpZCwgdGhpcy5jbGllbnRGb3JtLnZhbHVlKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7IGNvbnNvbGUubG9nKHJlc3BvbnNlKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1VzZXJDcmVhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnQ2xpZW50IFwiJyArIHJlc3BvbnNlLmNsX2ZpcnN0TmFtZSArICdcIiBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgZWRpdGVkIGFuZCBzYXZlZCEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jbGllbnRGb3JtLnZhbHVlKTtcclxuICAgICAgdGhpcy5fY2xpZW50RGF0YVNlcnZpY2UuY3JlYXRlQ2xpZW50KHRoaXMuY2xpZW50Rm9ybS52YWx1ZSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4geyBjb25zb2xlLmxvZyhyZXNwb25zZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVc2VyQ3JlYXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJ05ldyBjbGllbnQgXCInICsgcmVzcG9uc2UuY2xfZW1haWwgKyAnXCIgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYW5kIHNhdmVkISc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgICAgICB9ICAgIFxyXG5cclxuICB9XHJcbiAgICBcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
