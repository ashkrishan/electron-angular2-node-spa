
import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Message} from './message';

@Injectable()
export class MessageService {
            messages: Message[]  = [];
            messageIsEdited = new EventEmitter<Message>();

            messageUrl = 'http://localhost:3000/message';
            headers = new Headers({'Content-Type': 'application/json'});
            

            constructor(private _http: Http) { }


            getMessages() {
                return this._http.get(this.messageUrl)
                    .map(response => { 
                                            const data = response.json().obj;
                                            let objs: any[] = [];
                                            data.forEach(function(obj) {
                                                let message = new Message(obj.content, obj._id, obj.user.firstName, obj.user._id);
                                                objs.push(message);  
                                            });
                                            console.log(objs);
                                            return objs;
                                     });
            }
            
            addMessage(message : Message) {
                const token =  localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : ' ';
                return this._http.post(this.messageUrl + token, JSON.stringify(message), {headers: this.headers})
                    .map(response => {  const data = response.json().obj; 
                                         let message = new Message(data.content, data._id, data.user.firstName, data.user._id);
                                        return message;
                    
                  
                  })
                  .catch(error => Observable.throw(error.json()));

            }

            deleteMessage(message: Message) {
                const token =  localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : ' ';
                this.messages.splice(this.messages.indexOf(message), 1);
                return this._http.delete(this.messageUrl + '/' + message.messageId + token, { headers: this.headers })
                     .map(response => { const data = response.json().obj;
                                        var message = new Message(data.content, data._id, data.user.firstName, data.user._id)
                                      }
                     )
                     .catch(error => Observable.throw(error.json()));
                     
            }

            editMessage(message: Message) {
                this.messageIsEdited.emit(message);
           
                // });
             }

             updateMessage(message: Message) {
                const token =  localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : ' ';
                //this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'KDDJ');
                message = new Message (message.content, message.messageId, 'KDDJ', null);
                return this._http.patch(this.messageUrl + '/' + message.messageId + token, JSON.stringify(message), {headers: this.headers})
                    .map(response => {  const data = response.json().obj; 
                                         let message = new Message(data.content, data._id, data.user.firstName, data.user._id);
                                         return message;
                                    }
                    )
                    .catch(error => Observable.throw(error.json()));
             }
}