import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import BackAndName from '../../../components/BackAndName';
import CustomMechanicCard from '../../../components/CardComponent/CustomMechanicCard';
import {Color} from '../../../utils/Colors';

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
    backgroundColor: Color.White,
  },
});

export default AvailableRequests;
