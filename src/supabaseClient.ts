import { createClient } from '@supabase/supabase-js'

// جلب القيم من ملف البيئة .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// التأكد من وجود القيم قبل إنشاء العميل (للكفاءة والأمان)
if (!supabaseUrl || !supabaseKey) {
  console.error('تنبيه: مفاتيح Supabase غير موجودة في ملف .env.local')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
