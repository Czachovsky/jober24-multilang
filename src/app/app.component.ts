import {Component, inject, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./_sections/header/header.component";

import {FooterComponent} from "./_sections/footer/footer.component";
import {ToastComponent} from "./components/toast/toast.component";
import {LanguageDetectionService} from "./services/language-detection.service";
import {TranslateService} from "@ngx-translate/core";


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, ToastComponent],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private router = inject(Router);
    private translateService = inject(TranslateService);
    private languageDetectionService = inject(LanguageDetectionService);

    constructor() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 100);
            }
        });
    }

    ngOnInit(): void {
        this.initializeLanguage();
    }

    private initializeLanguage(): void {
        const preferredLanguage = this.languageDetectionService.getPreferredLanguage();

        this.translateService.setDefaultLang(preferredLanguage);
        this.translateService.use(preferredLanguage);

        console.log(`Language initialized: ${preferredLanguage}`);
    }
}
