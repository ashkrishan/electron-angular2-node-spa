import {Component} from '@angular/core';
//import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'clients-list.template.html',
    //directives: [ROUTER_DIRECTIVES]

})

export class ClientsListComponent {
    clients = [{
        clientID: 'AL100',
        firstName: 'RocketMan',
        lastName: 'Silver'
    }, {
        clientID: 'AL134',
        firstName: 'lallana',
        lastName: 'Fred'
    }, {
        clientID: 'AL132',
        firstName: 'Messi',
        lastName: 'Ronaldo'
    }
];
    

}