import {Component, inject} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'jober24-privacy-policy',
  standalone: true,
  imports: [
    TranslateModule,
    AsyncPipe
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  private translateService: TranslateService = inject(TranslateService);
  dataUsagePurposes$ = this.translateService.stream('privacyPolicy.dataUsage.purposes');
  dataSharingServices$ = this.translateService.stream('privacyPolicy.dataSharing.services');
  cookieTypes$ = this.translateService.stream('privacyPolicy.cookies.cookieTypes.items');
  analyticalTools$ = this.translateService.stream('privacyPolicy.cookies.analyticalTools.tools');
  dataSubjectRights$ = this.translateService.stream('privacyPolicy.dataSubjectRights.rights');
}
