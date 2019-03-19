import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DataService} from '../services/data.service';
import {Group} from '../entities/group';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver, public dataService: DataService) {
    }

    newGroup: string;

    switchGroup(group: Group) {
        this.dataService.activeGroup = group;
       // localStorage.setItem('currentGroup', JSON.stringify(group));
    }

    registerGroup() {
        this.dataService.websocket.send('{"typ": "register","group": "' + this.newGroup + '"}');
        const tmpGroup = new Group(this.newGroup, this.newGroup);
        this.dataService.activeGroup = tmpGroup;
        this.dataService.groups.push(tmpGroup);
     //   localStorage.setItem('currentGroup', JSON.stringify(new Group(this.newGroup, this.newGroup)));
        this.newGroup = '';
    }
}
