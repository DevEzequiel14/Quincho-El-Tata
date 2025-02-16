import { inject, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  breakpointObserver = inject(BreakpointObserver);

  constructor() { }

  isMobile(): Observable<boolean> {
    return this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(
      map((result: BreakpointState) => result.matches)
    );
  }
}
