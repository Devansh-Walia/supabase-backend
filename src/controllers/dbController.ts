import { AuthenticatedRequest } from '../types';
import { Response } from 'express';
import supabase from '../supabase';

export const listTablesWithRLS = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { data, error } = await supabase.rpc('list_tables_with_rls');

    if (error) {
      console.error('RPC Error:', error);
      return res.status(400).json({ error: error.message });
    }

    res.json(data);
  } catch (err) {
    console.error('Unexpected Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
