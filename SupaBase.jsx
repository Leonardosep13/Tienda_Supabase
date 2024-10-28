import 'react-native-url-polyfill/auto';

import {createClient} from "@supabase/supabase-js"

const supaBaseUrl = "https://heuwuuvedfsestaanqmt.supabase.co"
const supabeKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhldXd1dXZlZGZzZXN0YWFucW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1NDY2ODQsImV4cCI6MjA0NTEyMjY4NH0.jp__NRlITFH19R0xTy9KCNVBuKJpnfqXGFleXGpnEAg"

export const supabase = createClient(supaBaseUrl, supabeKey)