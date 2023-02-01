import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import BackAndName from '../../../components/BackAndName';
import CustomMechanicCard from '../../../components/CardComponent/CustomMechanicCard';

const AvailableRequests = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName
        onPress={() => navigation.goBack()}
        title="Available Requests"
      />
      <CustomMechanicCard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AvailableRequests;
