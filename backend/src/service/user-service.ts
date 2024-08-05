import { prismaClient } from 'application/database';
import { ResponseError } from 'error/response-error';
import {
  CreateUserBody,
  LoginBody,
  toUserResponse,
  UserResponse,
} from 'model/user-model';
import { UserValidation } from 'validation/user-validation';
import { Validation } from 'validation/validation';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { User } from '@prisma/client';
export class UserService {
  static async register(request: CreateUserBody): Promise<UserResponse> {
    const registerRequest = Validation.validate(
      UserValidation.REGISTER,
      request
    );
    const totalUserWithSameUsername = await prismaClient.user.count({
      where: {
        username: registerRequest.username,
      },
    });
    if (totalUserWithSameUsername != 0) {
      throw new ResponseError(400, 'Username already exis');
    }
    const totalUserWithSameUserEmail = await prismaClient.user.count({
      where: {
        email: registerRequest.email,
      },
    });

    if (totalUserWithSameUserEmail != 0) {
      throw new ResponseError(400, 'Email already exis');
    }
    registerRequest.password = await bcrypt.hash(registerRequest?.password, 10);

    const user = await prismaClient.user.create({
      data: registerRequest,
    });

    return toUserResponse(user);
  }

  static async login(request: LoginBody): Promise<UserResponse> {
    const loginRequest = Validation.validate(UserValidation.LOGIN, request);

    try {
      const user = await prismaClient.user.findFirstOrThrow({
        where: {
          username: loginRequest.username,
        },
      });

      const isPasswordValid = await bcrypt.compare(
        loginRequest.password,
        user.password
      );

      if (!isPasswordValid) {
        throw new ResponseError(401, 'User or password wrong');
      }
      const response = toUserResponse(user);
      response.token = user.token!;
      if (!user.token) {
        const updateTokenUser = await prismaClient.user.update({
          where: {
            username: user.username,
          },
          data: {
            token: uuid(),
          },
        });
        response.token = updateTokenUser.token!;
      }

      return response;
    } catch (error) {
      throw new ResponseError(401, 'User or password wrong');
    }
  }

  static async get(user: User): Promise<UserResponse> {
    return toUserResponse(user);
  }
  static async logout(user: User): Promise<any> {
    const data = await prismaClient.user.update({
      where: {
        username: user.username,
      },
      data: {
        token: null,
      },
    });
    return {
      message: 'OK!',
    };
  }
}
