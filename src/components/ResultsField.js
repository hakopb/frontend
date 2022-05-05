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
    <Box>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl>
      <List sx={{ width: '100%' }}>
        {listItems}
      </List>
    </Box>
  );
}
