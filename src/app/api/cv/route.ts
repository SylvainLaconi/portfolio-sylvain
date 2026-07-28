import { readFile } from 'fs/promises'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public/cv/CV_Sylvain_Laconi.pdf')
  const fileBuffer = await readFile(filePath)

  return new NextResponse(new Uint8Array(fileBuffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="CV_Sylvain_Laconi.pdf"',
    },
  })
}
