import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users = [];
    searchForm = FormGroup

    constructor(
        private usersService: UsersService
    ) {
        this.searchForm = new FormGroup({
            search: new FormControl()
        })
    }

    ngOnInit() {
        this.users = this.usersService.getUsers();

        this.searchForm.valueChanges
            .subscribe(value => {
                this.users = this.usersService.getUsers(value.search);
            })
    }

    private removeUser(data) {
        this.usersService.removeUser(data)
    }
}
