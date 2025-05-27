import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";

interface Language {
    code: string;
    name: string;
}

@Component({
    selector: 'jober24-jober24-language-switcher',
    standalone: true,
    imports: [],
    templateUrl: './jober24-language-switcher.component.html',
    styleUrl: './jober24-language-switcher.component.scss'
})
export class Jober24LanguageSwitcherComponent implements OnInit, OnDestroy {
    private translateService = inject(TranslateService);
    private subscription: Subscription = new Subscription();

    currentLang: string = '';
    isDropdownOpen: boolean = false;

    languages: Language[] = [
        {code:'pl', name: 'Polski'},
        {code: 'en', name: 'English'},
        {code: 'de', name: 'Deutsch'},
    ];

    ngOnInit(): void {
        this.initializeLanguage();

        this.subscription.add(
            this.translateService.onLangChange.subscribe((event) => {
                this.currentLang = event.lang;
            })
        );

        // Zamknij dropdown przy kliknięciu escape
        this.subscription.add(
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    this.closeDropdown();
                }
            })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private initializeLanguage(): void {
        // Pobierz język z localStorage jeśli istnieje
        const savedLang = localStorage.getItem('preferred-language');

        if (savedLang && this.isValidLanguage(savedLang)) {
            this.setLanguage(savedLang);
        } else {
            const browserLang = this.translateService.getBrowserLang();
            let langToUse = 'en'; // domyślnie angielski

            if (browserLang === 'de') {
                langToUse = 'de';
            }
            if(browserLang === 'pl') {
                langToUse = 'pl';
            }

            this.setLanguage(langToUse);
        }
    }

    private isValidLanguage(lang: string): boolean {
        return this.languages.some(language => language.code === lang);
    }

    private setLanguage(lang: string): void {
        this.translateService.use(lang);
        this.currentLang = lang;
        localStorage.setItem('preferred-language', lang);

        document.documentElement.lang = lang;
    }

    getCurrentLanguage(): Language {
        return this.languages.find(lang => lang.code === this.currentLang) || this.languages[1]; // fallback to English
    }

    toggleDropdown(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
    }

    closeDropdown(): void {
        this.isDropdownOpen = false;
    }

    selectLanguage(langCode: string): void {
        if (langCode !== this.currentLang) {
            this.setLanguage(langCode);
            this.showLanguageChangeEffect();
        }
        this.closeDropdown();
    }

    private showLanguageChangeEffect(): void {
        const element = document.querySelector('.jober24-language-switcher .current-language');
        if (element) {
            element.classList.add('language-changed');
            setTimeout(() => {
                element.classList.remove('language-changed');
            }, 300);
        }
    }
}

