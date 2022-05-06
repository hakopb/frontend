import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function History() {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const ShipFromTo = "Tunis " + "⯈" + " Congo";
  const Duration = "8" + "h"
  const Price = "$" + "65"

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [parcels, setParcels] = useState(null);
  const [cities, setCities] = useState([]);

  const cityArray = ['Addis Abeba',
    'Amatave',
    'Bahr El Ghazal',
    'Cairo',
    'Congo',
    'Darfur',
    'Dakar',
    'De Kanariske Øer',
    'Dragebjerget',
    'Guldkysten',
    'Hvalbugten',
    'Kabalo',
    'Kap Guardafui',
    'Kap St. Marie',
    'Kapstaden',
    'Luanda',
    'Marrakesh',
    'Mocambique',
    'Omdurman',
    'Sahara',
    'Sierra Leone',
    'Slavekysten',
    'St. Helena',
    'Suakin',
    'Tanger',
    'Timbuktu',
    'Tripoli',
    'Tunis',
    'Victoriafaldene',
    'Victoriasøen',
    'Wadai',
    'Zanzibar'];

  const durations = [];


  useEffect(() => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('https://wa-oa-dk1.azurewebsites.net/api/Shipping', requestOptions) // TODO: Update fetch url
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setParcels(result);
          console.log(result[0].bookingLines[0].price);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

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
  },
    [])
  /*
  const listItems = parcels.map((parcel) =>
    <ListItem>
      <ListItemText
        primary={parcel.from}
      />
      <ListItemText
        primary={parcel.to}
      />
      <ListItemText align="right"
        primary={parcel.bookingLines[0].price}
      />
    </ListItem>
  );
  */

  if (parcels) {
    const listItems = (parcels.map((parcel, index) =>
      <ListItem>
        <ListItemText primary={cityArray[parcel.booking.startPosId - 1]} />
        <ListItemText align="left" primary={cityArray[parcel.booking.endPosId - 1]} />
        <ListItemText align="right" primary={"$" + parcel.bookingLines[0].price} />
      </ListItem>)
    );

    return (
      <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" align="center">
              History
            </Typography>
            <Demo>
              <List dense={dense}>
                {listItems}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    );
  }
  else {
    return (<p>Loading...</p>)
  }



}
