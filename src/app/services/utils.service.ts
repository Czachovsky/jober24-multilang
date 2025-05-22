import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {
  }

  public scrollToElm(element: HTMLElement, offset = -50): void {
    const scrollHigh: number = element?.getBoundingClientRect().top + window.pageYOffset + offset;
    setTimeout(() => {
      window.scrollTo({top: scrollHigh, behavior: 'smooth'});
    }, 0);
  }

  public scrollTop(top?: number): void {
    setTimeout(() => {
      window.scrollTo({top: top ? top : 0, behavior: 'smooth'});
    }, 0);
  }
}
