import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {View, StyleSheet, Image} from 'react-native';
import {Color} from '../../utils/Colors';
import {scale} from 'react-native-size-matters';

const GooglePlacesInput = props => {
  return (
    <View style={[styles.field, props.style]}>
      {props.image ? <Image style={styles.image} source={props.image} /> : null}
      <GooglePlacesAutocomplete
        textInputProps={{
          placeholderTextColor: Color.placeholderTextColor,
        }}
        styles={{
          textInput: {
            height: 38,
            color: '#000',
            fontSize: 16,
          },
          row: {
            backgroundColor: '#fff',
          },
          description: {
            color: '#000',
          },
        }}
        ref={props.ref}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
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
    alignSelf: 'center',
    borderRadius: 10,
    paddingTop: scale(2),
    width: '100%',
  },
});

export default GooglePlacesInput;
