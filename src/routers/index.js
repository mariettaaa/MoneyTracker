import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  SignIn,
  SingUp,
  Home,
  TransactionHand,
  TransactionBank,
  Transaction,
} from '../pages';
import ButtomNavigator from '../components/ButtomNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainMenu = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const index = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SingUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransactionHand"
        component={TransactionHand}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransactionBank"
        component={TransactionBank}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
