import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchField from '../components/SearchField';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Hidden } from '@mui/material';
import { useTheme } from '@emotion/react';

const theme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Oceanic Airlines
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO: Write functions for passing selections between components

export default function Booking() {
  /* Fetching */
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cities, setCities] = useState([]);
  const [fromCity, setFromCity] = useState(null);
  const [toCity, setToCity] = useState(null);
  const [weight, setWeight] = useState(null);
  const [length, setLength] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'GET',
      /*headers: { 'Content-Type': 'application/json' },*/
    };
    fetch('https://reqres.in/api/users?page=2', requestOptions) // TODO: Update fetch url
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setCities(result.data);
        console.log(result.data);
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

  /* Render component */
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
          <div>
          <Typography component="h1" variant="h3">
            Book shipping
          </Typography>
          <SearchField cities={cities} setFromCity={setFromCity} setToCity={setToCity} setWeight={setWeight} setLength={setLength} setWidth={setWidth} setHeight={setHeight} setType={setType} />
          </div>
          <Hidden only={['xs', 'sm', 'md']}>
          <img style={{ Width: "100%", maxHeight: "90vh" }}
          src="../../africamap.jpg" alt='Africa'>
          </img>
          </Hidden>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
  }
}
