import {Component, ElementRef, forwardRef, Input, ViewChild} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR, ReactiveFormsModule,
  ValidationErrors
} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'j-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @ViewChild('jTooltip') tooltipRef?: ElementRef<HTMLDivElement>;
  @ViewChild('jSlider') sliderRef?: ElementRef<HTMLInputElement>;
  @Input() type: 'text' | 'email' | 'password' | 'textarea' | 'range' = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() control?: AbstractControl | null;
  @Input() inputId: string = '';
  @Input() min: number = 20;
  @Input() max: number = 500;
  @Input() step: number = 20;
  tooltipPosition: number = 0;
  isEditing: boolean = false;
  value: any;
  tooltipWidth: number = 0;

  onChange: (value: string) => void = () => {
  };
  onTouched: () => void = () => {
  };

  get formControl(): FormControl {
    return this.control as FormControl;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return control.valid ? null : {invalid: true};
  }

  getErrorMessage(): string {
    if (!this.control || !this.control.errors) return '';
    if (this.control.errors['required']) return 'To pole jest wymagane.';
    if (this.control.errors['email']) return 'Wprowadź poprawny adres e-mail.';
    if (this.control.errors['minlength']) {
      return `Minimalna długość to ${this.control.errors['minlength'].requiredLength} znaki.`;
    }
    return 'Nieprawidłowa wartość.';
  }

  enableEditing(): void {
    this.isEditing = true;
  }

  disableEditing(event: any): void {
    this.isEditing = false;
    this.value = (event.target as HTMLInputElement).valueAsNumber;
  }

  updateTooltip(event: Event): void {
    this.value = (event.target as HTMLInputElement).valueAsNumber;
    this.onChange(this.value);
    this.updateTooltipPosition();
  }

  updateTooltipPosition(): void {
    if (this.sliderRef?.nativeElement && this.tooltipRef?.nativeElement) {
      const slider = this.sliderRef.nativeElement;
      const tooltip = this.tooltipRef.nativeElement;

      const percent = (this.value - this.min) / (this.max - this.min);
      this.tooltipWidth = tooltip.offsetWidth;
      const thumbWidth = 20;
      this.tooltipPosition = percent * (slider.clientWidth - thumbWidth) - this.tooltipWidth / 2 + thumbWidth / 2;
    }
  }

  // updateTooltip(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   const min = Number(input.min);
  //   const max = Number(input.max);
  //   const percent = (this.control?.value - min) / (max - min);
  //   this.tooltipPosition = percent * input.clientWidth;
  // }
}
