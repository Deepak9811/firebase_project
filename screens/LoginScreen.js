import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  StatusBar,
  Platform
} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const {login,googleLogin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#f9fafd'} barStyle="dark-content" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/rn-social-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>RN Social App</Text>
        </View>

        <FormInput
          labelValue={email}
          onChangeText={userEmail => setemail(userEmail)}
          placeholderText={'Email'}
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={userPassword => setpassword(userPassword)}
          placeholderText={'Password'}
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle={'Sign In'}
          onPress={() => login(email, password)}
        />

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Sign In With Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
            />

            <SocialButton
              buttonTitle="Sign In With Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={()=>googleLogin()}
            />
          </View>
        ) : null}

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navButtonText}>
            Don't have an account? Create here
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 15,
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2e64e5',
  },
});
