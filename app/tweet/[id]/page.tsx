import prisma from '@/prisma/client';
import Link from 'next/link';
import React from 'react';
interface Props {
  params: { id: string };
}

const SingleTweet = async ({ params }: Props) => {
  const tweetId = params.id;
  const tweet = await prisma.tweet.findUnique({
    where: {
      id: tweetId,
    },
    include: {
      Comment: true,
    },
  });

  return (
    <div>
      <Link href={'/tweet'} className="bg-gray-300 p-2 m-2">
        Go back to Home page
      </Link>
      <h1 className="bg-slate-300 w-96 p-2 m-2">{tweet?.content}</h1>
      <h1 className="m-2">List of comments</h1>
      {tweet?.Comment.map((comment) => {
        return (
          <div key={comment.id} className="bg-slate-100 w-96 p-2 m-2">
            <div>{comment.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleTweet;
