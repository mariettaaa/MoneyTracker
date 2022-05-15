import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack, Pic} from '../../../assets/icons/index';
import {Gap} from '../../atoms';

const Header = ({title, title2, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
          <View style={styles.back}>
            <IconBack /> 
          </View>
        </TouchableOpacity>
      )}
      <Gap width={26} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text_2}>{title2}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  text_2: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  back: {
    padding: 10,
  },
});
