import { SplitInterpolation } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  public readonly imgUrl: string = `https://media.licdn.com/dms/image/D4E03AQGxYVWihQpbxg/profile-displayphoto-shrink_400_400/0/1708996732257?e=1717632000&v=beta&t=7CACUCiF5dI6SKn8ZYxaGPzbtevKXLTptQbNy31C_Y0`;

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
