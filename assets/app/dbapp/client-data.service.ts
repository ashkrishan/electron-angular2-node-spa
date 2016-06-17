import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ClientDataService {

    private _url = "http://127.0.0.1:3000/fakeData.json";
    header = new Headers({'Content-Type': 'application/json'});

    constructor(private _http: Http) {

    }
        
    // getData() {
    //     return this._http.get(this._url)
    //         .map(response => response.json() )
    //         .catch(error => Observable.throw(error.json()));

    // }
}