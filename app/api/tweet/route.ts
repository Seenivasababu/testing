import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  const data = await prisma.tweet.create({
    data: body,
  });
  console.log(data);
  return NextResponse.json(data, { status: 201 });
}

export async function GET() {
  const data = await prisma.tweet.findMany({
    include: {
      _count: {
        select: { Like: true, Comment: true },
      },
    },
  });
  return NextResponse.json(data);
}
