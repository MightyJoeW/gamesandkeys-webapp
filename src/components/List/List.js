// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

// Internal Dependencies
import preload from '../../services/db.json'

const container = {

}

const styles = {
  card: {
    cursor: 'pointer',
    minWidth: 275
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

function SimpleCard(props) {
  const { classes } = props;
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div style={container}>
      {preload.games.map(game => (
        <Card
          key={game.name}
          game={game}
          className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              Games and Keys
          </Typography>
            <img
              alt={game.name}
              src={game.backgroundImageURL}
            />
            <Typography variant="headline" component="h2">
              {game.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {`Original Composer: ${game.info.originalComposer}`}
            </Typography>
            <Typography component="p">
              cards for each game tutorials will be <br />
              displayed across the dashboard
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Downloads</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);