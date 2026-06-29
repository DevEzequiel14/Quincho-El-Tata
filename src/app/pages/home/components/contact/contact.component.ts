import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SocialComponent } from '../../../../shared/components/social/social.component';
import { CONTACT_CONFIG } from '../../../../core/constants/contact.config';
import { phoneValidator } from './contact-form.validators';

export type ContactSubmitStatus = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, SocialComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  directionTitle = 'Dirección';
  direction = 'C. Puerto Argentino 1789, Palpalá, Jujuy';
  phone = 'Teléfonos';
  phone1 = CONTACT_CONFIG.phones[0];
  phone2 = CONTACT_CONFIG.phones[1];

  submitStatus: ContactSubmitStatus = 'idle';

  readonly contactForm = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    telefono: ['', [Validators.required, phoneValidator()]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
    fecha: [''],
  });

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitStatus = 'loading';

    const message = this.buildInquiryMessage();
    const url = this.buildWhatsAppUrl(message);

    window.setTimeout(() => {
      const opened = window.open(url, '_blank', 'noopener,noreferrer');
      this.submitStatus = opened ? 'success' : 'error';
    }, 500);
  }

  isInvalid(controlName: 'nombre' | 'telefono' | 'mensaje'): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }

  getError(controlName: 'nombre' | 'telefono' | 'mensaje'): string | null {
    const control = this.contactForm.get(controlName);
    if (!control?.errors || !control.touched) {
      return null;
    }

    if (control.errors['required']) {
      return 'Este campo es obligatorio.';
    }
    if (control.errors['minlength']) {
      const required = control.errors['minlength'].requiredLength;
      return `Debe tener al menos ${required} caracteres.`;
    }
    if (control.errors['phone']) {
      return 'Ingresá un teléfono válido (8 a 20 dígitos).';
    }

    return 'Valor inválido.';
  }

  private buildInquiryMessage(): string {
    const { nombre, telefono, mensaje, fecha } = this.contactForm.getRawValue();
    const dateLine = fecha ? `\nFecha del evento: ${fecha}` : '';

    return [
      `Hola, soy ${nombre}.`,
      `Teléfono: ${telefono}`,
      dateLine,
      '',
      mensaje,
    ]
      .filter((line) => line !== '')
      .join('\n');
  }

  private buildWhatsAppUrl(message: string): string {
    const number = CONTACT_CONFIG.phones[0].replace(/\D/g, '');
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }
}
