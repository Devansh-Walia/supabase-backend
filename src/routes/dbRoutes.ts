import express from 'express';
import { listTablesWithRLS } from '../controllers/dbController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

// Apply the authentication middleware to the /tables route
router.get('/tables', authenticate, listTablesWithRLS);

export default router;
