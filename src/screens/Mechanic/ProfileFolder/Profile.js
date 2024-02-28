import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';

import CustomInput from '../../../components/CustomInput';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';

import ImagePicker from '../../../components/ImagePicker/WithCamera';
import BackAndName from '../../../components/BackAndName';
import {Color} from '../../../utils/Colors';
import CustomButton from '../../../components/CustomButton';

const Profile = ({navigation}) => {
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
        title="Profile"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
          placeholder="First Name"
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
          name="l_name"
          rules={{
            required: 'email is required',
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Enter a valid email',
          }}
          placeholder="Last Name"
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
          keyboardType="email-address"
          name="state"
          rules={{
            required: 'email is required',
            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Enter a valid email',
          }}
          placeholder="State"
          placeholderTextColor={'#32323266'}
        />
        <CustomButton
          textStyle={{fontSize: scale(18)}}
          containerStyle={{
            width: '85%',
            marginTop: scale(25),
          }}
          title="Save Changes"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
});

export default Profile;
