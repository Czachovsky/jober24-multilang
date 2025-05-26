import {Component, inject} from '@angular/core';
import {ButtonComponent} from "../../components/button/button.component";
import {UtilsService} from "../../services/utils.service";
import {ScreenService} from "../../services/screen.service";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'jober24-hero',
  standalone: true,
    imports: [
        ButtonComponent,
        TranslateModule
    ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private readonly utils: UtilsService = inject(UtilsService);
  public readonly screen: ScreenService = inject(ScreenService);
  public isMobile: boolean = this.screen.getInitialWidth().width <= 992;

  constructor() {
    this.screen.onResize$.subscribe((dimensons) => {
      this.isMobile = dimensons.width <= 992;
    })
  }

  public goToSection(): void {
    this.utils.scrollToElm(document.getElementById('history')!);
  }

}
