import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {Observable} from 'rxjs/Observable';
//import 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
// import 'rxjs/add/operator/mergeAll';

import {UserAuthService} from '../auth/auth.service';



import {ClientDataService} from './client-data.service';

@Component({
    moduleId: module.id,
    templateUrl: 'clients-list.template.html',
    styles: [`
            .searchbox {
                width: 50%;
                margin: auto 0 ;
                padding-bottom: 20px;
            }
            `]
})

export class ClientsListComponent implements OnInit {
    clients: Observable<any>;
    searchForm: ControlGroup;
    isToken: boolean = false;

    constructor(private _clientDataService: ClientDataService, private _fb: FormBuilder, private _router: Router, private _authService: UserAuthService) {
        this.isToken = true;

    }

    ngOnInit() {
        this.searchForm = this._fb.group({
            searchbox: []
        });

        this.searchForm.controls.searchbox.valueChanges
            .filter(text => text.length > 2)
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(data => this._clientDataService.searchData(this.searchForm.value)
                .subscribe(response => {
                this.clients = response
                    console.log(response);

                }
                , error => {
                    console.log(error);
                    if (error.error.name == 'TokenExpiredError') {
                        alert("Your session has expired. Please re-login!");
                        this._authService.logoutUser();
                        this._router.navigateByUrl('/auth/signin');
                        location.reload();
                    } else {
                        console.log(error);
                    }
                })
            )

    }


    onEditClient(clientId) {
        console.log(clientId);
        this._router.navigate(['/clients/' + clientId])

    }

    onDownload() {
        //var downloadWindow = window;
        var reader = new FileReader();
        this._clientDataService.downloadClientData()
            .subscribe(data => { 
                //downloadWindow = window.open(window.URL.createObjectURL(data));
                reader.readAsDataURL(data);

                }
                ,
            error => console.log("Error downloading file"),
            () => { console.log('File download completed')
                    //downloadWindow.close();
                  }

            )
   // var test;   
    reader.onloadend = function (e) {
        var downloadWindow = window.open(reader.result, 'csv' );
        setTimeout(() => downloadWindow.close(), 20000);
        return false;
    

  }
    }


    //.subscribe(response => console.log(response));


    // this._clientDataService.getData()            
    //     .subscribe(response =>  { this.clients = response 
    //                               console.log(response);
    //                             }
    //                             ,error => console.log(error)


    // );


    // onSearch() {
    //    this.clients$ = this.searchForm.controls.searchbox.valueChanges
    //                     .subscribe(response => console.log(response));

    // var search = this.searchForm.find('searchbox');
    // let searchStream = search.valueChanges
    //     .filter(text => text.length > 2)
    //     .debounceTime(500)
    //     .distinctUntilChanged()

    // searchStream.subscribe(data => this._clientDataService.getData()            
    //                         .subscribe(response =>  { this.clients = response 
    //                               console.log(response);
    //                             }
    //                             ,error => console.log(error))
    //     );

    // searchStream.


    // console.log(search);
    // this._clientDataService.searchData(search)
    //     .subscribe(response => console.log(response),
    //                 error => console.log(error))
}

