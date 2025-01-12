import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DashboardTaskStatusComponent } from './dashboard-task-status/dashboard-task-status.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCard,
    MatCardContent,
    MatIconModule,
    DashboardTaskStatusComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  statusSummary = Array.from({ length: 4 }, (_, index) => index + 1);
}
