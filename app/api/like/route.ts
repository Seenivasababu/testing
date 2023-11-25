import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const data = await prisma.like.create({
    data: body,
  });
  console.log(data);
  return NextResponse.json(data, { status: 201 });
}
