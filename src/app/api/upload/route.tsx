import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'

export const POST = async (req: NextRequest) => {
  // 上傳圖片

  const form = await req.formData()
  const file = form.get('file') as File

  const filename = `./public/img/${file.name}`
  const url = `http://localhost:3000/img/${file.name}`

  fs.writeFileSync(filename, Buffer.from(await file.arrayBuffer()))

  return NextResponse.json({
    status: 'success',
    data: {
      url
    }
  })
}
