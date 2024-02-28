import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';
import CustomInput from './CustomInput';
import {Color} from '../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
const CustomVehiclesBox = props => {
  const [index, setIndex] = useState(99);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

  return (
    <View style={styles.WorkContainer}>
      <Text style={styles.New_Vehicle}>{props.New_Vehicle}</Text>
      <Text style={styles.LongText}>{props.LongText}</Text>
      <CustomInput
        Hello={{width: '100%'}}
        onFocus={() => {
          setIndex(0);
        }}
        style={
          index === 0
            ? {
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: Color.Main,
              }
            : {
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: Color.borderColor,
              }
        }
        control={control}
        keyboardType="email-address"
        name="bank_name"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="Bank name"
        placeholderTextColor={'#32323266'}
      />
      <CustomInput
        Hello={{width: '100%'}}
        onFocus={() => {
          setIndex(2);
        }}
        style={
          index === 2
            ? {
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: Color.Main,
              }
            : {
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: Color.borderColor,
              }
        }
        control={control}
        keyboardType="numeric"
        name="account_number"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="IBAN/Account number"
        placeholderTextColor={'#32323266'}
      />
      <CustomInput
        Hello={{width: '100%'}}
        onFocus={() => {
          setIndex(3);
        }}
        style={
          index === 3
            ? {
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: Color.Main,
              }
            : {
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: Color.borderColor,
              }
        }
        control={control}
        keyboardType="email-address"
        name="account_holder_name"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="Account holder name"
        placeholderTextColor={'#32323266'}
      />
      <CustomInput
        Hello={{width: '100%'}}
        onFocus={() => {
          setIndex(4);
        }}
        style={
          index === 4
            ? {
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: Color.Main,
              }
            : {
                borderTopWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: Color.borderColor,
              }
        }
        control={control}
        keyboardType="numeric"
        name="Account_routing_number"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="Account routing number"
        placeholderTextColor={'#32323266'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  New_Vehicle: {
    color: Color.Black,
    fontSize: scale(20),
    fontWeight: '600',
    marginBottom: scale(10),
  },
  LongText: {
    color: Color.placeholderTextColor,
    fontWeight: '400',
    fontSize: scale(13),
    lineHeight: 20,
  },
  WorkContainer: {
    marginHorizontal: scale(20),
  },
  pickImageBox: {
    height: verticalScale(55),
    backgroundColor: Color.ImageBackgroundColor,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.borderColor,
    paddingHorizontal: moderateScale(20),
    marginTop: scale(20),
  },
  Add_Image_Text: {
    fontSize: scale(15),
    color: Color.Black,
    fontWeight: '400',
  },
});
export default CustomVehiclesBox;
