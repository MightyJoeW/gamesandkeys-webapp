import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Post2 = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      width: '50vw',
      margin: '0 auto 45px auto',
      padding: 15,
      [theme.breakpoints.down('sm')]: {
        width: '90vw'
      },
      sectionHeader: {
        fontSize: 22
      }
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1> Sheet Music Issue Fixed for Mobile Devices </h1>

      <img src="static/blog-2-images/the-choice.png" alt="The Last of Us Main Theme, Piano Tutorial YouTube Thumbnail" height="auto" width="100%" />

      <p>The long-time issue of attempting to view and download sheet music files on mobile devices has finally been resolved. </p>

      <p>The simple change from png files to pdf files stops the multi-page tutorials from automatically rotating.</p>


      <p>With the fix, you can now scroll the pdf files as you would a normal file or webpage.</p>


      <p>If you have any continued issues with vieweing or downloading the sheet music files, contact me at themightyjoew!gmail.com or create an issue on <a className={classes.link} href="https://github.com/MightyJoeW/gamesandkeys-webapp/issues" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </div>
  );
};

export default Post2;