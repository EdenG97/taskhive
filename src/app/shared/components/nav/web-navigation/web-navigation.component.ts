import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-navigation',
  imports: [MatToolbarModule, RouterLink, MatIconModule, MatMenuModule],
  templateUrl: './web-navigation.component.html',
  styleUrl: './web-navigation.component.scss',
})
export class WebNavigationComponent {
  onShowDrawer = output<void>();
}
