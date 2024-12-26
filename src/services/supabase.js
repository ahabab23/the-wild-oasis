import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jypssvqxaqldopiyldnq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5cHNzdnF4YXFsZG9waXlsZG5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1Mzg4MjgsImV4cCI6MjA0NjExNDgyOH0.upsPmaZQXD9PeTOHWgQFgv5CMWMXbWB5W2pdxPHogWg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
