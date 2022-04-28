import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {} from 'react-native-paper';

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => {
  return (
    <TouchableOpacity style={{padding: 10, marginLeft: 10}}>
      <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>Skip</Text>
    </TouchableOpacity>
  );
};

const Next = ({...props}) => {
  return (
    <TouchableOpacity {...props} style={{padding: 10, marginRight: 12}}>
      <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>Next</Text>
    </TouchableOpacity>
  );
};

const Done = ({...props}) => {
  return (
    <TouchableOpacity {...props} style={{padding: 10, marginRight: 12}}>
      <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>Done</Text>
    </TouchableOpacity>
  );
};

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      <Onboarding
        DotComponent={Dots}
        DoneButtonComponent={Done}
        NextButtonComponent={Next}
        // SkipButtonComponent={Skip}
        onSkip={() => navigation.replace('Login')}
        onDone={() => navigation.replace('Login')}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/onboarding-img1.png')} />,
            title: 'Connect To The World',
            subtitle: 'A New Way To Connect With The World',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/onboarding-img2.png')} />,
            title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind of People',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../assets/onboarding-img3.png')} />,
            title: 'Become The Star',
            subtitle: 'Let The Spot Light Capture You',
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
