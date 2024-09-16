import supabase from '../supabase';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const storeProjects = async (projects: any[]) => {
  const { error } = await supabase
    .from('local_projects')
    .upsert(projects, { onConflict: 'id' });

  if (error) {
    throw new Error(error.message);
  }
};
