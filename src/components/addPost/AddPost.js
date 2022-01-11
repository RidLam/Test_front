import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddPost = ({
  createPost
}) => {
  const [formValues, setFormValues] = useState({
    title: '',
    body: ''
  });

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues({
      ...formValues, [name]: value
    })
  };

  return (
    <from>
      <div className="create_post">
        <h3>Create a new Post</h3>
        <div className="create_post_title">
          <TextField
            id="outlined-password-input"
            label="Title"
            type="text"
            name="title"
            fullWidth
            onChange={handleChange}
            required
          />
        </div>
        <div className="create_post_body">
          <TextField
            id="outlined-multiline-static"
            label="Body"
            multiline
            rows={4}
            defaultValue=""
            name="body"
            fullWidth
            onChange={handleChange}
            required
          />
        </div>
        <Button
          variant="contained"
          size="medium"
          fullWidth
          onClick={() => createPost(formValues)}
          disabled={!formValues.name && !formValues.body}
        >
          Create
        </Button>        
      </div>
    </from>
  );
};

export default AddPost;