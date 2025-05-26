import {Component, inject} from '@angular/core';
import {WhyUsObject, WhyUsTypes} from "./why-us.types";
import {SanitizePipe} from "../../pipes/sanitize.pipe";
import {ButtonComponent} from "../../components/button/button.component";
import {UtilsService} from "../../services/utils.service";
import {NgClass} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'jober24-why-us',
  standalone: true,
    imports: [
        SanitizePipe,
        ButtonComponent,
        NgClass,
        TranslateModule
    ],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {
  private readonly utils: UtilsService = inject(UtilsService);

  public readonly whyUsObject: WhyUsTypes[] = WhyUsObject;

  public goToSection(): void {
    this.utils.scrollToElm(document.getElementById('form')!);
  }
}
