//Function for registering a new user

import { Request, Response, NextFunction } from 'express';
import { validateRegistrationData } from '../utils/auth-helper';
import { ValidationError } from '../../../../Packages/error-handler';

export const userRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRegistrationData(req.body, 'user');
  const { name, email } = req.body;

  const existingUser = await prismadb.users.findUnique({ where: email });
  if (existingUser) {
    return next(new ValidationError(`user already exists with this email!`));
  }
};
