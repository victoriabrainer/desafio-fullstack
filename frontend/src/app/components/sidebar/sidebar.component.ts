import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isCollapsed = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  nagivateToHome() {
    this.router.navigate(['/home']);
  }

  openSettings() {
    this.router.navigate(['/settings']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
