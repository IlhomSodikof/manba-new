import React from 'react';

const VideoLink = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  console.log(embedUrl, "bu embad");

  return (
    <iframe
      className="w-full h-full aspect-[4/3]"
      // width="560"
      // height="315"
      src={embedUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default VideoLink;