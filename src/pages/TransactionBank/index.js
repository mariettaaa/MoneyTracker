import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {showMessage} from 'react-native-flash-message';

const TransactionBank = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <Header title="Cash On Bank" onBack={() => navigation.goBack()} />
        <View style={styles.contentWrapper}>
          <TextInput title={'Description'} placeholder="Add the description" />
          <Gap height={17} />
          <TextInput title={'Type'} placeholder="Debit / Credit" />
          <Gap height={24} />
          <Button
            title={'Save'}
            onPress={() => {
              showMessage({
                message: 'Success',
                description: 'Your Transactions is complete',
                type: 'success',
              });
            }}
          />
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>Last 3 Transactions</Text>
          <View style={styles.contentWrapper1}>
            <View>
              <Text style={styles.Last_Transactions_text}>17 April 2020</Text>
              <Text style={styles.Last_Transactions_text_Bold}>
                Water, Food
              </Text>
            </View>
            <View>
              <Text style={styles.Transaction_In}>-Rp.300.000</Text>
            </View>
          </View>
          <View style={styles.contentWrapper1}>
            <View>
              <Text style={styles.Last_Transactions_text}>18 April 2020</Text>
              <Text style={styles.Last_Transactions_text_Bold}>
                Office supplies
              </Text>
            </View>
            <View>
              <Text style={styles.Transaction_In}>-Rp.300.000</Text>
            </View>
          </View>
          <View style={styles.contentWrapper1}>
            <View>
              <Text style={styles.Last_Transactions_text}>19 April 2020</Text>
              <Text style={styles.Last_Transactions_text_Bold}>Top up</Text>
            </View>
            <View>
              <Text style={styles.Transaction_Out}>+Rp.300.000</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TransactionBank;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 52,
    marginTop: 24,
  },
  contentWrapper1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    marginTop: 10,
    paddingTop: 10,
    padding: 10,
    borderRadius: 10,

    //shadow contener Last 3 Transactions
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  Last_Transactions_text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  Last_Transactions_text_Bold: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  Transaction_In: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#D9435E',
    alignItems: 'flex-end',
  },
  Transaction_Out: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#1ABC9C',
    alignItems: 'flex-end',
  },
});
