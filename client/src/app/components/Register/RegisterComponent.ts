import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
    selector: 'app-form-modal',
    templateUrl: './Register.component.html',
    styleUrls: ['./Register.component.scss']
})

export class RegisterComponent {
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

    onSubmit(): void {
        const { email, password } = this.form;
        this.authService.register(email, password).subscribe(
            data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
            },
            err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }

        );

        setTimeout(() => {
            this.closeModal();

        }, 1000)
    }


    closeModal() {
        this.activeModal.close('Modal Closed');
    }
}
