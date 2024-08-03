import { User } from '@prisma/client';
import { logger } from 'application/logging';
import { NextFunction, Request, Response } from 'express';
import {
  CreateUserBody,
  LoginBody,
  toUserResponse,
  UserResponse,
} from 'model/user-model';
import { UserService } from 'service/user-service';
import { UserRequest } from 'type/user-request';
export class UserController {
  static async register(req: Request, res: Response, next: NextFunction) {
    console.log(req);
    try {
      const request: CreateUserBody = req.body as CreateUserBody;
      console.log(request);
      const response = await UserService.register(request);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
  static async login(req: Request, res: Response, next: NextFunction) {
    console.log(req);
    try {
      const request: LoginBody = req.body as LoginBody;
      const response = await UserService.login(request);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
  static async get(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const response = await UserService.get(req.user!);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
  static async logout(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const response = await UserService.logout(req.user!);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
}
