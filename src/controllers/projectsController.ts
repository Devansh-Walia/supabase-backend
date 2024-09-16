import axios from 'axios';

import { storeProjects } from '../services/projectService';
import { applicationConfig } from '../config';

const SUPABASE_API_URL = 'https://api.supabase.io/v1';

// Function to sync projects from Supabase org
export const syncProjects = async () => {
  try {
    // Fetch projects from Supabase organization
    const response = await axios.get(`${SUPABASE_API_URL}/projects`, {
      headers: {
        Authorization: `Bearer ${applicationConfig.supabase.supabaseKey}`,
      },
    });

    const projects = response.data;

    // Store fetched projects in the local table
    await storeProjects(projects);
    console.log('Projects synced successfully');
  } catch (error) {
    console.error('Error syncing projects:', error);
  }
};
