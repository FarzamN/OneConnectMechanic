import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton';
import CustomVehiclesBox from '../../../components/CustomVehiclesBox';
import BackAndName from '../../../components/BackAndName';
import {moderateScale, scale} from 'react-native-size-matters';

const EditBank = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="Edit Vehicles" />

      <CustomVehiclesBox
        New_Vehicle="Edit Vehicle"
        LongText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
      />

      <CustomButton
        title="Save Bank"
        textStyle={{fontSize: scale(16)}}
        containerStyle={{
          width: '85%',
          paddingVertical: moderateScale(12),
          marginTop: scale(10),
        }}
      />
      <CustomButton
        title="DELETE"
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

export default EditBank;
