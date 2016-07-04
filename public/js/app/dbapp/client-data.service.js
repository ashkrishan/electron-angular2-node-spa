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
    //token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : ' ';
    function ClientDataService(_http) {
        this._http = _http;
        this._url = "http://127.0.0.1:3000/client";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
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
    ClientDataService.prototype.getClient = function (clientId) {
        var token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : ' ';
        return this._http.get(this._url + '/' + clientId + token)
            .map(function (response) {
            var data = response.json().obj;
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(console.log(error)); });
    };
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
        var token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : ' ';
        return this._http.post(this._url + '/search' + token, JSON.stringify(searchString), { headers: this.headers })
            .map(function (response) {
            var data = response.json().obj;
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(JSON.parse(error._body)); });
    };
    ClientDataService.prototype.updateClient = function (clientId, client) {
        var token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : ' ';
        return this._http.patch(this._url + '/' + clientId + token, JSON.stringify(client), { headers: this.headers })
            .map(function (response) {
            var data = response.json().obj;
            //var message = response.json().message; 
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(JSON.parse(error._body)); });
    };
    ClientDataService.prototype.downloadClientData = function () {
        var token = sessionStorage.getItem('token') ? '?token=' + sessionStorage.getItem('token') : ' ';
        var header = new http_1.Headers();
        header.append('responseType', 'arraybuffer');
        return this._http.get(this._url + '/download-clients' + token)
            .map(function (response) { return new Blob([response._body], { type: 'text/csv;charset=utf-8;' }); })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    ClientDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientDataService);
    return ClientDataService;
}());
exports.ClientDataService = ClientDataService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiYXBwL2NsaWVudC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFDM0MsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyxRQUFPLDJCQUEyQixDQUFDLENBQUE7QUFHbkM7SUFJSSw4RkFBOEY7SUFFOUYsMkJBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBSnZCLFNBQUksR0FBRyw4QkFBOEIsQ0FBQztRQUM5QyxZQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO0lBSzVELENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0ksSUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbEcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2FBQ25DLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFBTSxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFFO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQ2pCO2FBQ0EsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUV4RCxDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLFFBQVE7UUFDVixJQUFN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O0FBQUQsQ0E1RUEsQUE0RUMsSUFBQTtBQTVFWSx5QkFBaUIsb0JBNEU3QixDQUFBIiwiZmlsZSI6ImRiYXBwL2NsaWVudC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDbGllbnREYXRhU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfdXJsID0gXCJodHRwOi8vMTI3LjAuMC4xOjMwMDAvY2xpZW50XCI7XHJcbiAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIC8vdG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcgJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnICc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybCArIHRva2VuKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHsgdmFyIGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xpZW50KGNsaWVudElkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnICc7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwgKyAnLycgKyBjbGllbnRJZCArIHRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4geyB2YXIgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGNvbnNvbGUubG9nKGVycm9yKSkpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNyZWF0ZUNsaWVudChjbGllbnQpIHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogJyAnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsICsgdG9rZW4sIEpTT04uc3RyaW5naWZ5KGNsaWVudCksIHtoZWFkZXJzIDogdGhpcy5oZWFkZXJzfSlcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7IHZhciBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhjb25zb2xlLmxvZyhlcnJvcikpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoRGF0YShzZWFyY2hTdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA/ICc/dG9rZW49JyArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnICc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyAnL3NlYXJjaCcgKyB0b2tlbiwgSlNPTi5zdHJpbmdpZnkoc2VhcmNoU3RyaW5nKSwge2hlYWRlcnMgOiB0aGlzLmhlYWRlcnN9KVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7IHZhciBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iaiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coSlNPTi5wYXJzZShlcnJvci5fYm9keSkpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDbGllbnQoY2xpZW50SWQsIGNsaWVudCl7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcgJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wYXRjaCh0aGlzLl91cmwgKyAnLycgKyBjbGllbnRJZCArIHRva2VuLCBKU09OLnN0cmluZ2lmeShjbGllbnQpLCB7aGVhZGVyczogdGhpcy5oZWFkZXJzfSlcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4geyB2YXIgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmogO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyIG1lc3NhZ2UgPSByZXNwb25zZS5qc29uKCkubWVzc2FnZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KEpTT04ucGFyc2UoZXJyb3IuX2JvZHkpKSk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkb3dubG9hZENsaWVudERhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcgJztcclxuICAgICAgICB2YXIgaGVhZGVyID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kKCdyZXNwb25zZVR5cGUnLCAnYXJyYXlidWZmZXInKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsICsgJy9kb3dubG9hZC1jbGllbnRzJyArIHRva2VuKVxyXG4gICAgICAgICAgICAvLy5tYXAocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IG5ldyBCbG9iKFtyZXNwb25zZS5fYm9keV0sIHt0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
