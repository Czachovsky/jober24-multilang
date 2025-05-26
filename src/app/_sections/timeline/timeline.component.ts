import {Component, inject, ViewChild} from '@angular/core';
import {timelineObject, TimelineTypes} from "./timeline.types";
import {CarouselComponent, CarouselModule, OwlOptions, SlidesOutputData} from "ngx-owl-carousel-o";
import {NgClass} from "@angular/common";
import {ScreenService} from "../../services/screen.service";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'jober24-timeline',
  standalone: true,
    imports: [
        CarouselModule,
        NgClass,
        TranslateModule
    ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @ViewChild('carousel') carousel!: CarouselComponent;
  public mobilePosition = 0;
  public mobileStep = 93;
  public readonly customOptions: OwlOptions = {
    loop: true,
    center: true,
    items: 1,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    navText: ['<i class="pi pi-chevron-left"></i>', '<i class="pi pi-chevron-right"></i>']
  }
  public readonly screen: ScreenService = inject(ScreenService);
  public timelineData: TimelineTypes[] = this.adjustSlideIds(this.screen.getInitialWidth().width, timelineObject);
  public windowWidth: number = this.screen.getInitialWidth().width;
  public isMobile: boolean = this.screen.getInitialWidth().width <= 992;

  constructor() {
    this.screen.onResize$.subscribe((dimensons) => {
      this.timelineData = this.adjustSlideIds(dimensons.width, this.timelineData);
      this.windowWidth = dimensons.width;
      this.isMobile = dimensons.width <= 992;
    })
  }

  adjustSlideIds(width: number, slides: TimelineTypes[]): TimelineTypes[] {
    if (width > 992) {
      return slides;
    }

    return slides.map((slide, index) => {
      return {
        ...slide,
        id: `owl-slide-${index + 3}`
      };
    });
  }

  onSlideChange(event: SlidesOutputData) {
    if (this.isMobile) {
      this.moveTimeline(event.startPosition!);
    }

    this.timelineData.forEach((item: TimelineTypes, index: number) => {
      item.activeState = item.id === event.slides![0].id;
    });
  }

  selectYear(id: string): void {
    this.carousel.to(id);
  }

  private moveTimeline(sliderPosition: number): void {
    const maxOffset = 955 - this.windowWidth;
    this.mobilePosition = Math.max(this.mobileStep * -sliderPosition, -maxOffset);
  }
}
