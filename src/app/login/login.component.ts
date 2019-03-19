import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        if (localStorage.getItem('loggedIn').localeCompare('true') === 0 && localStorage.getItem('user') !== null) {
            this.router.navigate(['chat']);
        }
    }

}
