import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {ServicesObject, ServicesTypes} from "./services.types";
import {NgClass, NgStyle} from "@angular/common";
import {SanitizePipe} from "../../pipes/sanitize.pipe";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'jober24-services',
  standalone: true,
    imports: [
        NgClass,
        SanitizePipe,
        NgStyle,
        TranslateModule
    ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {
  public services: ServicesTypes[] = ServicesObject;
  @ViewChildren('questionAnswer') questionAnswers!: QueryList<ElementRef>;



  ngAfterViewInit() {
   setTimeout(() => {
     this.updateContentHeights();
   }, 1000)
  }

  updateContentHeights() {
    this.questionAnswers.toArray().forEach((answer, index) => {
      const height = answer.nativeElement.scrollHeight;
      this.services[index].contentHeight = height;
    });
  }

  changeExpandState(index: number, target: EventTarget | null) {
    this.services.forEach((e, i) => {
      if (i !== index) {
        e.isExpanded = false;
      }
    });
    this.services[index].isExpanded = !this.services[index].isExpanded;
    // Ponownie obliczamy wysokości po animacji
    setTimeout(() => this.updateContentHeights(), 300); // Po animacji (lub chwilowym opóźnieniu)
  }

  // changeExpandState(index: number, target: any): void {
  //   this.services.forEach((e, i) => {
  //     if (i !== index) {
  //       e.isExpanded = false;
  //     }
  //   });
  //   this.services[index].isExpanded = !this.services[index].isExpanded;
  // }
}
