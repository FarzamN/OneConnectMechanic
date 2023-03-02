import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../utils/Colors';
const CustomLoginButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#E70100', '#DD0101', '#CA0101', '#BA0101']}
        style={[styles.containerStyle, props.containerStyle]}>
        <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomLoginButton;

const styles = StyleSheet.create({
  containerStyle: {
    width: '90%',
    paddingVertical: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: scale(15),
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  font: {
    color: Color.White,
    fontSize: scale(17),
    textTransform: 'uppercase',
    fontWeight: '700',
    // textAlign: 'center',
  },
});
