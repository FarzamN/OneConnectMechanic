import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import BackAndName from '../../../components/BackAndName';
import CustomVehiclesBox from '../../../components/CustomVehiclesBox';
import CustomButton from '../../../components/CustomButton';
import {moderateScale, scale} from 'react-native-size-matters';

const AddBank = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="Add Bank" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomVehiclesBox
          New_Vehicle="Add New Bank"
          LongText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
        />
        <CustomButton
          title="Add Bank"
          textStyle={{fontSize: scale(16)}}
          containerStyle={{
            width: '90%',
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

export default AddBank;
