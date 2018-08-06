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
      const title = song.replace(/-/g, ' ').split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
      return (
        <List component="nav">
          <ListItem
            button
            component="a"
            divider
            href={song}
          >
            <ListItemText primary={title} />
          </ListItem>
        </List>
      )
    })}
  </div>
)
export default ListDisplay;
