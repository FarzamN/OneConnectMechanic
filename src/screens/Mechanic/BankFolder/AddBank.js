import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import BackAndName from '../../../components/BackAndName';
import CustomVehiclesBox from '../../../components/CustomVehiclesBox';
import CustomButton from '../../../components/CustomButton';
import {moderateScale, scale} from 'react-native-size-matters';

const AddBank = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="Add Bank" />
      <CustomVehiclesBox
        New_Vehicle="Add New Bank"
        LongText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
      />
      <CustomButton
        title="Add Bank"
        textStyle={{fontSize: scale(16)}}
        containerStyle={{
          width: '85%',
          paddingVertical: moderateScale(12),
          marginTop: scale(10),
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AddBank;
