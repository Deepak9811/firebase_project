import React from 'react';
import {AuthProvider} from './AuthProvider';
import Routes from './Routes';

const index = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default index;
