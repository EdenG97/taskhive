import { Component, viewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MobileNavigationComponent } from '../../nav/mobile-navigation/mobile-navigation.component';
import { WebNavigationComponent } from '../../nav/web-navigation/web-navigation.component';

@Component({
  selector: 'app-home-layout',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MobileNavigationComponent,
    WebNavigationComponent,
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {
  private drawer = viewChild<MatDrawer>('drawer');

  showDrawer() {
    this.drawer()?.toggle();
  }
}
