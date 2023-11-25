import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await prisma.tweet.findMany({
    where: {
      userId: params.id,
    },
    include: {
      _count: {
        select: { Like: true, Comment: true },
      },
    },
  });
  return NextResponse.json(data);
}
