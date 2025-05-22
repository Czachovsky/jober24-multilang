import {Routes} from '@angular/router';
import {PrivacyPolicyComponent} from "./routes/privacy-policy/privacy-policy.component";
import {HomePageComponent} from "./routes/home-page/home-page.component";
import {TermsConditionsComponent} from "./routes/terms-conditions/terms-conditions.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsConditionsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
