import React from 'react';
import { Typography, Link } from '@material-ui/core/';
import useStyles from '../style';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://kunalgupta.ml/">
        Kunal Gupta
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}





export default function Footer() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Contact Me On :-  Kunalguptadev007@gmail.com 
        </Typography>
        <Typography  align="center" color="textSecondary" component="p">
          I am Always happy to work with new cutting else technology like funadb, graphql,wasm and much more..
        </Typography>
        <br/>
        <Copyright />
      </footer>
  );
}