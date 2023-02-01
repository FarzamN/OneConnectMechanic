import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomInput from '../../../components/CustomInput';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../../../utils/Colors';
import {useForm} from 'react-hook-form';
import BackAndName from '../../../components/BackAndName';
import CustomButton from '../../../components/CustomButton';

const EditService = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="Edit Services" />
      <CustomInput
        style={styles.CustomInputStyles}
        control={control}
        keyboardType="email-address"
        name="forget_pass"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="Name of the Service"
        placeholderTextColor={'#32323266'}
      />
      <CustomInput
        style={styles.CustomInputStyles}
        control={control}
        keyboardType="email-address"
        name="forget_pass"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="Base price of the Service"
        placeholderTextColor={'#32323266'}
      />
      <CustomInput
        style={[styles.CustomInputStyles, styles.BigOne]}
        control={control}
        keyboardType="email-address"
        name="forget_pass"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="Small Description"
        placeholderTextColor={'#32323266'}
      />
      <CustomButton title="Save Services" />
      <CustomButton title="Delete Services" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  CustomInputStyles: {
    width: '80%',
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: Color.Main,
    borderRadius: 20,
    marginBottom: scale(10),
    paddingHorizontal: moderateScale(20),
  },
  BigOne: {
    height: verticalScale(130),
    alignItems: 'flex-start',
  },
});
export default EditService;
