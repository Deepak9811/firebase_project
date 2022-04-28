import React, {useContext, useState, useEffect} from 'react';
import {NavigationContext} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setinitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setinitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <>{user ? <AppStack /> : <AuthStack />}</>
    //    <NavigationContext>
    // <AuthStack />
    //    </NavigationContext>
  );
};

export default Routes;
