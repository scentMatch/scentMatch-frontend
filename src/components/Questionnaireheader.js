import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold'
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  }
}));

function Questionnaireheader() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  
  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={10}
      >
        <div style={{display:'flex', justifyContent:'center'}} className={classes.container}>
          <h1 className={classes.title}>
            Describe your Saturday morning
          </h1>
        </div>
      </Collapse>
      <div style={{display:'flex', justifyContent:'center'}}>
        <img class='classes.image'style={{width: '20rem', padding:'2rem', transition: 'transform .2s', borderRadius:'5rem', '&:hover': {transform: 'scale(1.5)'}}} src="../assets/healthy.png"/>
        <img class='classes.image'style={{width: '20rem', padding:'2rem', transition: 'transform .2s', borderRadius:'5rem', '&:hover': {transform: 'scale(1.5)'}}} src="../assets/hungover.png"/>
        <img class='classes.image'style={{width: '20rem', padding:'2rem', transition: 'transform .2s', borderRadius:'5rem', '&:hover': {transform: 'scale(1.5)'}}} src="../assets/productive.png"/>
        <img class='classes.image'style={{width: '20rem', padding:'2rem', transition: 'transform .2s', borderRadius:'5rem', '&:hover': {transform: 'scale(1.5)'}}} src="../assets/selfcare.png"/>
      </div>
    </div>
  );
}

export default Questionnaireheader;