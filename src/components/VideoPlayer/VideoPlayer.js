// External Dependencies
import React from 'react';

// Component Definition
const VideoPlayer = (props) => {
  const url = props.videoUrl;
  return (
    <div>
      <iframe
        allow="autoplay; encrypted-media"
        allowFullScreen
        frameBorder="0"
        height="360"
        src={url}
        style={{ margin: '0 auto' }}
        title="Game Title"
        width="100%"
      >
      </iframe>
    </div>
  );
};

export default VideoPlayer;

