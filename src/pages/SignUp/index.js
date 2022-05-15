import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput as TextInput_React_Native,
  } from 'react-native';
  import React, {useState} from 'react';
  import {Button, Gap, Header, TextInput} from '../../components';
  import {launchImageLibrary} from 'react-native-image-picker';
  import {showMessage} from 'react-native-flash-message';
  
  const SingUp = ({navigation}) => {
    const [photo, setPhoto] = useState('');
  
    const [hasPhoto, setHasPhoto] = useState(false);
  
    const getPhoto = async () => {
      const result = await launchImageLibrary({
        maxHeight: 200,
        maxWidth: 200,
        includeBase64: true,
      });
  
      if (result.didCancel) {
        setHasPhoto(false);
        showMessage({
          message: 'Upload foto dibatalkan',
          type: 'default',
          backgroundColor: '#D9435E',
          color: 'white',
        });
      } else {
        setPhoto(result.assets[0].uri);
        setHasPhoto(true);
        showMessage({
          message: 'Foto telah terupload',
          type: 'default',
          backgroundColor: '#55CB95',
          color: 'white',
        });
      }
    };
  
    return (
      <View style={styles.Page}>
        <Header title="Sign Up" onBack={() => navigation.goBack()} />
        <View style={styles.contentWrapper}>
          <View style={styles.avatarWrapper}>
            <View style={styles.border}>
              <TouchableOpacity onPress={getPhoto} activeOpacity={0.7}>
                {!hasPhoto && (
                  <View style={styles.addPhoto}>
                    <Text style={styles.addPhotoText}>Add Photo</Text>
                  </View>
                )}
                {hasPhoto && (
                  <Image source={{uri: photo}} style={styles.avatar} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TextInput title={'Full name'} placeholder="Enter your full name" />
          <Gap height={16} />
          <TextInput
            title={'Email Address'}
            placeholder="Enter your email address"
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
            title={'Continue'}
            onPress={() => {
              navigation.navigate('SignIn');
              showMessage({
                message: 'Success',
                description: 'Create Account',
                type: 'success',
              });
            }}
          />
        </View>
      </View>
    );
  };
  
  export default SingUp;
  
  const styles = StyleSheet.create({
    Page: {
      flex: 1,
    },
    contentWrapper: {
      flex: 1,
      backgroundColor: 'white',
      marginTop: 24,
      paddingHorizontal: 24,
    },
    addPhoto: {
      height: 90,
      width: 90,
      backgroundColor: '#F0F0F0',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 90,
    },
    avatar: {
      height: 90,
      width: 90,
      borderRadius: 90,
    },
    addPhotoText: {
      fontSize: 14,
      fontFamily: 'Poppins-light',
      maxWidth: 40,
      textAlign: 'center',
    },
    border: {
      borderWidth: 1,
      borderColor: '#8D92A3',
      width: 110,
      height: 110,
      borderRadius: 110,
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'dashed',
    },
    avatarWrapper: {
      alignItems: 'center',
      marginTop: 26,
      marginBottom: 16,
      justifyContent: 'center',
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
  