import React, { useState } from 'react';

import { Box, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
  },
});

const StreamControls = ({ getRandomStream, getNextStream, getPrevStream }) => {
  const classes = useStyles();
  const [started, setStarted] = useState(false);
  return (
    <Box
      display="flex"
      justifyContent="center"
      pt={2}
      pb={2}
      className={classes.root}
    >
      <ButtonGroup>
        <Button
          variant="contained"
          color="secondary"
          disabled={!started ? true : false}
          onClick={() => getPrevStream()}
        >
          <ArrowBackIcon />
          Prev
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            setStarted(true);
            getRandomStream();
          }}
        >
          {started ? 'Random' : 'Start'}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled={!started ? true : false}
          onClick={() => getNextStream()}
        >
          Next
          <ArrowForwardIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default StreamControls;
