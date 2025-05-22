import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'j-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements AfterViewInit {
  @Input() value = 0;
  @Input() duration = 1500;
  @Input() label = '';
  @Input() suffix = '+';
  @ViewChild('counterElement') counterElement!: ElementRef;
  displayedValue = 0;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.startCounting();
        observer.disconnect();
      }
    }, {threshold: 0.5});

    observer.observe(this.counterElement.nativeElement);
  }

  startCounting() {
    const startTime = performance.now();
    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / this.duration, 1);
      this.displayedValue = Math.floor(progress * this.value);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
    this.counterElement.nativeElement.style.opacity = '1';
  }

  formatNumber(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}
