import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchField from '../components/SearchField';
import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { Hidden } from '@mui/material';
import { useTheme } from '@emotion/react';
import ResultsField from '../components/ResultsField';

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

export function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

// TODO: Write functions for passing selections between components

export default function Booking() {
  /* Fetching */
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error2, setError2] = useState(null);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const [cities, setCities] = useState([]);
  const [fromCity, setFromCity] = useState(null);
  const [toCity, setToCity] = useState(null);
  const [weight, setWeight] = useState(null);
  const [length, setLength] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [type, setType] = useState(null);

  /* Result handling */
  const [submit, setSubmit] = useState(null);
  const [results, setResults] = useState(null);
  const [filter, setFilter] = useState([null]);
  const [skipCount, setSkipCount] = useState(true);

  const firstRender = useFirstRender();

  const renderResults = () => {
    if(results) {
      return <ResultsField results={results} />
    } else {
      return <></>
    }
  }

  // TODO: Remove this and make it dynamic
  const jsonData = {
    "source": "Dragebjerget",
    "destination": "Kap Guardafui",
    "height": 0,
    "width": 0,
    "length": 0,
    "weight": 0,
    "category": "weapon"
  }

  useEffect(() => {
    if (skipCount) setSkipCount(false);
    if (!skipCount) {
      // Simple POST request with a JSON body using fetch
      const requestOptions = {
        method: 'POST',
        headers: {
          'accept': 'text/plain',
          'Content-Type': 'application/json',
          'body': JSON.stringify(jsonData) },
      };
      fetch('https://wa-oa-dk1.azurewebsites.net/api/Routes', requestOptions) // TODO: Update fetch url
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded2(true);
          setResults(result.data);
          console.log(result.data);
        },
        (error) => {
          setIsLoaded2(true);
          setError2(error);
        }
      )
    }
  }, [submit])

  useEffect(() => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('https://wa-oa-dk1.azurewebsites.net/api/city', requestOptions) // TODO: Update fetch url
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setCities(result);
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
          <SearchField 
            cities={cities} 
            setFromCity={setFromCity} 
            setToCity={setToCity} 
            setWeight={setWeight} 
            setLength={setLength} 
            setWidth={setWidth} 
            setHeight={setHeight} 
            setType={setType} 
            setSubmit={setSubmit}
            setResults={setResults}
            setFilter={setFilter} />
          </div>
          <Hidden only={['xs', 'sm', 'md']}>
          <img style={{ Width: "100%", maxHeight: "90vh" }}
          src="https://i.ibb.co/2sJ93p1/africamap.jpg" alt='Africa'/>
          </Hidden>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
          {renderResults()}
        </Container>
      </ThemeProvider>
    );
  }
}
