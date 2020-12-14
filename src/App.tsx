import React from 'react';

import {CssBaseline, AppBar, Toolbar, Typography }from '@material-ui/core/';

import useStyles from './style';

import CustomGrid from './component/customGrid'
import Footer from './component/footer'
import Hero from './component/hero'



export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Demo assignment
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Hero />
        {/*Hero Unit End  */}
       
        {/* Custom Grid unit */}
        <CustomGrid />
        {/*Custom Grid End  */}

        
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}