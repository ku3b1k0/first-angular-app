export interface UserProfile {
  id?: string;
  name: string;
  profileImageUrl: string;
  title: string;
  description: string;
  profileImage: string;
  membershipLevel: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';
  skills: string[];
}
