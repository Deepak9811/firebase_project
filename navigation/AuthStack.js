import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

console.disableYellowBox= true

const Stack = createNativeStackNavigator();

const AuthStack = ({navigation}) => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    GoogleSignin.configure({
      webClientId: '955469503934-i7vul6r4v5qs3daadrku2iggmcpgj51j.apps.googleusercontent.com',
    });

  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routeName}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={OnboardingScreen} name="Onboarding" />
        <Stack.Screen component={LoginScreen} name="Login" />

        <Stack.Screen component={SignupScreen} name="Signup" />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
