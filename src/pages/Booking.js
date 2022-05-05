import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const style = {
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

export default function Booking() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Button variant="outlined" onClick={handleOpen}
            sx={{ marginTop: "100px" }}
          >View map</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img style={{ Width: "100%", maxHeight: "90vh" }}
                src="../../africamap.jpg" alt="Afrika" />
              <Button variant="text" onClick={handleClose}>Close</Button>
            </Box>
          </Modal>
        </div>
      </Container>
    </ThemeProvider>
  );
}
