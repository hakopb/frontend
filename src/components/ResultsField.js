import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

export default function ResultsField(results) {

  const listItems = results.map((result) =>
    <ListItem>
      <h4>{result.time}</h4>
      <ListItemText sx={{ paddingLeft: 2 }} primary={result.price} secondary={result.route} />
      <Button variant="outlined">
        Book
      </Button>
    </ListItem>
  );

  return (
    <List sx={{ width: '100%' }}>
      {listItems}
    </List>
  );
}
