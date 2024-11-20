import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
    // 上傳圖片
    return NextResponse.json({ message: 'Hello, World!' })
    }