import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbSubject = new BehaviorSubject<Breadcrumb[]>([]);
  breadcrumb$ = this.breadcrumbSubject.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.updateBreadcrumb(event.urlAfterRedirects);
      });
  }

  private updateBreadcrumb(url: string) {
    const breadcrumbs = this.generateBreadcrumbs(url);
    this.breadcrumbSubject.next(breadcrumbs);
  }

  private generateBreadcrumbs(url: string): Breadcrumb[] {
    const segments = url.split('/').filter((segment) => segment);
    const breadcrumbs: Breadcrumb[] = [];
    let currentUrl = '';

    segments.forEach((segment) => {
      currentUrl += `/${segment}`;
      const label = labelMapping[segment] || segment; // Use the mapping or fallback to the segment itself
      breadcrumbs.push({
        label: `${label}`,
        url: currentUrl,
      });
    });

    return breadcrumbs;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const labelMapping: { [key: string]: string } = {
  svadby: 'Svadby',
  obhliadka: 'Obhliadka',
  blog: 'Blog',
  kalendar: 'Kalendár',
  'kryta-terasa': 'Krytá terasa',
  priestory: 'Priestory',
  'example-path': 'Example \\ Path', // Example with backslash
  // Add more mappings as needed
};
