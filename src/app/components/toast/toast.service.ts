import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts = signal<{ message: string; type: 'success' | 'error' | 'info'; id: number }[]>([]);
  private idCounter = 0;

  show(message: string, type: 'success' | 'error' | 'info' = 'info', duration = 3000) {
    const id = this.idCounter++;
    this.toasts.update((t) => [...t, {message, type, id}]);
    setTimeout(() => this.dismiss(id), duration);
  }

  dismiss(id: number) {
    this.toasts.update((t) => t.filter((toast) => toast.id !== id));
  }
}

