import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://betrwcovwwnbkquzmsjf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJldHJ3Y292d3duYmtxdXptc2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNTUxNjQsImV4cCI6MjAxODczMTE2NH0.0ZNfy9cEumIMt4c4gAA9HenMMgQ935PnULf5Oysph6o"
);
