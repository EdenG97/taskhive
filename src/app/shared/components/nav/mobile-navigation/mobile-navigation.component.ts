import { Component, OnInit, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-mobile-navigation',
  imports: [MatListModule, MatIconModule],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss',
})
export class MobileNavigationComponent implements OnInit {
  navList = signal([
    { label: 'Dashboard', url: '/home/dashboard', isActive: false },
    { label: 'Boards', url: '/home/boards', isActive: false },
    { label: 'Issues', url: '/home/issues', isActive: false },
    { label: 'Projects', url: '/home/projects', isActive: false },
  ]);

  onShowDrawer = output<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveRoute(this.router.url);
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) =>
        this.navList.update((nav) =>
          nav.map((n) => ({ ...n, isActive: n.url === e.url ? true : false })),
        ),
      );
  }

  navigate(url: string) {
    this.router.navigate([url]);
    this.onShowDrawer.emit();
  }

  private setActiveRoute(url: string) {
    this.navList.update((nav) =>
      nav.map((n) => ({ ...n, isActive: n.url === url ? true : false })),
    );
  }
}
