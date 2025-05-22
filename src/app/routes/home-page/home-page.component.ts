import {Component, inject, OnInit} from '@angular/core';
import {BenefitsComponent} from "../../_sections/benefits/benefits.component";
import {FeaturesComponent} from "../../_sections/features/features.component";
import {HeroComponent} from "../../_sections/hero/hero.component";
import {LocationsComponent} from "../../_sections/locations/locations.component";
import {ServicesComponent} from "../../_sections/services/services.component";
import {TestimonialsComponent} from "../../_sections/testimonials/testimonials.component";
import {TimelineComponent} from "../../_sections/timeline/timeline.component";
import {WhyUsComponent} from "../../_sections/why-us/why-us.component";
import * as AOS from "aos";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'jober24-home-page',
  standalone: true,
  imports: [
    BenefitsComponent,
    FeaturesComponent,
    HeroComponent,
    LocationsComponent,
    ServicesComponent,
    TestimonialsComponent,
    TimelineComponent,
    WhyUsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private router: Router = inject(Router);

  ngOnInit(): void {
    AOS.init();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.init();
        }, 100)
      }
    });
  }
}
