import { NextResponse } from 'next/server'

export async function GET() {
  const fileUrl =
    'https://drive.google.com/uc?export=download&id=1dS-gNVKiGrn4ShwKdBGqz4j7kfMTilF_'

  const response = await fetch(fileUrl)
  const fileBuffer = await response.arrayBuffer()

  return new NextResponse(Buffer.from(fileBuffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="CV_Sylvain_Laconi.pdf"',
    },
  })
}
