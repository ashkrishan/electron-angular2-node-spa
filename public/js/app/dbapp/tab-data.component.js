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
var router_1 = require('@angular/router');
var moment = require('moment');
var tabs_component_1 = require('../shared/tabs.component');
var tab_component_1 = require('../shared/tab.component');
var client_data_service_1 = require('./client-data.service');
var TabDataComponent = (function () {
    function TabDataComponent(_fb, _clientDataService, _routeSegment) {
        this._fb = _fb;
        this._clientDataService = _clientDataService;
        this._routeSegment = _routeSegment;
        this.client = {};
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
        this.btnTitle = id ? 'Edit client' : 'Save Client';
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
        var id = this._routeSegment.getParam('id');
        if (id) {
            this._clientDataService.updateClient(id, this.clientForm.value)
                .subscribe(function (response) { return console.log(response); });
        }
        else {
            console.log(this.clientForm.value);
            this._clientDataService.createClient(this.clientForm.value)
                .subscribe(function (response) { return console.log(response); });
        }
    };
    TabDataComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'tab-data.template.html',
            directives: [tabs_component_1.TabsComponent, tab_component_1.TabComponent],
            styles: ["\n   footer {\n   position:fixed;\n   left:0px;\n   bottom:0px;\n   height:30px;\n   width:100%;\n   background:#2c3e50;\n   color:#fff;\n\n    }\n\n    .footer-list {\n      float: right;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, client_data_service_1.ClientDataService, router_1.RouteSegment])
    ], TabDataComponent);
    return TabDataComponent;
}());
exports.TabDataComponent = TabDataComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL3RhYi1kYXRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFtRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JFLHVCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLElBQVksTUFBTSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBRWpDLCtCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3ZELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELG9DQUFnQyx1QkFBdUIsQ0FBQyxDQUFBO0FBNEJ4RDtJQU9FLDBCQUFvQixHQUFnQixFQUFVLGtCQUFxQyxFQUFVLGFBQTJCO1FBQXBHLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFMeEgsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQVFaLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDakMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFdBQVcsRUFBRSxFQUFFO1NBQ2hCLENBQUMsQ0FBQztRQUVILHFDQUFxQztRQUNyQyxvQkFBb0I7UUFFcEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsYUFBYSxHQUFFLGFBQWEsQ0FBQztRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLEVBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztpQkFDbEMsU0FBUyxDQUFDLFVBQUEsUUFBUTtnQkFBTSxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDN0UsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQy9FLENBQUMsQ0FBRSxDQUFDO1FBQ2hDLENBQUM7SUFHSCxDQUFDO0lBR0MsbUNBQVEsR0FBUjtRQUNFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztpQkFDNUQsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBRWxELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2lCQUN4RCxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNMLENBQUM7SUEzRUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsVUFBVSxFQUFFLENBQUMsOEJBQWEsRUFBRSw0QkFBWSxDQUFDO1lBQ3pDLE1BQU0sRUFBRSxDQUFDLHlNQWVSLENBQUM7U0FFSCxDQUFDOzt3QkFBQTtJQXdERix1QkFBQztBQUFELENBbkRBLEFBbURDLElBQUE7QUFuRFksd0JBQWdCLG1CQW1ENUIsQ0FBQSIsImZpbGUiOiJkYmFwcC90YWItZGF0YS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlcixDb250cm9sR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Um91dGVTZWdtZW50fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQge1RhYnNDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC90YWJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VGFiQ29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2xpZW50RGF0YVNlcnZpY2V9IGZyb20gJy4vY2xpZW50LWRhdGEuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLCBcclxuICB0ZW1wbGF0ZVVybDogJ3RhYi1kYXRhLnRlbXBsYXRlLmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtUYWJzQ29tcG9uZW50LCBUYWJDb21wb25lbnRdLFxyXG4gIHN0eWxlczogW2BcclxuICAgZm9vdGVyIHtcclxuICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgIGxlZnQ6MHB4O1xyXG4gICBib3R0b206MHB4O1xyXG4gICBoZWlnaHQ6MzBweDtcclxuICAgd2lkdGg6MTAwJTtcclxuICAgYmFja2dyb3VuZDojMmMzZTUwO1xyXG4gICBjb2xvcjojZmZmO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWxpc3Qge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgYF1cclxuXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGFiRGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICBjbGllbnRGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgY2xpZW50ID0ge307XHJcbiAgYnRuVGl0bGU6IFN0cmluZztcclxuICBjcmVhdGVkX2RhdGU6IHN0cmluZzsgIFxyXG4gIG1vZGlmaWVkX2RhdGU6IHN0cmluZzsgIFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgX2NsaWVudERhdGFTZXJ2aWNlOiBDbGllbnREYXRhU2VydmljZSwgcHJpdmF0ZSBfcm91dGVTZWdtZW50OiBSb3V0ZVNlZ21lbnQpIHtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMuY2xpZW50Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgY2xfZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjbF9taWRkbGVOYW1lOiBbXSxcclxuICAgICAgY2xfbGFzdE5hbWU6IFtdXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBsZXQgbm93ID0gbW9tZW50KCkuZm9ybWF0KCdMTExMJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhub3cpO1xyXG5cclxuICAgIHZhciBpZCA9IHRoaXMuX3JvdXRlU2VnbWVudC5nZXRQYXJhbSgnaWQnKTtcclxuICAgIHRoaXMuYnRuVGl0bGUgPSBpZCA/ICdFZGl0IGNsaWVudCc6ICdTYXZlIENsaWVudCc7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICBpZihpZCkge1xyXG4gICAgICB0aGlzLl9jbGllbnREYXRhU2VydmljZS5nZXRDbGllbnQoaWQpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7IHRoaXMuY2xpZW50ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jbGllbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlZF9kYXRlID0gbW9tZW50KHJlc3BvbnNlLmNyZWF0ZWRfZGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZIEhIOm1tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RpZmllZF9kYXRlID0gbW9tZW50KHJlc3BvbnNlLm1vZGlmaWVkX2RhdGUpLmZvcm1hdCgnREQvTU0vWVlZWSBISDptbScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgdmFyIGlkID0gdGhpcy5fcm91dGVTZWdtZW50LmdldFBhcmFtKCdpZCcpO1xyXG4gICAgICBpZihpZCkge1xyXG4gICAgICAgIHRoaXMuX2NsaWVudERhdGFTZXJ2aWNlLnVwZGF0ZUNsaWVudChpZCwgdGhpcy5jbGllbnRGb3JtLnZhbHVlKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG4gICAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2xpZW50Rm9ybS52YWx1ZSk7XHJcbiAgICAgIHRoaXMuX2NsaWVudERhdGFTZXJ2aWNlLmNyZWF0ZUNsaWVudCh0aGlzLmNsaWVudEZvcm0udmFsdWUpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
