import { UserDto } from 'src/modules/user/dtos/user.dto';
import { User } from 'src/modules/user/entities/user.entity';

export const sanitizeUser = (user: User): UserDto => {
  const { hashedPassword, refreshToken, ...sanitizedUser } = user;
  return sanitizedUser;
};
