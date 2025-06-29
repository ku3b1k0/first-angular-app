import { Component } from '@angular/core'; //import { CommonModule } from '@angular/common';
import { UserProfile } from './user-profile.model';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'first-angular-app';
  protected userProfile: UserProfile = {
    id: '12345',
    name: 'Alex Johnson',
    profileImageUrl: '/images/profile1.jpg',
    title: 'Software Engineer',
    description:
      'Full-stack developer specializing in Angular and Node.js. Passionate about creating clean, efficient code and mentoring junior developers',
    profileImage: '/images/profile1.jpg',
    membershipLevel: 'PLATINUM',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'Node.js'],
  };
}
