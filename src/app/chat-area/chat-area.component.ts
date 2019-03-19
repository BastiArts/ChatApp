import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Message} from '../entities/message';

@Component({
    selector: 'chat-area',
    templateUrl: './chat-area.component.html',
    styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent implements OnInit {
    receivedMsg: string = '';
    sendText: string = '';
    username: string = '';
    register: string = '';
    unregister: string = '';

    ws: WebSocket;

    login() {

        this.ws.send('{"typ": "login","username": "Basti"}');
    }

    ngOnInit(): void {

        this.ws = this.dataService.websocket;

        this.ws.onopen = (event) => this.receivedMsg += 'Successfully connected.\n\n';
        // this.receivedMsg += this.dataService.activeGroup !== null ? 'Switched to Group: ' + this.dataService.activeGroup.groupname : '';

        this.ws.onmessage = (evt) => {
            // this.receivedMsg += 'Switched to Group: ' + this.dataService.activeGroup.groupname;
            // Parse the received String into my custom Message class
            const message: Message = JSON.parse(evt.data);

            if (message.group === this.dataService.activeGroup.groupname) {
                this.receivedMsg += message.sender + ' > ' + message.payload + '\n';
            }
        };
    }

    sendMessage() {
        //  if (this.username !== '') {
        //   this.ws.send('{"username": "' + this.username + '", "message": "' + this.sendText + '"}');
        // alert('Group: ' + this.dataService.activeGroup.groupname);
        this.ws.send('{"typ": "data","group": "' + this.dataService.activeGroup.groupname + '", "payload": "' + this.sendText + '"}');
        //  }
    }

    registerUser() {
        if (this.register !== '') {
            this.ws.send('{"username": "' + this.username + '", "register": "' + this.register + '"}');
            this.register = '';
        }
    }

    unregisterUser() {
        if (this.unregister !== '') {
            this.ws.send('{"username": "' + this.username + '", "unregister": "' + this.unregister + '"}');
            this.unregister = '';
        }
    }

    constructor(public dataService: DataService) {
    }

}
