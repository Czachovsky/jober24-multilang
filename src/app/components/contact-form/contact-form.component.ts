import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../input/input.component";
import {JsonPipe} from "@angular/common";
import {ButtonComponent} from "../button/button.component";
import {HttpClient} from "@angular/common/http";
import {ToastService} from "../toast/toast.service";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'jober24-contact-form',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        InputComponent,
        JsonPipe,
        ButtonComponent,
        TranslateModule
    ],
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
    recruitmentForm: FormGroup;
    private readonly http: HttpClient = inject(HttpClient);
    public toastService: ToastService = inject(ToastService);
    private readonly translate: TranslateService = inject(TranslateService);

    constructor(private fb: FormBuilder) {
        this.recruitmentForm = this.fb.group({
            employeesCount: [20, [Validators.required, Validators.min(20), Validators.max(500)]],
            fullName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            nip: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
            companyName: null,
            message: ['', Validators.required],
            consents: [true, Validators.required],
        });
    }

    submitForm(): void {
        if (this.recruitmentForm.invalid) {
            this.recruitmentForm.markAllAsTouched();
        } else {
            this.http.post('https://jober24-api.mr-creations.pl/contact.php', this.recruitmentForm.getRawValue()).subscribe({
                next: (next: any) => {
                    let successMsg = this.translate.instant('messages.success');
                    this.toastService.show(successMsg, 'success');
                },
                error: () => {
                    let errorMsg = this.translate.instant('messages.error');
                    this.toastService.show(errorMsg, 'error');
                }
            })
        }
    }
}

