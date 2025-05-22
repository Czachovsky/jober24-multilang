import {AfterViewInit, Component} from '@angular/core';
import {benefitsObject, BenefitsTypes} from "./benefits.types";
import {SanitizePipe} from "../../pipes/sanitize.pipe";

@Component({
  selector: 'jober24-benefits',
  standalone: true,
  imports: [
    SanitizePipe
  ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent implements AfterViewInit {
  public benefits: BenefitsTypes[] = benefitsObject;

  ngAfterViewInit() {
    const video: HTMLVideoElement | null = document.querySelector('video');

    if (video) {
      video.muted = true;

      video.play().then(r => {});
    }
  }
}
