import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let openSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    openSpy = spyOn(window, 'open').and.returnValue({} as Window);

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.contactForm.valid).toBeFalse();
    expect(component.contactForm.get('nombre')?.hasError('required')).toBeTrue();
    expect(component.contactForm.get('telefono')?.hasError('required')).toBeTrue();
    expect(component.contactForm.get('mensaje')?.hasError('required')).toBeTrue();
  });

  it('should validate nombre minLength', () => {
    component.contactForm.controls.nombre.setValue('A');
    component.contactForm.controls.nombre.markAsTouched();

    expect(component.contactForm.controls.nombre.hasError('minlength')).toBeTrue();
    expect(component.getError('nombre')).toContain('al menos 2');
  });

  it('should validate telefono format', () => {
    component.contactForm.controls.telefono.setValue('abc');
    component.contactForm.controls.telefono.markAsTouched();

    expect(component.contactForm.controls.telefono.hasError('phone')).toBeTrue();
    expect(component.getError('telefono')).toContain('teléfono válido');
  });

  it('should validate mensaje minLength', () => {
    component.contactForm.controls.mensaje.setValue('corto');
    component.contactForm.controls.mensaje.markAsTouched();

    expect(component.contactForm.controls.mensaje.hasError('minlength')).toBeTrue();
    expect(component.getError('mensaje')).toContain('al menos 10');
  });

  it('should accept a valid form without fecha', () => {
    component.contactForm.setValue({
      nombre: 'María García',
      telefono: '+54 9 388 5054451',
      mensaje: 'Quisiera consultar disponibilidad para un cumpleaños.',
      fecha: '',
    });

    expect(component.contactForm.valid).toBeTrue();
  });

  it('should mark all fields touched when submitting invalid form', () => {
    component.onSubmit();

    expect(component.contactForm.get('nombre')?.touched).toBeTrue();
    expect(component.contactForm.get('telefono')?.touched).toBeTrue();
    expect(component.contactForm.get('mensaje')?.touched).toBeTrue();
    expect(openSpy).not.toHaveBeenCalled();
  });

  it('should open WhatsApp with encoded message on valid submit', fakeAsync(() => {
    component.contactForm.setValue({
      nombre: 'Juan Pérez',
      telefono: '3885054451',
      mensaje: 'Hola, quisiera alquilar el quincho.',
      fecha: '2026-07-15',
    });

    component.onSubmit();
    expect(component.submitStatus()).toBe('loading');

    tick(500);

    expect(openSpy).toHaveBeenCalled();
    const [url, target] = openSpy.calls.mostRecent().args;
    expect(url).toContain('https://wa.me/');
    expect(url).toContain(encodeURIComponent('Juan Pérez'));
    expect(url).toContain(encodeURIComponent('2026-07-15'));
    expect(target).toBe('_blank');
    expect(component.submitStatus()).toBe('success');
  }));

  it('should set error status when WhatsApp window cannot open', fakeAsync(() => {
    openSpy.and.returnValue(null);

    component.contactForm.setValue({
      nombre: 'Juan Pérez',
      telefono: '3885054451',
      mensaje: 'Hola, quisiera alquilar el quincho.',
      fecha: '',
    });

    component.onSubmit();
    tick(500);

    expect(component.submitStatus()).toBe('error');
  }));
});
