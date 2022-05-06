import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Hidden } from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '2%',
  maxWidth: 450,
  maxHeight: '95vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

/* const cities = ['Congo', 'Tripoli']; */

const types = ['Standard', 'Weapons', 'Animals'];

export default function SearchField(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }

  return (
    <Box
      sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <Typography component="h1" variant="h6">
        Choose route
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Autocomplete
              autoHighlight
              disablePortal
              id="combo-box-from"
              options={props.cities}
              getOptionLabel={(option) => option.first_name} // TODO: Update label
              autoFocus
              required
              onChange={e => props.setFromCity(e.target.value)}
              renderInput={params => {
                return (
                  <TextField
                    {...params}
                    label="From"
                    placeholder="Select city"
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position="start">
                            <LocationOnIcon />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      )
                    }}
                  />
                );
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              autoHighlight
              disablePortal
              id="combo-box-to"
              options={props.cities}
              getOptionLabel={(option) => option.last_name} // TODO: Update label
              required
              onChange={e => props.setToCity(e.target.value)}
              renderInput={params => {
                return (
                  <TextField
                    {...params}
                    label="To"
                    placeholder="Select city"
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position="start">
                            <LocationOnIcon />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      )
                    }}
                  />
                );
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Hidden only={['lg', 'xl']}>
                <Button variant="outlined" onClick={handleOpen}>
                  View map
                </Button>
              </Hidden>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle}>
                  <img style={{ Width: "100%", maxHeight: "90vh" }}
                    src="africamap.png" alt="Afrika" />
                  <Button variant="text" onClick={handleClose}>Close</Button>
                </Box>
              </Modal>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="weight"
              label="Weight (kg)"
              name="weight"
              fullWidth
              onChange={e => props.setWeight(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FitnessCenterIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="length"
              label="Length (cm)"
              name="length"
              onChange={e => props.setLength(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SquareFootIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="height"
              label="Height (cm)"
              name="height"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SquareFootIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="width"
              label="Width (cm)"
              name="width"
              onChange={e => props.setWidth(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SquareFootIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              autoHighlight
              disablePortal
              id="combo-box-types"
              options={types}
              onChange={e => props.setType(e.target.value)}
              renderInput={params => {
                return (
                  <TextField
                    {...params}
                    label="Type"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position="start">
                            <ContentPasteIcon />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      )
                    }}
                  />
                );
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              sx={{ width: 350 }}
              control={<Checkbox value="remember" color="primary" />}
              label="Exclude Telstar Logistics"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => props.setSubmit(true)}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
