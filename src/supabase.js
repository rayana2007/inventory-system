
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dwfaoodlllffjqbyeiki.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3ZmFvb2RsbGxmZmpxYnllaWtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNTUyMjIsImV4cCI6MjA1NjczMTIyMn0.GKomNSopuNXd6dz4gcLAPYgjEkkreUZaALJeUU9HwYY'
const supabase = createClient(supabaseUrl, supabaseKey) 
export default supabase;