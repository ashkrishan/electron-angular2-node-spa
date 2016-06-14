import {Component, OnInit} from '@angular/core';

import {MessageComponent} from './message.component';
import {MessageService} from './message.service';
import  {MessageInputComponent} from './message-input.component';
import {Message} from './message';



@Component ({
    selector: 'message-list',
    template: `
       <div>            
            <my-message *ngFor="let message of messages" [message]="message" (messageChange)="message.content = $event"></my-message>'
       </div>
    `,
    directives: [MessageComponent, MessageInputComponent]
    // providers: [MessageService] 
})

export class MessageListComponent implements OnInit{
    messages: Message[] = [];
    
    constructor(private _messageService: MessageService) {       
        
    }
    
    ngOnInit() {
        this._messageService.getMessages()
            .subscribe(result => { 
                                  this.messages = result;
                                  this._messageService.messages = this.messages;
                                 }
                                  ,
                        error => console.log(error))
    }
    
}