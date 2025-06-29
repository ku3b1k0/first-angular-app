export interface UserProfile {
  id?: string;
  name: string;
  title: string;
  description: string;
  profileImage: string;
  membershipLevel: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';
  skills: string[];
}
