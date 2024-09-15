import { Request, Response } from 'express';
import supabase from '../supabase';

export const listUsers = async (req: Request, res: Response) => {
  const { data, error } = await supabase.auth.admin.listUsers();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const usersWithMFA = data.users.map((user) => ({
    id: user.id,
    email: user.email,
    mfa_enabled: user.factors && user.factors.length > 0,
  }));

  res.json(usersWithMFA);
};
