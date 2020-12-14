import React from 'react';

import useStyles from '../style';
import { Container, Typography, Grid, Button }  from '@material-ui/core/';


export default function Hero() {
  const classes = useStyles();
  return (
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Hero Section
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est harum excepturi, ut velit neque totam reiciendis 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Primary Button
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Button
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
  );
}