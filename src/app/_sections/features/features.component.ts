import {Component, inject} from '@angular/core';
import {ScreenService} from "../../services/screen.service";
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {features, FeaturesTypes} from "./features.types";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'jober24-features',
  standalone: true,
  imports: [
    CarouselModule,
    TranslateModule
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  public readonly features: FeaturesTypes[] = features;
  public readonly screen: ScreenService = inject(ScreenService);
  public isMobile: boolean = this.screen.getInitialWidth().width <= 992;
  public readonly customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    items: 1,
  }

  constructor() {
    this.screen.onResize$.subscribe((dimensons) => {
      this.isMobile = dimensons.width <= 992;
    })
  }
}
