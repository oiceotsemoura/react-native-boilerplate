import { UserDTO } from '@service/auth/types';
import { User } from '@shared/interfaces/User/User';

export const mapUserDTOToUser = (dto: UserDTO): User => ({
  id: dto.id,
  name: dto.name,
  email: dto.email,
  avatar: dto.avatar_thumbnail,
});
