import { User } from '@prisma/client';

export type UserResponse = {
  username: string;
  email: string;
  token?: string | undefined;
};

export type CreateUserBody = {
  username: string;
  password: string;
  email: string;
};

export type LoginBody = {
  username: string;
  password: string;
};

export function toUserResponse(user: User): UserResponse {
  return {
    username: user.username,
    email: user.email,
  };
}
