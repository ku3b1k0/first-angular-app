import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MyApp';
  description = 'Why does Bubu love Ladoo?';
  profileImage = '/assets/images/jake-nackos-IF9TK5Uy-KI-unsplash.jpg';

  getTitle(): string {
    return this.title;
  }
}
