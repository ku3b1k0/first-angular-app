import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'first-angular-app';
  protected environmentName = environment.name;
  protected environmentCode = environment.code;
  ngOnInit(): void {
    console.log(
      'App initialized with environment:',
      this.environmentName,
      'Code:',
      this.environmentCode,
    );
  }
}
