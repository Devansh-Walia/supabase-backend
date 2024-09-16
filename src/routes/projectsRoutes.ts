import express from 'express';
import { syncProjects } from '../controllers/projectsController';

const router = express.Router();

// ... existing routes ...

// Route to trigger the sync process
router.post('/sync', syncProjects);

export default router;
