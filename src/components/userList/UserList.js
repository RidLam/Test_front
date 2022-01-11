import React, { lazy, Suspense, useEffect, useState } from 'react';
import { getUsers } from '../../services/Networking';
import { filterByText } from '../../utils/ObjectUtils';
import '../../styles/UserList.css';

const SearchInput = lazy(() => import('./SearchInput'));
const UserTable = lazy(() => import('./Table'));

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [usersToDisplay, setUsersToDisplay] = useState([]);

  useEffect(async () => {
    const users = await getUsers();
    if (users && users.length) {
      setUsers(users);
      setUsersToDisplay(users);
    }
  }, []);

  const searchUser = (searchText) => {
    if (searchText) {
      const filtredUsers = filterByText(users, searchText);
      setUsersToDisplay(filtredUsers);
    } else {
      setUsersToDisplay(users);
    }
  };

  return (
    <div>
      <div className="search_input">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchInput
            searchUser={searchUser}
          />
        </Suspense>
      </div>
      <div className="user_table">
      <Suspense fallback={<div>Loading...</div>}>
        <UserTable
            users={usersToDisplay}
          />
      </Suspense>
        
      </div>
    </div>
  );
};

export default UserList;