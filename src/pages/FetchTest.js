import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchField from '../components/SearchField';
import { useState, useEffect } from 'react';

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

export default function FetchTest() {
  /* Fetching */
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([])

  useEffect(() => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'GET',
      /*headers: { 'Content-Type': 'application/json' },*/
    };
    fetch('https://wa-oa-dk1.azurewebsites.net/api/routes', requestOptions) // TODO: Update fetch url
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result.data);
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

  return (
    <>
      hei
    </>
  )
  /* Render component
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Typography component="h1" variant="h3">
            Book shipping
          </Typography>
          <SearchField cities={items} />
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
  }
  */
}