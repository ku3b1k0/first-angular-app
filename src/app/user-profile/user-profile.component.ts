import { Component } from '@angular/core';
import { UserDetails } from './user-details';
import { ProductListingComponent } from '../product-listing/product-listing.component';

@Component({
  selector: 'app-user-profile',
  imports: [ProductListingComponent],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  currentUser: UserDetails = {
    userName: 'Jane Doe',
    userTitle: 'Software Engineer',
    myTitle: 'User Profile',
    userMembership: 'gold',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    profileImage: '/assets/images/jake-nackos-IF9TK5Uy-KI-unsplash.jpg',
  };
}
