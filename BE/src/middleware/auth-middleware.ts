import { prismaClient } from 'application/database';
import { NextFunction, Response } from 'express';
import { UserRequest } from 'type/user-request';

export const authMiddleware = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.get('Authorization');
  console.log(req.get('Authorization'));
  if (token) {
    const finalToken = token.split(' ')[1];
    const user = await prismaClient.user.findFirst({
      where: {
        token: finalToken,
      },
    });

    if (user) {
      req.user = user;
      next();
      return;
    }
  }

  res
    .status(401)
    .json({
      error: 'Unauthorized',
    })
    .end();
};
