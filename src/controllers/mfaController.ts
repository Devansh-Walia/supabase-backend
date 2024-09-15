import { Response } from 'express';

import supabase from '../supabase';
import { AuthenticatedRequest } from '../types';

export const enrollMFA = async (req: AuthenticatedRequest, res: Response) => {
  const { user } = req;

  if (!user || !user.id) {
    return res.status(401).json({ error: 'Unauthorized: missing user ID' });
  }

  const { data, error } = await supabase.auth.mfa.enroll({
    factorType: 'totp',
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  if (data.type === 'totp') {
    return res.json({
      factorId: data.id,
      qrCode: data.totp.qr_code,
      secret: data.totp.secret,
    });
  }

  res.json({ ...data });
};

export const verifyMFA = async (req: AuthenticatedRequest, res: Response) => {
  const { user } = req;
  const { code, challengeId } = req.body;

  if (!user || !user.id) {
    return res.status(401).json({ error: 'Unauthorized: missing user ID' });
  }

  const { data, error } = await supabase.auth.mfa.verify({
    factorId: user.id,
    code,
    challengeId,
  });

  console.log(data, 'data from user');

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ message: 'MFA enabled successfully' });
};
