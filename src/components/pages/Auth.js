import React from 'react';
import { authURL } from '../../API/twitchAPI';
import { Box, Button, Container, Typography } from '@material-ui/core';

const Login = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box color="white" textAlign="center" p={5}>
        <Box m={2}>
          <Typography variant="h4">Login to Twitch</Typography>
        </Box>
        <Typography variant="subtitle1">
          Please log in with your Twitch account in order to proceed.
        </Typography>
        <Box display="flex" justifyContent="center" m={2}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href={authURL}
          >
            Authorize
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
