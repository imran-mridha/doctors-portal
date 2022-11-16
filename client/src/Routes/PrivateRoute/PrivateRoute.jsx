import React, { useContext } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);

  const location = useLocation()

  if (loading) {
    // return <div className='h-screen flex justify-center items-center'>
    //   <CirclesWithBar
    //           height="100"
    //           width="100"
    //           color="#E6BE05"
    //           wrapperStyle={{}}
    //           wrapperClass=""
    //           visible={true}
    //           outerCircleColor=""
    //           innerCircleColor=""
    //           barColor=""
    //           ariaLabel='circles-with-bar-loading'
    //         />
    // </div>
    return <Loader />
  }
  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;