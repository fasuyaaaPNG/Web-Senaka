import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kssbbbeqxandmsqahpsq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtzc2JiYmVxeGFuZG1zcWFocHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3ODAzMDksImV4cCI6MjAzNDM1NjMwOX0.JwvZkjy6nXR39JiS2qn4XOoRfe-Txzsu0BCRkuTkekk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase