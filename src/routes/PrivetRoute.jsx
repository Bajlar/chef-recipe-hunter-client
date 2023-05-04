import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivetRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  if(loading) {
    return <Spinner animation="border" variant="primary" />
  }

  if(user) {
    return children;
  }
  return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivetRoute;