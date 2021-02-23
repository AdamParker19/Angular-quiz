import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { TokenStorageService } from '../../services/token-storage';

@Component({
    selector: 'app-form-modal',
    templateUrl: './Login.component.html',
    styleUrls: ['./Login.component.scss']
})

export class LoginComponent {
    @Input() id: number;
    form: any = {
        email: null,
        password: null
    };
    isSuccessful = false;
    isLoginFailed = false;
    isLoggedIn = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        public activeModal: NgbActiveModal
    ) {
        this.createForm();
    }

    private createForm() {
        this.form = this.formBuilder.group({
            email: '',
            password: '',
        });
    }

    closeModal() {
        this.activeModal.close('Modal Closed');
    }

    onSubmit(): void {
        const { email, password } = this.form;
        this.authService.login(email, password).subscribe(
            data => {
                console.log(data);
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUser(email);
                this.isSuccessful = true;
                this.isLoginFailed = false;

                setTimeout(() => {
                    this.closeModal();
                    window.location.reload();
                }, 500)

            },
            err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
                setTimeout(() => {
                    this.closeModal();
                }, 500)
            }
        );
    }



}
