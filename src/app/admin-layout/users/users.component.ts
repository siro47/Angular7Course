import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users = [];

    constructor(
        private usersService: UsersService
    ) { }

    ngOnInit() {
        this.users = this.usersService.getUsers();
    }

    public addNewUser() {
        this.usersService.addNewUser();
    }

    private removeUser(data) {
        this.usersService.removeUser(data)
    }
}
