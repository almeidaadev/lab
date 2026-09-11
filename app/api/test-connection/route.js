import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Replace 'your_table' with a real table, or just check auth/session
    const { data, error } = await supabase
      .from('pdfs')
      .select('*')
      .limit(1)

    if (error) throw error

    return NextResponse.json({ success: true, data })
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}