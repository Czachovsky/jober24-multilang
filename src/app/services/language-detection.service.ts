import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageDetectionService {

    private readonly supportedLanguages = ['pl', 'en', 'de'];

    private readonly defaultLanguage = 'en';

    detectBrowserLanguage(): string {
        let browserLang = navigator.language || (navigator as any).userLanguage;

        if (browserLang) {
            browserLang = browserLang.split('-')[0].toLowerCase();
        }

        if (this.supportedLanguages.includes(browserLang)) {
            return browserLang;
        }
        return this.defaultLanguage;
    }

    getPreferredLanguage(): string {
        const savedLanguage = localStorage.getItem('preferred-language');

        if (savedLanguage && this.supportedLanguages.includes(savedLanguage)) {
            return savedLanguage;
        }

        const detectedLanguage = this.detectBrowserLanguage();

        this.saveLanguagePreference(detectedLanguage);

        return detectedLanguage;
    }

    saveLanguagePreference(language: string): void {
        if (this.supportedLanguages.includes(language)) {
            localStorage.setItem('preferred-language', language);
        }
    }

    isSupportedLanguage(language: string): boolean {
        return this.supportedLanguages.includes(language);
    }

    getSupportedLanguages(): string[] {
        return [...this.supportedLanguages];
    }
}
