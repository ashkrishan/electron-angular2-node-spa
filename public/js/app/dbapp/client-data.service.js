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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var ClientDataService = (function () {
    function ClientDataService(_http) {
        this._http = _http;
        this._url = "http://127.0.0.1:3000/client";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : ' ';
    }
    ClientDataService.prototype.getData = function () {
        var token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : ' ';
        return this._http.get(this._url + token)
            .map(function (response) {
            var data = response.json().obj;
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    // getClient(clientId) {            
    //         return this._http.get(this.url + '/' + clientId + this.token)
    // }
    ClientDataService.prototype.createClient = function (client) {
        var token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : ' ';
        return this._http.post(this._url + token, JSON.stringify(client), { headers: this.headers })
            .map(function (response) {
            var data = response.json().obj;
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(console.log(error)); });
    };
    ClientDataService.prototype.searchData = function (searchString) {
        console.log(searchString);
        var token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : ' ';
        return this._http.post(this._url + '/search' + token, JSON.stringify(searchString), { headers: this.headers })
            .map(function (response) {
            var data = response.json().obj;
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(JSON.parse(error._body)); });
    };
    ClientDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientDataService);
    return ClientDataService;
}());
exports.ClientDataService = ClientDataService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFDM0MsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyxRQUFPLDJCQUEyQixDQUFDLENBQUE7QUFHbkM7SUFNSSwyQkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFKdkIsU0FBSSxHQUFHLDhCQUE4QixDQUFDO1FBQzlDLFlBQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDNUQsVUFBSyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBSTVGLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0ksSUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbEcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ25DLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFBTSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFFO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQ2pCO2FBQ0EsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUV4RCxDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLHdFQUF3RTtJQUd4RSxJQUFJO0lBR0osd0NBQVksR0FBWixVQUFhLE1BQU07UUFDZixJQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNsRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUM7YUFDdEYsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUFNLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FDakI7YUFDQSxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztJQUU5RCxDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLFlBQW9CO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsSUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbEcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFHLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQzthQUNwRyxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQU0sSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQTtZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUNqQjthQUNBLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBakRMO1FBQUMsaUJBQVUsRUFBRTs7eUJBQUE7SUFxRGIsd0JBQUM7QUFBRCxDQXBEQSxBQW9EQyxJQUFBO0FBcERZLHlCQUFpQixvQkFvRDdCLENBQUEiLCJmaWxlIjoiZGJhcHAvY2xpZW50LWRhdGEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENsaWVudERhdGFTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF91cmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6MzAwMC9jbGllbnRcIjtcclxuICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgdG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcgJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnICc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybCArIHRva2VuKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHsgdmFyIGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0Q2xpZW50KGNsaWVudElkKSB7ICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLnVybCArICcvJyArIGNsaWVudElkICsgdGhpcy50b2tlbilcclxuXHJcbiAgICAgICAgXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIGNyZWF0ZUNsaWVudChjbGllbnQpIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyAnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsICsgdG9rZW4sIEpTT04uc3RyaW5naWZ5KGNsaWVudCksIHtoZWFkZXJzIDogdGhpcy5oZWFkZXJzfSlcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7IHZhciBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhjb25zb2xlLmxvZyhlcnJvcikpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoRGF0YShzZWFyY2hTdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFN0cmluZyk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcgJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvc2VhcmNoJyArIHRva2VuLCBKU09OLnN0cmluZ2lmeShzZWFyY2hTdHJpbmcpLCB7aGVhZGVycyA6IHRoaXMuaGVhZGVyc30pXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHsgdmFyIGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhKU09OLnBhcnNlKGVycm9yLl9ib2R5KSkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
