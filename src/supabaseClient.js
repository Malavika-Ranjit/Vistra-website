import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://cyhikbripzxkvjdzaist.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5aGlrYnJpcHp4a3ZqZHphaXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyNzE5NzYsImV4cCI6MjA4Mzg0Nzk3Nn0.QW_pcDFdyWw8kWiQb9dE1OuIdoMZth5VPbCezQhnR4A'
)
