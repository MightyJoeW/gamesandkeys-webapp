// EXTERNAL DEPENDENCIES
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

// MATERIAL-UI DEPENDENCIES
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// INTERNAL DEPENDENCIES
// import songTitleFormatter from '../../utils/formatting';

// COMPONENT DEFINITION
const LibrarySongTitles = props => {

	// Google Analytics
	const trackingId = '43084370';
	useEffect(() => {
		ReactGA.initialize(`UA-${trackingId}-01`, {
			debug: false // set to true to log pageview to console
		});
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);
	return (
		<div>
			{props.songs.map(song => {
				// Replace hyphens with empty space then title case so the songs don't look like links on the DashboardCards primary prop
				const title = song[0]
					.replace(/-/g, ' ')
					.split(' ')
					.map(word => word[0].toUpperCase() + word.slice(1))
					.join(' ');
				// Get id from 1 index of songs array for each game to use for a key
				const key = song[1].toString();

				return (
					<List component="nav" key={key}>
						<ListItem button divider component="a" href={song[0]}>
							<ListItemText primary={title} />
						</ListItem>
					</List>
				);
			})}
		</div>
	);
};
export default LibrarySongTitles;
