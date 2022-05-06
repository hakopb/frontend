import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ListItem, ListItemButton } from '@mui/material';
import List from '@mui/material/List';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TrackingDetailsField from './TrackingDetailsField';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Link, matchRoutes, useLocation } from "react-router-dom";

/*
function handleParcelSelect(parcel) {
  selectedParcel = parcel;
  detailedView = true;
}
*/

export default function TrackingField(parcels) {
  const listItems = parcels.map((parcel) =>
      <ListItem key={parcel.id}>
        <ListItemButton component={Link} to={'' + parcel.id} sx={{ display: "flex", justifyContent: "space-between" }}>
          <span>{parcel.number}</span>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span>{parcel.start}</span>
            <ArrowRightIcon />
            <span>{parcel.end}</span>
          </Box>
          <span>{parcel.time}</span>
        </ListItemButton>
      </ListItem>
  );

  return (
    <Box>
      <Typography component="h1" variant="h3">
        Tracking
      </Typography>
      <List sx={{ width: '100%' }}>
        {listItems}
      </List> :
    </Box>
  );
}