import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Home from '../screens/Mechanic/Home';
import Notification from '../screens/Mechanic/Notification';

import MyServices from '../screens/Mechanic/ServicesFolder/MyServices';
import AddServices from '../screens/Mechanic/ServicesFolder/AddServices';
import EditService from '../screens/Mechanic/ServicesFolder/EditService';
import Location from '../screens/Mechanic/RequestFolder/Location';
import Progress from '../screens/Mechanic/RequestFolder/Progress';
import Bill from '../screens/Mechanic/RequestFolder/Bill';
import Summary from '../screens/Mechanic/SummaryFolder/Summary';
import AddBank from '../screens/Mechanic/BankFolder/AddBank';
import EditBank from '../screens/Mechanic/BankFolder/EditBank';
import BankSelection from '../screens/Mechanic/BankFolder/BankSelection';
import MainTransactions from '../screens/Mechanic/WalletFolder/MainTransactions';
const Stack = createNativeStackNavigator();
const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="notification" component={Notification} />
      <Stack.Screen name="myservices" component={MyServices} />
      <Stack.Screen name="addservices" component={AddServices} />
      <Stack.Screen name="editservice" component={EditService} />
      <Stack.Screen name="location" component={Location} />
      <Stack.Screen name="progress" component={Progress} />
      <Stack.Screen name="bill" component={Bill} />
      <Stack.Screen name="summary" component={Summary} />
      <Stack.Screen name="addbank" component={AddBank} />
      <Stack.Screen name="editbank" component={EditBank} />
      <Stack.Screen name="bankselection" component={BankSelection} />
      <Stack.Screen name="maintransactions" component={MainTransactions} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
