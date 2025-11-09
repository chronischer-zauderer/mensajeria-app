export class UserOutputDto {
  id: number;
  username!: string; 
  email!: string;
  nickname?: string | null;
  phone_number?: string | null;
  profile_picture_url?: string | null;
  status!: 'online' | 'away' | 'dnd' | 'offline';
  bio?: string | null;
  created_at!: Date;
  lastActive?: Date | null;
}
