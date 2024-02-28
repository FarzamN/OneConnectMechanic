import React from 'react';
import {} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserNavigation from './UserNavigation';
import DrawerContainer from '../screens/DrawerContainer';
import {Color} from '../utils/Colors';

import Profile from '../screens/Mechanic/ProfileFolder/Profile';
import BusinessProfile from '../screens/Mechanic/ProfileFolder/BusinessProfile';
import AvailableRequests from '../screens/Mechanic/RequestFolder/AvailableRequests';

import CompletedJob from '../screens/Mechanic/SummaryFolder/CompletedJob';
import MyBank from '../screens/Mechanic/BankFolder/MyBank';

import Wallet from '../screens/Mechanic/WalletFolder/Wallet.js';
export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#1f1f1f',
        drawerActiveBackgroundColor: 'white',
        drawerInactiveTintColor: '#1f1f1f',
        drawerInactiveBackgroundColor: 'white',
        drawerLabelStyle: {
          marginLeft: -15,
        },
        drawerStyle: {
          borderBottomRightRadius: 50,
          borderTopRightRadius: 50,
        },
      }}
      initialRouteName="home1"
      drawerContent={props => <DrawerContainer {...props} />}>
      <Drawer.Screen
        name="home1"
        component={UserNavigation}
        options={{
          title: 'Home',
          drawerIcon: () => (
            <Ionicons name="md-home" size={20} color={Color.Main} />
          ),
        }}
      />
      <Drawer.Screen
        options={{
          title: 'Profile',
          drawerIcon: () => (
            <FontAwesome name="user" size={20} color={Color.Main} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <Drawer.Screen
        options={{
          title: 'Business Profile',
          drawerIcon: () => (
            <Foundation name="torso-business" size={20} color={Color.Main} />
          ),
        }}
        name="Business Profile"
        component={BusinessProfile}
      />
      <Drawer.Screen
        options={{
          title: 'New Requests',
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="dots-hexagon"
              size={20}
              color={Color.Main}
            />
          ),
        }}
        name="Requests"
        component={AvailableRequests}
      />

      <Drawer.Screen
        options={{
          title: 'Summary',
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="file-document-multiple"
              size={20}
              color={Color.Main}
            />
          ),
        }}
        name="completedjob"
        component={CompletedJob}
      />
      <Drawer.Screen
        options={{
          title: 'My Bank',
          drawerIcon: () => (
            <FontAwesome name="bank" size={20} color={Color.Main} />
          ),
        }}
        name="mybank"
        component={MyBank}
      />
      <Drawer.Screen
        options={{
          title: 'Wallet',
          drawerIcon: () => (
            <Entypo name="wallet" size={20} color={Color.Main} />
          ),
        }}
        name="wallet"
        component={Wallet}
      />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};
