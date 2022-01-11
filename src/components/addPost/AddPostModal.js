import React, { lazy } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const AddPost = lazy(() => import('./AddPost'));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  maxHeight: '80vh',
  maxHeight: '80vh',
    ['@media (max-width:600px)']: {
    width: '95%'
  },
  overflowY: 'scroll',
  bgcolor: 'background.paper',
  border: '0px solid',
  p: 4,
};

const AddPostModal = ({
  openModal,
  closeModel,
  createPost
}) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddPost
            createPost={createPost}
          /> 
        </Box>
      </Modal>
    </div>
  );
}

export default AddPostModal;