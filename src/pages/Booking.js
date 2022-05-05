import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputAdornment from '@mui/material/InputAdornment';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

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

const theme = createTheme();

const cities = ['Congo', 'Tripoli'];

const types = ['Standard', 'Weapons', 'Animals'];


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

export default function Booking() {
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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
            Book shipping
          </Typography>
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
                  options={cities}
                  autoFocus
                  required
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
                  options={cities}
                  required
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
                  <Button variant="outlined" onClick={handleOpen}>
                    View map
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={modalStyle}>
                      <img style={{ Width: "100%", maxHeight: "90vh" }}
                        src="../../africamap.jpg" alt="Afrika" />
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
                  sx={{ mt: 3, mb: 2 }}>
                  Search
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
