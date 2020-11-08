import React from 'react';
import ReactPlayer from 'react-player';
import useWindowSize from '../hooks/useWindowSize';

import { Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  border: {
    padding: '4px 0',
    background: 'linear-gradient(to right, #ff00cc, #333399)',
  },
});

const StreamPlayer = ({ activeStreamUrl }) => {
  const classes = useStyles();
  const size = useWindowSize();

  console.log(size.width);

  return (
    <Box display="flex" justifyContent="center">
      <ReactPlayer
        url={activeStreamUrl}
        playing
        pip
        width={size.width < 1280 ? size.width : 1280}
        height={size.height * 0.8}
      />
    </Box>
  );
};

export default StreamPlayer;
