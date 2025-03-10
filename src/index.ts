import express from 'express';
import dotenv from 'dotenv';
import cron from 'node-cron';
import cors from 'cors';

import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import dbRoutes from './routes/dbRoutes';
import projectsRoutes from './routes/projectsRoutes';
import morgan from 'morgan';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(morgan('combined'));

// Use the auth routes
app.use('/auth', authRoutes);

// Use the user routes
app.use('/api', userRoutes);

// Use the db routes
app.use('/api/db', dbRoutes);

// Use the projects routes
app.use('/api/projects', projectsRoutes);

// Schedule the sync process to run every hour
cron.schedule('0 * * * *', async () => {
  // console.log('Syncing projects...');
  // await syncProjects();
  // console.log('Projects synced successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
