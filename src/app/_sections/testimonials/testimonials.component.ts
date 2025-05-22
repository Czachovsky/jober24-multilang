import {Component, inject} from '@angular/core';
import {testimonials, TestimonialsTypes} from "./testimonials.types";
import {ButtonComponent} from "../../components/button/button.component";
import {CarouselModule, OwlOptions} from "ngx-owl-carousel-o";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'jober24-testimonials',
  standalone: true,
  imports: [
    ButtonComponent,
    CarouselModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  private readonly utils: UtilsService = inject(UtilsService);

  public readonly testimonialsObject: TestimonialsTypes[] = testimonials;
  public readonly customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    center: true,
    margin: 24,
    items: 3,
    responsive: {
      0: {items: 1},
      992: {items: 3},
    }
  }

  public goToSection(): void {
    this.utils.scrollToElm(document.getElementById('form')!);
  }
}
