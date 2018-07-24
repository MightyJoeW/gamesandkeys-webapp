// External Dependencies
import React from 'react';

// Internal Dependencies
import Dialog from '../../components/Shared/Tutorials/Dialog';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const videoUrl = 'https://www.youtube.com/embed/VzKSLGtN09I';

// Component Definition
const Brothers = () => (
  <div>
    <p>Brothers</p>
    <VideoPlayer videoUrl={videoUrl} />
    <Dialog />
  </div>
)

export default Brothers;