import {Component, inject} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'jober24-terms-conditions',
  standalone: true,
  imports: [
    TranslateModule,
    AsyncPipe
  ],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent {
  private translateService: TranslateService = inject(TranslateService);
  employersList$ = this.translateService.stream('termsConditions.employers.items');
  exclusionsLimitationsList$ = this.translateService.stream('termsConditions.exclusionsLimitations.items');
}
