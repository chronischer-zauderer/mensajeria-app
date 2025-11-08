export class UserOutputDto {
  id: number;
  username!: string; // el ! indica que siempre estará definido
  email!: string;
  nickname?: string | null;
  phone_number?: string | null;
  profile_picture_url?: string | null;
  status!: 'online' | 'away' | 'dnd' | 'offline';
  bio?: string | null;
  createdAt!: Date;
  lastActive?: Date | null;
}
