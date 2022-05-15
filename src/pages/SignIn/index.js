import {
    StyleSheet,
    View,
    Text,
    TextInput as TextInput_React_Native,
  } from 'react-native';
  import React from 'react';
  import {Button, Gap, Header, TextInput} from '../../components';
  import {showMessage} from 'react-native-flash-message';
  
  const SignIn = ({navigation}) => {
    return (
      <View style={styles.page}>
        <Header title="Sign in" />
        <View style={styles.contentWrapper}>
          <TextInput
            title="Email Address"
            placeholder="type your email address"
          />
          <Gap height={16} />
          <Text style={styles.Text_Password}>Password</Text>
          <TextInput_React_Native
            style={styles.Input_Text}
            title="Password"
            placeholder="Type your password"
            secureTextEntry={true}
          />
          <Gap height={24} />
          <Button
            title="Sign in"
            onPress={() => {
              navigation.navigate('MainMenu');
              showMessage({
                message: 'Info',
                description: 'Welcome to Money Tracker',
                type: 'info',
              });
            }}
          />
          <Gap height={12} />
          <Button
            title="Create New Account"
            color="#8D92A3"
            textColor="white"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    );
  };
  
  export default SignIn;
  
  const styles = StyleSheet.create({
    page: {
      flex: 1,
    },
    contentWrapper: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 24,
      paddingTop: 26,
      marginTop: 24,
    },
    Text_Password: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      marginBottom: 6,
      color: '#000000',
    },
    Input_Text: {
      borderWidth: 1,
      borderColor: '#020202',
      borderRadius: 8,
      paddingLeft: 10,
      paddingHorizontal: 10,
    },
  });
  