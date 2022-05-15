import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const Transaction = () => {
  return (
    <View style={styles.page}>
      <Header title="Page Transaction" />
      <View style={styles.contentWrapper}>
        <Text>.</Text>
      </View>
    </View>
  );
};

export default Transaction;

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
});
