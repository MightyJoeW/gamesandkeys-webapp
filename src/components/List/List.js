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
  display: 'grid',
  gridGap: '1em',
  gridTemplateColumns: 'repeat(4, 1fr)',
  marginTop: 20
}

const styles = {
  card: {
    margin: '0 5px',
    minWidth: 275,
    textAlign: 'center'
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
            {/* <Typography className={classes.title} color="textSecondary">
              Games and Keys
      </Typography> */}
            <img
              alt={game.name}
              src={game.backgroundImageURL}
              style={{ width: '100%' }}
            />
            <Typography variant="headline" component="h2" style={{ fontWeight: 700 }}>
              {game.name}
            </Typography>
            {/*<Typography className={classes.pos} color="textSecondary">
              {`Original Composer(s): ${game.info.originalComposer}`}
      </Typography> */}
            {/*<Typography component="p">
              Link to Sheet Music <br />
              Link to Midi File
    </Typography> */}
          </CardContent>
          <CardActions>
            <Button size='small' style={{ margin: '0 auto' }}>Downloads</Button>
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