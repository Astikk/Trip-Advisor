import React from 'react';
import UserList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id:1,
      name : "Max Scwerz",
      image : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      places : 3,}
    ]
  return <UserList items={USERS}/>;
};

export default Users;
