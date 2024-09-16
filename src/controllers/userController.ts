import { Request, Response } from 'express';
import supabase from '../supabase';
import { AuthenticatedRequest } from '../types';

export const listUsers = async (req: Request, res: Response) => {
  const limit = parseInt(req.query.limit as string) || 10;
  const offset = parseInt(req.query.offset as string) || 0;

  const { data, error } = await supabase.auth.admin.listUsers({
    page: offset,
    perPage: limit,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const usersWithMFA = data.users.map((user) => ({
    id: user.id,
    email: user.email,
    mfa_enabled: user.factors && user.factors.length > 0 ? true : false,
  }));

  res.json(usersWithMFA);
};

export const getMe = (req: AuthenticatedRequest, res: Response) => {
  res.json(req.user);
};
