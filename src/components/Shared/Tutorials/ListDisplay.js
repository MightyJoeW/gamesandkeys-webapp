// EXTERNAL DEPENDENCIES
import React from 'react';

// MATERIAL-UI DEPENDENCIES
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// COMPONENT DEFINITION
const ListDisplay = props => (
  <div>
    {props.songs.map(song => {
      // Replace hyphens with empty space then title case so the songs don't look like links on the ListItemText primary prop
      const title = song[0].replace(/-/g, ' ').split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
      // Get id from 1 index of songs array for each game to use for a key
      const key = song[1].toString();
      return (
        <List component="nav" key={key}>
          <ListItem
            button
            divider
            component="a"
            href={song[0]}
          >
            <ListItemText primary={title} />
          </ListItem>
        </List>
      )
    })}
  </div>
)
export default ListDisplay;
