import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { useEffect, useState } from 'react';

export default function ResultsField(props) {
  const [radioValue, setRadioValue] = React.useState("best");

  const listItems = props.results.map((result) =>
    <ListItem>
      <h4>{result.time}</h4>
      <ListItemText sx={{ paddingLeft: 2 }} primary={result.price} secondary={result.route} />
      <Button variant='contained'>
        Book
      </Button>
    </ListItem>
  );

  useEffect(() => {
    console.log(radioValue);
  }, [radioValue])

  return (
    <Box>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={radioValue}
        >
          <FormControlLabel value="best" control={<Radio />} label="Best" onClick={() => setRadioValue("best")} />
          <FormControlLabel value="fastest" control={<Radio />} label="Fastest" onClick={() => setRadioValue("fastest")} />
          <FormControlLabel value="cheapest" control={<Radio />} label="Cheapest" onClick={() => setRadioValue("cheapest")} />
        </RadioGroup>
      </FormControl>
      <List sx={{ width: '100%' }}>
        {listItems}
      </List>
    </Box>
  );
}
