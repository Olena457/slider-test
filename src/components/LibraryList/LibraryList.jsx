import { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Container,
  Modal,
  IconButton,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import LibraryCard from '../LibraryCard/LibraryCard';
import libraryData from '../../data/Library.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 500 },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const LibraryList = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = item => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <div id="library-section">
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Typography
          variant="h4"
          mb={6}
          component="h2"
          gutterBottom
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '1.8rem',
              md: '2.5rem',
            },
            textAlign: 'center',
          }}
        >
          Meet Our Library
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {libraryData.map(item => (
            <Grid
              key={item.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <LibraryCard item={item} onDescriptionClick={handleOpen} />
            </Grid>
          ))}
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={style}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: theme => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              sx={{ mb: 2 }}
            >
              {selectedItem?.title}
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              {selectedItem?.description}
            </Typography>
          </Box>
        </Modal>
      </Container>
    </div>
  );
};

export default LibraryList;
