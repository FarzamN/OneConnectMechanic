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
        name="name_of_the_service"
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
        name="base_price_of_the_service"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="Base price of the Service"
        placeholderTextColor={'#32323266'}
      />
      <CustomInput
        multiline={true}
        style={[styles.CustomInputStyles, styles.BigOne]}
        control={control}
        keyboardType="email-address"
        name="small_description"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="Small Description"
        placeholderTextColor={'#32323266'}
      />
      <CustomButton
        containerStyle={{marginTop: scale(25), width: '85%'}}
        title="Save Services"
      />
      <CustomButton
        containerStyle={{marginTop: scale(25), width: '85%'}}
        title="Delete Services"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  CustomInputStyles: {
    width: '85%',
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
