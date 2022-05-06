import '../App.css';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import TrackingField from '../components/TrackingField';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Tracking() {
  const parcels = [
    { id: 1, number: "ON28030", start: "start city", end: "end city", time: "18h" },
    { id: 2, number: "ON28030", start: "start city", end: "end city", time: "18h" },
    { id: 3, number: "ON28030", start: "start city", end: "end city", time: "18h" },
  ]
 
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true); // TODO: Set to false
  /*
  const [parcels, setParcels] = useState(null);

  useEffect(() => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('https://wa-oa-dk1.azurewebsites.net/api/Tracking', requestOptions) // TODO: Update fetch url
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setParcels(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])
  */

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {TrackingField(parcels)}
    </Container>
  )}
}
