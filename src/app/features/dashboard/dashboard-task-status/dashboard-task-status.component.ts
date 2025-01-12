import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-task-status',
  imports: [MatCard, MatCardContent, MatIconModule],
  templateUrl: './dashboard-task-status.component.html',
  styleUrl: './dashboard-task-status.component.scss',
})
export class DashboardTaskStatusComponent {
  icon = input.required<string>();
  color = input<'gray' | 'red' | 'green'>('gray');
}
