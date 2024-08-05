import { User } from '@prisma/client';
import { prismaClient } from 'application/database';
import { ResponseError } from 'error/response-error';
import { CreateClientRequest } from 'model/client-model';
import { ClientValidation } from 'validation/client-validation';
import { Validation } from 'validation/validation';

export class ClientService {
  static async post(req: CreateClientRequest) {
    const payload = Validation.validate(ClientValidation.CREATE_CLIENT, req);
    payload.user_id = req.user_id;
    console.log(payload);
    try {
      const data = await prismaClient.client.create({
        data: payload,
      });
      return data;
    } catch (error: any) {
      throw new ResponseError(500, 'Server Error');
    }
  }

  static async get(user: User) {
    const response = await prismaClient.client.findMany({
      skip: 200,
      where: {
        user_id: user.id,
      },
      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
      },
    });
    return response;
  }
}
