import {Component, inject} from '@angular/core';
import {AsyncPipe, NgClass} from "@angular/common";
import {ScreenService} from "../../services/screen.service";
import {CounterComponent} from "../../components/counter/counter.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'jober24-locations',
  standalone: true,
  imports: [
    NgClass,
    CounterComponent,
    TranslateModule,
    AsyncPipe
  ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {
  private translateService: TranslateService = inject(TranslateService);
  countries1$ = this.translateService.stream('locations.countries1');
  countries2$ = this.translateService.stream('locations.countries1');
  public readonly screen: ScreenService = inject(ScreenService);
  public isMobile: boolean = this.screen.getInitialWidth().width <= 992;

  public svgDimensions = this.calculateSvgSize(this.screen.getInitialWidth().width)
  public divHeight = this.isMobile ? this.calculateDivHeight(this.screen.getInitialWidth().width) : null;

  constructor() {
    this.screen.onResize$.subscribe((dimensons) => {
      this.isMobile = dimensons.width <= 992;
      if (this.isMobile) {
        this.svgDimensions = this.calculateSvgSize(this.screen.getInitialWidth().width);
        this.divHeight = this.calculateDivHeight(this.screen.getInitialWidth().width);
      } else {
        this.divHeight = null
      }
    })
  }

  public calculateSvgSize(windowWidth: number): { width: number; height: number } {
    const referenceWindowWidth = 375;
    const referenceSvgWidth = 614;
    const defaultWidth = 1200;
    const defaultHeight = 525;

    const scaleFactor = referenceSvgWidth / referenceWindowWidth;
    const newWidth = Math.round(windowWidth * scaleFactor);
    const newHeight = Math.round((defaultHeight / defaultWidth) * newWidth);

    return {width: newWidth, height: newHeight};
  }

  calculateDivHeight(windowWidth: number): number {
    const referenceWidth = 375;
    const referenceHeight = 450;
    const scaleFactor = referenceHeight / referenceWidth;

    return Math.round(windowWidth * scaleFactor);
  }

}
