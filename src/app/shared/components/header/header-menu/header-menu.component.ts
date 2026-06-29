import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ScrollChangeDirective } from '../../../directives/scroll-change.directive';

interface MenuItem {
  text: string;
  id: string;
}

@Component({
  selector: 'app-header-menu',
  imports: [ScrollChangeDirective],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent implements OnChanges {
  private readonly router = inject(Router);

  @ViewChild('navPanel', { static: true }) navPanel!: ElementRef<HTMLElement>;

  @Input() isMenuOpen = false;
  @Input() isMobileView = false;
  @Output() menuClose = new EventEmitter<void>();

  menu: MenuItem[] = [
    { text: 'Nosotros', id: 'about' },
    { text: 'Servicios', id: 'benefits' },
    { text: 'Galería', id: 'galeria' },
    { text: 'Precios', id: 'precios' },
    { text: 'Contacto', id: 'contact' },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isMenuOpen']?.currentValue === true && this.isMobileView) {
      queueMicrotask(() => {
        this.navPanel.nativeElement.querySelector<HTMLElement>('.close-btn')?.focus();
      });
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (!this.isMenuOpen || !this.isMobileView) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeMenu();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusable = this.getFocusableElements();
    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  navigateToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();
    void this.router.navigate(['/'], { fragment: sectionId });
  }

  closeMenu(): void {
    this.menuClose.emit();
  }

  private getFocusableElements(): HTMLElement[] {
    return Array.from(
      this.navPanel.nativeElement.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href]',
      ),
    );
  }
}
