// material
import { Box, Grid, Container, Typography } from '@mui/material';

// components
import Page from '../components/Page';
import {
  RequestedNDVI,
  AllLocations,
  ADI,
  TotalNDVI,
  OrderTimeline,
  NDVIRatio,
  ImageViewChart,
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | NDVI User">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <TotalNDVI />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <RequestedNDVI />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ADI />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AllLocations />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <ImageViewChart />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <NDVIRatio />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <OrderTimeline />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
