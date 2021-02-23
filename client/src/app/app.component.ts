import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './services/user-service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/Login/LoginComponent';
import { RegisterComponent } from './components/Register/RegisterComponent';
import { TokenStorageService } from './services/token-storage'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.scss"]
})

export class AppComponent implements OnInit {
  title = 'app';

  modalOptions: NgbModalOptions;


  isLoggedIn = false;

  constructor(private userService: UserService,
    private modalService: NgbModal, private tokenStorageService: TokenStorageService) {

  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

  }



  openLogin() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.id = 10; // should be the id

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openRegister() {
    const modalRef = this.modalService.open(RegisterComponent);
    modalRef.componentInstance.id = 11; // should be the id

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }


  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


}
