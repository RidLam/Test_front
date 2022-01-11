import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const UserTable =({
  users
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="left">ADDRESS</TableCell>
            <TableCell align="left">PHONE</TableCell>
            <TableCell align="left">WEBSITE</TableCell>
            <TableCell align="left">EDIT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              data-testid={`user_row_${user.id}`}
            >
              <TableCell component="th" scope="row">
                <div className="user_list_name">
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                </div>
              </TableCell>
              <TableCell align="left">
              {`${user.address.street},`}
              <strong>{user.address.city}</strong>
              </TableCell>
              <TableCell align="left">{user.phone}</TableCell>
              <TableCell align="left">
                <div className="user_list_website">
                  <a target="_blank" href={`http://${user.website}`}>{user.website}</a>
                </div>
              </TableCell>
              <TableCell align="left">
                <Button
                  variant="contained"
                  size="small"
                >
                  <Link
                    to={`/user/${user.id}/posts`}
                    className="user_list_edit"
                  >
                    Edit
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
