import express from 'express';
import { listUsers, getMe } from '../controllers/userController';
import { enrollMFA, verifyMFA } from '../controllers/mfaController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Apply the authentication middleware to the /users route
router.get('/users', authenticate, listUsers);

// Add routes for MFA enrollment and verification
router.post('/mfa/enroll', authenticate, enrollMFA);
router.post('/mfa/verify', authenticate, verifyMFA);

// Add the /me route
router.get('/me', authenticate, getMe);

export default router;
