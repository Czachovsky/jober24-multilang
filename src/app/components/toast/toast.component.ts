import { Component } from '@angular/core';
import {ToastService} from "./toast.service";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'j-toast',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  template: `
    <div class="toast-container">
      <div *ngFor="let toast of toastService.toasts()" class="toast" [ngClass]="toast.type">
        {{ toast.message }}
      </div>
    </div>
  `,
  styles: [
    `
    .toast-container {
      position: fixed;
      top: 10px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 999;
    }
    .toast {
      padding: 16px;
      border-radius: 5px;
      color: white;
      font-weight: bold;
    }
    .success { background: green; }
    .error { background: red; }
    .info { background: blue; }
    @keyframes fadeInOut {
      0% { opacity: 0;  }
      10% { opacity: 1;  }
      90% { opacity: 1; }
      100% { opacity: 0;  }
    }
    `
  ]
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
