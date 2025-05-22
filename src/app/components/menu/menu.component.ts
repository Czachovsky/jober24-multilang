import {Component, inject} from '@angular/core';
import {MenuElements, MenuTypes} from "./menu.types";
import {NgClass, NgIf} from "@angular/common";
import {UtilsService} from "../../services/utils.service";
import {ScreenService} from "../../services/screen.service";
import {Router} from "@angular/router";

@Component({
  selector: 'jober24-menu',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private readonly utils: UtilsService = inject(UtilsService);
  public showMobileMenuActive: boolean = false;
  public showMobileMenuState: boolean = false;
  public readonly menuElements: MenuTypes[] = MenuElements;
  public readonly screen: ScreenService = inject(ScreenService);
  public isMobile: boolean = this.screen.getInitialWidth().width <= 992;
  private readonly router: Router = inject(Router);

  constructor() {
    this.screen.onResize$.subscribe((dimensons) => {
      this.isMobile = dimensons.width <= 992;
    })
  }

  public goTo(href: string): void {
    const currentUrl = this.router.url;

    if (currentUrl !== '/') {
      this.router.navigate(['/']).then(() => {
        this.scrollToElement(href);

        if (this.isMobile) {
          this.closeMobileMenu();
        }
      });
    } else {
      this.scrollToElement(href);
      if (this.isMobile) {
        this.closeMobileMenu();
      }
    }
  }

  private scrollToElement(href: string): void {
    setTimeout(() => {
      const element = document.getElementById(href);
      if (element) {
        this.utils.scrollToElm(element);
      }
    }, 0);
  }

  private closeMobileMenu(): void {
    this.showMobileMenuActive = false;
    setTimeout(() => {
      this.showMobileMenuState = false;
    }, 300);
  }


  public hideMobileMenu(e: { target: { classList: { contains: (arg0: string) => any; }; }; }): void {
    if (!e.target.classList.contains('hamburgerBox') && !e.target.classList.contains('hamburgerInner')) {
      this.showMobileMenuState = false;
      setTimeout(() => {
        this.showMobileMenuActive = false;
      }, 300);
    }
  }

  public showMobileMenu(): void {
    if (!this.showMobileMenuActive) {
      this.showMobileMenuActive = true;
      setTimeout(() => {
        this.showMobileMenuState = true;
      }, 300);
    } else {
      this.showMobileMenuActive = false;
      setTimeout(() => {
        this.showMobileMenuState = false;
      }, 300);
    }

  }
}
