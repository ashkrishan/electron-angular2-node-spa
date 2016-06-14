import {Component} from '@angular/core';

import {MessageListComponent} from './message-list.component';
import {MessageInputComponent} from './message-input.component';

@Component({
    template: `
    <div>
        <my-message-input></my-message-input>
    </div>    
    <div>
        <message-list></message-list> 
    </div>
    `,     
     directives: [MessageListComponent,MessageInputComponent]
})

export class MessagesComponent {

}