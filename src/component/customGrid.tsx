import React from 'react';

import { Card, CardContent, CardMedia, CardActions  } from '@material-ui/core/'
import { Container, Typography, Grid, IconButton }  from '@material-ui/core/';
import FavoriteIcon  from '@material-ui/icons/Favorite'
import ShareIcon  from '@material-ui/icons/Share'
import useStyles from '../style';

const cards = [1, 2, 3, 4, 5, 6];
function CustomGrid() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
          <Typography className={classes.gridHeader} component="h1" variant="h4" align="center" color="textPrimary" >
                Gird Heading ...
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>

                </CardActions>

                </Card>
              </Grid>
            ))}
          </Grid>
    </Container>
  );
}

export default CustomGrid;
