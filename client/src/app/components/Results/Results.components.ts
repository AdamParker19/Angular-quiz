import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user-service';
import { empty } from 'rxjs';

@Component({
    selector: 'results-page',
    templateUrl: './Results.components.html',
    styleUrls: ['./Results.components.scss']
})

export class ResultsComponent implements OnInit {
    isUsers = false;
    users: User[];
    constructor(private userService: UserService) {

    }
    ngOnInit(): void {
        this.getUsers();
    }
    getUsers() {
        return this.userService.getUsers()
            .subscribe(
                users => {
                    this.users = users;
                    if (this.users.length === 0) {
                        this.isUsers = false;
                    }
                    else {
                        this.isUsers = true;
                    }
                },
                err => {
                    this.isUsers = false;
                }
            );
    }
}