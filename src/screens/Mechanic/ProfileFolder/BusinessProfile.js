import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import BackAndName from '../../../components/BackAndName';
import {Color} from '../../../utils/Colors';
import CustomInput from '../../../components/CustomInput';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import CustomButton from '../../../components/CustomButton';
import ImagePicker from '../../../components/ImagePicker/WithCamera';

const BusinessProfile = ({navigation}) => {
  const [index, setIndex] = useState(99);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  return (
    <SafeAreaView style={styles.container}>
      <BackAndName
        onPress={() => navigation.goBack()}
        color={Color.Black}
        title="Business Profile"
      />

      <ImagePicker />

      <CustomInput
        onFocus={() => {
          setIndex(0);
        }}
        style={
          index === 0
            ? {
                borderWidth: 1,
                borderColor: Color.Main,
                borderRadius: 10,
              }
            : {
                borderWidth: 1,
                borderColor: Color.borderColor,
                borderRadius: 10,
              }
        }
        control={control}
        keyboardType="email-address"
        name="f_name"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="Name of the business"
        placeholderTextColor={'#32323266'}
      />
      <CustomInput
        onFocus={() => {
          setIndex(2);
        }}
        style={
          index === 2
            ? {
                borderWidth: 1,
                borderColor: Color.Main,
                borderRadius: 10,
              }
            : {
                borderWidth: 1,
                borderColor: Color.borderColor,
                borderRadius: 10,
              }
        }
        control={control}
        keyboardType="email-address"
        name="Email"
        rules={{
          required: 'email is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid email',
        }}
        placeholder="Email"
        placeholderTextColor={'#32323266'}
      />
      <CustomInput
        onFocus={() => {
          setIndex(3);
        }}
        style={
          index === 3
            ? {
                borderWidth: 1,
                borderColor: Color.Main,
                borderRadius: 10,
              }
            : {
                borderWidth: 1,
                borderColor: Color.borderColor,
                borderRadius: 10,
              }
        }
        control={control}
        keyboardType="numeric"
        name="number"
        rules={{
          required: 'number is required',
          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: 'Enter a valid number',
        }}
        placeholder="Nnumber"
        placeholderTextColor={'#32323266'}
      />
      <CustomButton
        onPress={() => navigation.navigate('myservices')}
        textStyle={{fontSize: scale(18)}}
        containerStyle={{
          width: '85%',
          marginTop: scale(30),
        }}
        title="Add Services"
      />
      <CustomButton
        textStyle={{fontSize: scale(18)}}
        containerStyle={{
          width: '85%',
          marginTop: scale(20),
        }}
        title="Save Changes"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
});

export default BusinessProfile;
