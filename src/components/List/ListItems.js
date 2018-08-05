// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Dependencies
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Internal Dependencies
import preload from '../../services/db.json';

const styles = {
  card: {
    margin: '0 5px',
    minWidth: 275,
    maxHeight: 325,
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    marginTop: 20,
    maxWidth: 2000,
    overflowX: 'scroll',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const ListItems = (props) => {
  const { classes } = props;
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div style={styles.container}>
      {preload.games.map(game => (
        <Card
          className={classes.card}
          key={game.name}
          game={game}
        >
          <CardContent>
            <img
              alt={game.name}
              src={game.backgroundImageURL}
              style={{ width: '100%' }}
            />
            <Typography variant="headline" component="h2" style={{ fontWeight: 700 }}>
              {/* To prevent titles from using two lines, only allow 16 characters followed by ... */}
              {game.name.length > 16 ? `${game.name.slice(0, 16)}...` : game.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => console.log('clicked')} size="small">Downloads</Button>
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