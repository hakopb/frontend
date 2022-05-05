import '../App.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import TrackingField from '../components/TrackingField';

export default function Tracking() {

  const parcels = [
    { number: "ON28030", start: "start city", end: "end city", time: "18h" },
    { number: "ON28030", start: "start city", end: "end city", time: "18h" },
    { number: "ON28030", start: "start city", end: "end city", time: "18h" },
  ]

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {TrackingField(parcels)}
    </Container>
  );
}
