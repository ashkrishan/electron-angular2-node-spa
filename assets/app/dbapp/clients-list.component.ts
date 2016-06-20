import {Component, OnInit} from '@angular/core';

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
    clients = [];
    constructor(private _clientDataService: ClientDataService) {

    }    

    ngOnInit(){
        this._clientDataService.getData()
            .subscribe(response =>  this.clients = response
                                    ,error => console.log(error)
                                   

            );
    }

}