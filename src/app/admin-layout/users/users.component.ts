import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs/internal/Observable";

import {debounce, map} from "rxjs/operators";
import {interval} from "rxjs/internal/observable/interval";

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
            search: new FormControl('')
        })
    }

    ngOnInit() {
        this.users = this.usersService.getUsers(null);

        const mapParam = map(value => value.search);
        const waitUntilStop = debounce(() => interval(700));

        this.searchForm.valueChanges
            .pipe(
                mapParam,
                waitUntilStop
            )
            .subscribe(value => {
                this.users = this.usersService.getUsers(value);
            })
    }

    private removeUser(data) {
        this.usersService.removeUser(data)
    }
}
