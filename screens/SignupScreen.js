import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import {Appbar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const {register} = useContext(AuthContext);

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Appbar.Header style={styles.ttl}>
        <TouchableOpacity
          style={{paddingLeft: '2%'}}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" color="#05375a" size={25} />
        </TouchableOpacity>
        {/* <Appbar.Content title="Your Profile Details" /> */}
      </Appbar.Header>

      <View style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>Create an account</Text>
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

          <FormInput
            labelValue={confirmPassword}
            onChangeText={userPassword => setconfirmPassword(userPassword)}
            placeholderText={'Confirm Password'}
            iconType="lock"
            secureTextEntry={true}
          />

          <FormButton
            buttonTitle={'Sign Up'}
            onPress={() => register(email, password)}
          />

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By registering, you confirm that you accept our
            </Text>
            <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
              <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                Terms of service
              </Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}> and </Text>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Privacy Policy
            </Text>
          </View>

          {Platform.OS === 'android' ? (
            <View>
              <SocialButton
                buttonTitle="Sign Up With Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
              />

              <SocialButton
                buttonTitle="Sign Up With Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
              />
            </View>
          ) : null}

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navButtonText}>Have an account? Sign In</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  ttl: {
    backgroundColor: '#f9fafd',
  },

  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
    alignItems: 'center',
  },

  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2e64e5',
  },

  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 18,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
});
