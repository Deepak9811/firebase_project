import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  console.log(user);
  return (
    <View style={styles.container}>
      <Image style={{width: 100, height: 100,borderRadius:5}} source={{uri:user.photoURL}}  />

      <Text>{user.displayName}</Text>

      <Text style={styles.text}>{user.uid}</Text>

      <FormButton buttonTitle={'Logout'} onPress={() => logout()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  text: {
    fontSize: 20,
    color: '#333333',
  },
});
