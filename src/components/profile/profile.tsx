import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const Profile: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
          src: '/profile-placeholder.png',
        }}
      ></Avatar>
      <Typography variant="h6" color="text.primary">
        Welcome
      </Typography>
      <Typography variant="body1" color="text.primary">
        Your personal task manager
      </Typography>
    </Box>
  );
};
