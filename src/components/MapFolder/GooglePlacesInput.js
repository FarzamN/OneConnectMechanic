import React, {useState, forwardRef} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useController} from 'react-hook-form';
import {View, Text, TextInput, StyleSheet, Image, Platform} from 'react-native';
import {Color} from '../../utils/Colors';
import {scale} from 'react-native-size-matters';

const GooglePlacesInput = props => {
  return (
    <View style={[styles.field, props.style]}>
      {props.image ? <Image style={styles.image} source={props.image} /> : null}
      <GooglePlacesAutocomplete
        textInputProps={props.textInputProps}
        ref={props.ref}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        placeholderTextColor={Color.placeholderTextColor}
        style={[styles.input, props.textStyle]}
        keyboardType={props.keyboardType}
        textAlignVertical={props.textAlignVertical}
        onPress={props.onPress}
        fetchDetails={true}
        keepResultsAfterBlur={true}
        GooglePlacesDetailsQuery={props.GooglePlacesDetailsQuery}
        query={{
          key: 'AIzaSyCFiS3J95syNrmbl4JjQpWr8po9vXLzJvw',
          language: 'en',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    // borderWidth: 1,
    // borderColor: Color.Main,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: scale(2),
  },

  image: {
    // width: scale(28),
    // height: scale(28),
    resizeMode: 'contain',
    // marginHorizontal: scale(15),
  },
  input: {
    // fontSize: moderateScale(16),
    color: 'black',
    fontWeight: '600',
    // fontFamily: Font.Lato400,
    width: '100%',
    textInputContainer: {
      backgroundColor: 'black',
    },
  },
});

export default GooglePlacesInput;
