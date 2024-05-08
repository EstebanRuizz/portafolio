import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SidebarComponent]
})
export class HomeComponent {
  constructor(private router: Router) {}

  public readonly imgUrl: string = `https://th.bing.com/th/id/R.0e4b3d762aa98b49d712f4e5e394ba6c?rik=sFQZKke1MannAw&pid=ImgRaw&r=0`;
  // public readonly imgUrl: string = `https://media.licdn.com/dms/image/D4E03AQGxYVWihQpbxg/profile-displayphoto-shrink_400_400/0/1708996732257?e=1717632000&v=beta&t=7CACUCiF5dI6SKn8ZYxaGPzbtevKXLTptQbNy31C_Y0`;

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
