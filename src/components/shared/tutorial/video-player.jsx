// EXTERNAL DEPENDENCIES
import React, { Fragment } from 'react';
import ReactGA from 'react-ga';

// COMPONENT DEFINITION
const VideoPlayer = (props) => {
	const url = props.videoUrl;

	const trackEvent = (title) => {
		ReactGA.event({
			category: 'Media',
			action: 'Played YouTube video',
			label: title
		});
	};

	return (
		<Fragment>
			<iframe
				allow="autoplay; encrypted-media"
				allowFullScreen
				frameBorder="0"
				height="360"
				onClick={() => trackEvent(props.videoUrl)}
				src={url}
				title="Game Title"
				width="100%"
			>
			</iframe>
		</Fragment>
	);
};

export default VideoPlayer;

