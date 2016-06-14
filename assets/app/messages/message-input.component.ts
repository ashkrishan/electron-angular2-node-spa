import {Component, OnInit} from '@angular/core';
//import {Observable} from 'rxjs/Observable';

import {Message} from './message';
import {MessageService} from './message.service';



@Component ({
    selector: 'my-message-input',
    template: `
   <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
        <div class="form-group">
            <input ngControl="content" type="text" class="form-control" #inputVar [value]="message?.content">
        </div>
        <button type="submit" class="btn btn-primary">{{ !message ? 'Sent message' : 'Edit message'}}</button>

        <button type="button" class="btn btn-danger" *ngIf="message" (click)="onCancel()">Cancel</button>   
   </form>
    `,
    // providers: [MessageService]
}) 

export class MessageInputComponent implements OnInit{   
    message: Message = null;
    constructor (private _messageService: MessageService) {
        
    }

    onSubmit(form:any) {
        if (this.message) {
            this.message.content = form.content;
            
            this._messageService.updateMessage(this.message)
                .subscribe(response => {
                                        console.log(response);
                                       }, 
                                       error => console.log(error)  
                )

            this.message = null;


        } else {
        const message: Message = new Message(form.content, null, 'Amax');
        this._messageService.addMessage(message)
            .subscribe(response => this._messageService.messages.push(response),
                        error => console.log(error))

        }

        
    }

    onCancel() {
        this.message = null;
    }


    ngOnInit() {
        this._messageService.messageIsEdited.subscribe(
            message => {
                this.message = message;
            }
        )
    }

}