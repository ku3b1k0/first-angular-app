import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'Hello world!';
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
