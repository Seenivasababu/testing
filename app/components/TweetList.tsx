'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import prisma from '@/prisma/client';
import CommentForm from './CommentForm';
import Link from 'next/link';

type Tweet = {
  id: string;
  userId: string;
  content: string;
  likes: number;
  _count: {
    Like: number;
    Comment: number;
  };
};

const TweetList = ({isUser}:{isUser:boolean}) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const [commentingTweetId, setCommentingTweetId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
         if(isUser){
            const userId = localStorage.getItem('token');
            console.log(userId);
            const response = await axios.get(`/api/user/${userId}`);
            const data: Tweet[] = response.data;
            setTweets(data);
            console.log('I am inside user');
            
         }else{
            const response = await axios.get('/api/tweet');
            const data: Tweet[] = response.data;
            setTweets(data);
         }
       
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchData();
  }, []);

  const handleLikes = async (tweetId: String) => {
    try {
      const userId = localStorage.getItem('token');
      console.log(userId);

      const data = await axios.post('/api/like', { tweetId, userId });

      console.log('Tweet liked');
    } catch (error) {
      console.log('Something went wrong');
    }
  };

  const handleCommentClick = (tweetId: string) => {
    setCommentingTweetId(tweetId);
  };

  return (
    <div className="p-4 gap-2 space-y-2">
      {/* Your rendering logic for the tweets */}
      {tweets.map((tweet) => (
        <div key={tweet.id} className="bg-slate-100 w-96 p-2">
          
          <Link href={`/tweet/${tweet.id}`}><div> {tweet.content}</div></Link>
          <div className="flex gap-4">
            <button onClick={() => handleLikes(tweet.id)}>
              {tweet._count.Like} likes
            </button>
            <button onClick={() => handleCommentClick(tweet.id)}>
              {tweet._count.Comment} Comment
            </button>
          </div>
          {tweet.id === commentingTweetId && (
            <CommentForm
              tweetId={tweet.id}
              setCommentingTweetId={setCommentingTweetId}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TweetList;
