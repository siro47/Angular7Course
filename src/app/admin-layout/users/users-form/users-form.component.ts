import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../users.service";

@Component({
    selector: 'app-users-form',
    templateUrl: './users-form.component.html',
    styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

    public myForm: FormGroup;

    constructor(
        private usersService: UsersService
    ) { }

    ngOnInit() {
        this.myForm = new FormGroup({
            name: new FormControl('', [<any>Validators.required]),
            desc: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
        });
    }

    save(value) {
        this.usersService.addNewUser(value)
    }

}
