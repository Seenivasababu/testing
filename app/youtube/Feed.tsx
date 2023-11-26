import Image from 'next/image';
import React from 'react';

const Feed = () => {
  const videos = [
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/marcimus-purple.png',
      title: 'AI will beat human',
      description: 'Ready for herculeous ride',
      views: '1234 Views',
      date: '2 years ago',
    },
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      title: 'Video Title 2',
      description: 'Description for Video 2',
      views: '5678 Views',
      date: '1 year ago',
    },
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/mr-pants-green.png',
      title: 'Video Title 3',
      description: 'Description for Video 3',
      views: '987 Views',
      date: '2 years ago',
    },
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png',
      title: 'Video Title 4',
      description: 'Description for Video 4',
      views: '5432 Views',
      date: '1 year ago',
    },
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png',
      title: 'Video Title 5',
      description: 'Description for Video 5',
      views: '876 Views',
      date: '2 years ago',
    },
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/old-spice-man.png',
      title: 'Video Title 6',
      description: 'Description for Video 6',
      views: '6543 Views',
      date: '1 year ago',
    },
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/mr-pants-purple.png',
      title: 'Video Title 7',
      description: 'Description for Video 7',
      views: '2109 Views',
      date: '2 years ago',
    },
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png',
      title: 'Video Title 8',
      description: 'Description for Video 8',
      views: '4321 Views',
      date: '1 year ago',
    },
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/marcimus-red.png',
      title: 'Video Title 9',
      description: 'Description for Video 9',
      views: '9876 Views',
      date: '2 years ago',
    },
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/marcimus.png',
      title: 'Video Title 10',
      description: 'Description for Video 10',
      views: '123 Views',
      date: '1 year ago',
    },
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/purple-pi.png',
      title: 'Video Title 11',
      description: 'Description for Video 11',
      views: '8765 Views',
      date: '2 years ago',
    },
    {
      image:
        'https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png',
      title: 'Video Title 12',
      description: 'Description for Video 12',
      views: '456 Views',
      date: '1 year ago',
    },
    
  ];

  return (
    <div className="grid grid-cols-4">
      {videos.map((video) => {
        return (
          <div className="bg-slate-100 mx-2 mb-4 p-2 rounded-lg hover:bg-slate-300">
            <Image src={video.image} alt="#" width={'100'} height={'100'} />
            <div>
              <h1 className='text-base font-bold'>{video.title}</h1>
              <h2 className='text-sm'>{video.description}</h2>
              <p className='text-xs'>{video.views}</p>
              <p className='text-xs'>{video.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
