import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getPostComments } from '../../services/Networking';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  maxHeight: '80vh',
    ['@media (max-width:600px)']: {
    width: '95%'
  },
  overflowY: 'scroll',
  bgcolor: 'background.paper',
  border: '0px solid',
  p: 4,
};

const PostDetailModal = ({
  openModal,
  post,
  closeModel
}) => {
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    const comments = await getPostComments(post.id);
    if (comments) {
      setComments(comments);
    }
  }, [post]);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="post_detail_title">
            <h3>{post.title}</h3>
          </div>
          <div>
            <p>{post.body}</p>
          </div>
          <div className="post_detail_comment">
            <span>{`Comments(${comments.length})`}</span>
            <hr />
            {
              comments && comments.length &&
              comments.map(comment => {
                return (
                  <div
                    key={comment.id}
                    className="comment_block"
                  >
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                    <h5>{comment.email}</h5>
                  </div>
                )
              })
            }
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default PostDetailModal;