import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/CustomButton';
import CustomVehiclesBox from '../../../components/CustomVehiclesBox';
import BackAndName from '../../../components/BackAndName';
import {moderateScale, scale} from 'react-native-size-matters';

const EditBank = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="Edit Bank" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomVehiclesBox
          New_Vehicle="Edit Bank"
          LongText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
        />

        <CustomButton
          title="Save Bank"
          textStyle={{fontSize: scale(16)}}
          containerStyle={{
            width: '85%',
            paddingVertical: moderateScale(15),
            marginTop: scale(25),
          }}
        />
        <CustomButton
          title="DELETE"
          textStyle={{fontSize: scale(16)}}
          containerStyle={{
            width: '85%',
            paddingVertical: moderateScale(15),
            marginTop: scale(25),
          }}
        />
      </ScrollView>
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
