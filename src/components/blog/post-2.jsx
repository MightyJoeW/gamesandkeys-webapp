import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Post2 = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      width: '40vw',
      margin: '0 auto 45px auto',
      padding: 15,
      [theme.breakpoints.down('sm')]: {
        width: '90vw'
      }
    },
    text: {
      lineHeight: 1.75,
      fontSize: '1.2em'
    },
    link: {
      color: '#b17acc',
      textDecoration: 'none'
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1> Sheet Music Issue Fixed for Mobile Devices </h1>

      <div className={classes.text}>
        <img src="static/blog-2-images/the-choice.png" alt="The Last of Us Main Theme, Piano Tutorial YouTube Thumbnail" height="auto" width="100%" />

        <p>The long-time issue of attempting to view and download sheet music files on mobile devices has finally been resolved. </p>

        <p>The simple change from png files to pdf files stops the multi-page tutorials from automatically rotating.</p>


        <p>With the fix, you can now scroll the pdf files as you would a normal file or webpage.</p>


        <p>If you have any continued issues with viewing or downloading the sheet music files, contact me at themightyjoew@gmail.com or create an issue on <a className={classes.link} href="https://github.com/MightyJoeW/gamesandkeys-webapp/issues" target="_blank" rel="noopener noreferrer"><em>GitHub</em></a>.</p>
      </div>
    </div>
  );
};

export default Post2;