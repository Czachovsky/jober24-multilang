import { Component } from '@angular/core';
import {MenuComponent} from "../../components/menu/menu.component";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {
  Jober24LanguageSwitcherComponent
} from "../../components/jober24-language-switcher/jober24-language-switcher.component";

@Component({
  selector: 'jober24-header',
  standalone: true,
  imports: [MenuComponent, NgOptimizedImage, RouterLink, Jober24LanguageSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
