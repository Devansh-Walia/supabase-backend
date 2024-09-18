import express from 'express';
import { listTablesWithRLS, toggleRLS } from '../controllers/dbController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Apply the authentication middleware to the /tables route
router.get('/tables', authenticate, listTablesWithRLS);

// New route to toggle RLS
router.post('/toggle-rls', toggleRLS);

export default router;
