// External Dependencies
import React from 'react';

// Internal Dependencies
import Dialog from '../../../components/Shared/Tutorials/Dialog';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';

const videoUrl = 'https://www.youtube.com/embed/-86VZNyIY1s';

// Component Definition
const BeyondChildhood = () => (
  <div>
    <p>Childhood Memories</p>
    <VideoPlayer videoUrl={videoUrl} />
    <Dialog />
  </div>
)

export default BeyondChildhood;