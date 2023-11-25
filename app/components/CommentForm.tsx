import axios from 'axios';
import React, { useState } from 'react';

const CommentForm = ({
  tweetId,
  setCommentingTweetId,
}: {
  tweetId: string;
  setCommentingTweetId: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    try {
      const data = await axios.post('/api/comment', { tweetId, content });
      console.log('Comment added');

      setCommentingTweetId('');
    } catch (error) {
      console.log('Something went wrong');
    }
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <input
        className="bg-slate-100 w-90 h-12 rounded-lg p-2"
        placeholder="Tell me your opinion"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-blue-400 rounded-lg px-3 py-1 w-90"
        onClick={handleSubmit}
      >
        Post your comment
      </button>
    </div>
  );
};

export default CommentForm;
