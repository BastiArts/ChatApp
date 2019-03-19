import {Injectable} from '@angular/core';
import {Group} from '../entities/group';
import {User} from '../entities/user';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    activeGroup: Group = null;
    groups: Array<Group> = [
        new Group('Bunkersquad', 'Bunkersquad', [new User('Basti')]),
        new Group('4AHITM', '4AHITM', [new User('Basti')])
    ];
    remoteURL = 'ws://localhost:8025/websockets/chat';
    websocket: WebSocket = new WebSocket(this.remoteURL);
    constructor() {
    }
}
