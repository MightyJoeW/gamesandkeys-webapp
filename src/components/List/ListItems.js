// EXTERNAL DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

// MATERIAL-UI DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// INTERNAL DEPENDENCIES
import preload from '../../services/db.json';

// LOCAL VARIABLES
const styles = {
  button: {
    margin: '0 auto',
    marginBottom: 15,
  },
  card: {
    margin: '0 5px',
    maxHeight: 325,
    minWidth: 275,
    textAlign: 'center',
    textDecoration: 'none',
  },
  container: {
    display: 'flex',
    marginTop: 20,
    maxWidth: 2000,
    overflowX: 'scroll',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  thumbnail: {
    width: 227,
    height: 170,
  }
};

// COMPONENT DEFINITION
const ListItems = (props) => {
  const { classes } = props;
  return (
    <div style={styles.container}>
      {preload.games.map(game => (
        <Card
          className={classes.card}
          component="a"
          game={game}
          href={game.url}
          key={game.name}
        >
          <CardContent>
            <img
              alt={game.name}
              className={classes.thumbnail}
              src={game.backgroundImageURL}
            />
            <Typography variant="headline" component="h2" style={{ fontWeight: 700 }}>
              {/* To prevent titles from using two lines, only allow 16 characters followed by ... */}
              {game.name.length > 16 ? `${game.name.slice(0, 16)}...` : game.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.button}
              color="primary"
              size="small"
              variant="raised"
            >
              Downloads
            </Button>
          </CardActions>
        </Card>
      ))
      }
    </div>
  );
}

ListItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItems);