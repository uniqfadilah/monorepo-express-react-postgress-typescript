import { UserController } from 'controller/user-controller';
import express from 'express';
import { authMiddleware } from 'middleware/auth-middleware';
export const privateApi = express.Router();
privateApi.use(authMiddleware);
privateApi.get('/api/me', UserController.get);
privateApi.delete('/api/logout', UserController.logout);
