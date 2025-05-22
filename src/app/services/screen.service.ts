import {Injectable, EventEmitter, OnDestroy} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenService implements OnDestroy {

  public onResize$ = new EventEmitter<{ width: number; height: number; }>();
  private onResizeHandler = () => {
    this.onResize$.emit({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  constructor() {
    window.addEventListener('resize', this.onResizeHandler);
    this.getScreenSize();
  }

  getScreenSize() {
    this.onResize$.emit({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResizeHandler);
  }

  getInitialWidth(): { width: number, height: number } {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
}
