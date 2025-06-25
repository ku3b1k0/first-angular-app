import { Component } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

@Component({
  selector: 'app-root',
  imports: [UserProfileComponent, ProductListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MyApp';

  getTitle(): string {
    return this.title;
  }
}
