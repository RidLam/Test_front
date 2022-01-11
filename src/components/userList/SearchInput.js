import { FormControl, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';
import React, { useState } from 'react';

const SearchInput = ({
  searchUser
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setSearchValue(value)
    searchUser(value);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        value={searchValue}
        fullWidth
        placeholder="User search"
        onChange={handleChange}
        startAdornment={<Search />}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
      />
    </FormControl>
  );
};

export default SearchInput;