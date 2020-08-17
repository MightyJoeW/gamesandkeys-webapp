import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DiscussionEmbed } from "disqus-react"

const Post2 = props => {
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
  const title = "Sheet Music Issue Fixed for Mobile Devices";
  const disqusConfig = {
    shortname: 'gamesandkeys',
    config: {
      url: `https://www.gamesandkeys.com${props.uri}`,
      identifier: props.location.key,
      title
    },
  }
  return (
    <div className={classes.container}>
      <h1> {title} </h1>
      <p>January 25, 2020</p>

      <div className={classes.text}>
        <img src="static/blog-2-images/the-choice.png" alt="The Last of Us Main Theme, Piano Tutorial YouTube Thumbnail" height="auto" width="100%" />

        <p>The long-time issue of attempting to view and download sheet music files on mobile devices has finally been resolved. </p>

        <p>The simple change from png files to pdf files stops the multi-page tutorials from automatically rotating.</p>


        <p>With the fix, you can now scroll the pdf files as you would a normal file or webpage.</p>


        <p>If you have any continued issues with viewing or downloading the sheet music files, contact me at themightyjoew@gmail.com or create an issue on <a className={classes.link} href="https://github.com/MightyJoeW/gamesandkeys-webapp/issues" target="_blank" rel="noopener noreferrer"><em>GitHub</em></a>.</p>
        <em>Leave a comment below if you have any thoughts, comments or questions.</em>
        <hr />
      </div>
      <DiscussionEmbed {...disqusConfig} />
    </div>
  );
};

export default Post2;