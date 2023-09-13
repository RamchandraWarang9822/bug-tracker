import { FC } from 'react';
import { Sidebar, Feed } from "../components";
import { Box, Stack } from '@mui/material';

const Dashboard: FC = () => {

  return (
    <Box sx={{ height: "calc(100vh - 64px)" }}>
      <Stack direction="row" spacing={2} justifyContent="space-between" height="100%" position={'fixed'}>
        <Sidebar />
        <Box overflow={'auto'} sx={{flex:{ lg: 5 , sm:10}}}>
          <Feed />
        </Box>
      </Stack>

    </Box>
  )
}

export default Dashboard;
