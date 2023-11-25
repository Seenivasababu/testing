import Link from 'next/link';
import TweetForm from '../components/TweetForm';
import TweetList from '../components/TweetList';

const Tweet = async () => {
  return (
    <>
      <Link href={'/user'} className='m-4 p-2 bg-slate-300'>Go to Profile page</Link>
      <TweetForm />
      <TweetList isUser={false}/>
    </>
  );
};

export default Tweet;
