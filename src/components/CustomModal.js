import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import CustomStarRating from './CustomStarRating';
import {Color} from '../utils/Colors';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import {useForm} from 'react-hook-form';

const CustomModal = (props, {navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});
  return (
    <Modal onBackdropPress={props.onBackdropPress} isVisible={props.isVisible}>
      <View style={styles.ModalMainBox}>
        <Text style={styles.Modal_Text}>{props.Modal_Text}</Text>
        {props.ExCharges ? (
          <Text style={styles.ExCharges}>{props.ExChargesText}</Text>
        ) : null}

        <CustomInput
          style={{
            width: '100%',
            height: verticalScale(50),
            borderWidth: 1,
            borderColor: Color.Main,
            borderRadius: 20,
            marginBottom: scale(10),
            marginTop: scale(10),
            paddingHorizontal: moderateScale(10),
          }}
          control={control}
          keyboardType="email-address"
          name="forget_pass"
          placeholder={props.placeholder}
          placeholderTextColor={'#32323266'}
        />
        <CustomButton
          containerStyle={{marginTop: 0}}
          onPress={props.onPress}
          title={props.title}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModalMainBox: {
    width: '100%',
    backgroundColor: Color.White,
    borderRadius: 20,
    paddingVertical: moderateScale(30),
    paddingHorizontal: moderateScale(30),
  },
  Modal_Text: {
    fontSize: scale(20),
    color: Color.Black,
    fontWeight: '600',
  },
  ExCharges: {
    fontSize: scale(13),
    color: Color.placeholderTextColor,
  },
});

export default CustomModal;
