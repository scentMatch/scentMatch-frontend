import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Questionnaireheader from '../components/Questionnaireheader'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#8691D9',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

function Questionnaire1() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Questionnaireheader/>
    </div>
  );
}

export default Questionnaire1;