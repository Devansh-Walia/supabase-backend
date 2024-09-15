import { NextFunction, Response } from 'express';

import supabase from '../supabase';
import { AuthenticatedRequest } from '../types';

export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.user = data.user;

  next();
};
