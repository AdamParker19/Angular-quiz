import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private usersUrl = 'http://localhost:3000/api/Users';  // URL to web api
    constructor(
        private http: HttpClient
    ) { }

    getUsers(): Observable<any> {
        return this.http.get(this.usersUrl)

    }


}
