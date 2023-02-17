import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Collapse } from '@material-ui/core';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold'
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#D994CB',
    textShadow: '4px 6px 4px rgba(0,0,0,.5)'
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
    
  },
  goDown: {
    color: '#D994CB',
    fontSize: '4rem',
  },
  loginButton: {
    justifyContent: 'left',
    borderRadius: '60%',
    borderColor: '#D994CB',
    paddingColor: '#D994CB',
    background: '#D994CB',
    border:'10px solid #D994CB',
    textShadow: '2px 2px 6px rgba(0,0,0,.5)'
  },
  getMatched: {
    color: 'white',
    textShadow: '4px 6px 4px rgba(0,0,0,.5)',
    background: '#D994CB',
    padding: '20px',
    borderRadius: '20px'
  },
}));

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            scent<span className={classes.colorText}>Match</span>
          </h1>
          <h1 className={classes.loginButton}>
            Log in
          </h1>

          
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Let's make that first impression <br />
            before even <span className={classes.colorText}>speaking</span>
          </h1>
          <Link to='/questionnaire1'style={{textDecoration:'none'}}>
            <h1 className={classes.title}>
              <span className={classes.getMatched}>Get matched with your scent today</span>
            </h1>
          </Link>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
