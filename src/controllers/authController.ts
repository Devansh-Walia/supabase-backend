import { Request, Response } from 'express';

import supabase from '../supabase';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
};

export const register = async (req: Request, res: Response) => {
  const { email, password, username, name } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role: 'user',
        name,
        username,
      },
    },
  });

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
};
