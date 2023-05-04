import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivetRoute = ({Children}) => {
  const {user, loading} = useContext(AuthContext);
  if(loading) {
    return <Spinner animation="border" variant="primary" />
  }

  if(user) {
    return Children;
  }
  return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivetRoute;