// EXTERNAL DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SheetMusicIcon from '@material-ui/icons/InsertDriveFile';
import MidiIcon from '@material-ui/icons/MusicNote';

// LOCAL VARIABLES
const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		margin: '0 auto',
		maxWidth: 360,
		width: '100%',
	},
});

// COMPONENT DEFINITION
const Downloads = props => {
	const {
		classes,
		midiRoute,
		sheetRoute,
		sheetRoute2,
		sheetRoute2Title,
		sheetRoute3,
		sheetRoute3Title
	} = props;
	return (
		<div className={classes.root}>
			<List component="nav">
				<ListItem
					button
					component={sheetRoute ? 'a' : null} // Only make components with a sheet music file clickable.
					download
					href={`static/sheets-images/${sheetRoute}`}
				>
					<ListItemIcon>
						<SheetMusicIcon />
					</ListItemIcon>
					<ListItemText
						// Add (piano) if additional sheet for different instrument exists. 
						// If I don't have the file, put unavailable.
						primary={`Sheet Music ${sheetRoute2 ? '(piano)' : sheetRoute === '' ? '(currently unavailable)' : ''}`}
						secondary="Click to download"
					/>
				</ListItem>
				{sheetRoute2
					? (
						<ListItem
							button
							component="a"
							download
							href={`static/sheets-images/${sheetRoute2}`}
						>
							<ListItemIcon>
								<SheetMusicIcon />
							</ListItemIcon>
							<ListItemText
								primary={`Sheet Music (${sheetRoute2Title})`}
								secondary="Click to download"
							/>
						</ListItem>
					)
					: null
				}
				{sheetRoute3
					? (
						<ListItem
							button
							component="a"
							download
							href={`static/sheets-images/${sheetRoute3}`}
						>
							<ListItemIcon>
								<SheetMusicIcon />
							</ListItemIcon>
							<ListItemText
								primary={`Sheet Music (${sheetRoute3Title})`}
								secondary="Click to download"
							/>
						</ListItem>
					)
					: null
				}
				<ListItem
					button
					component="a"
					download
					href={`static/midis/${midiRoute}`}
				>
					<ListItemIcon>
						<MidiIcon />
					</ListItemIcon>
					<ListItemText
						primary="Midi File"
						secondary="Click to download"
					/>
				</ListItem>
			</List>
			<Divider />
		</div>
	);
};

Downloads.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Downloads);