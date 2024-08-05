import { NextFunction, Request, Response } from 'express';
import { ClientService } from 'service/client-service';
import { UserRequest } from 'type/user-request';

export class ClientController {
  static async post(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      data.user_id = req.user?.id;
      const response = await ClientService.post(data);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }

  static async get(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const response = await ClientService.get(req.user!);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
}
