import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Color} from '../utils/Colors';

const CustomChackBox = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <CheckBox
      tintColors={{true: Color.Main, false: Color.Main}}
      disabled={false}
      value={toggleCheckBox}
      onValueChange={newValue => setToggleCheckBox(newValue)}
    />
  );
};

export default CustomChackBox;

const styles = StyleSheet.create({});
