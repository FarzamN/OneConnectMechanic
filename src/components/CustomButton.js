import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, moderateScale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../utils/Colors';
const CustomButton = props => {
  return (
    <TouchableOpacity
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 7,
      }}
      activeOpacity={0.6}
      onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#E70100', '#DD0101', '#CA0101', '#BA0101']}
        style={[
          styles.containerStyle,
          props.containerStyle,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
        <FontAwesome name={'long-arrow-right'} size={25} color={'white'} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  containerStyle: {
    width: '80%',
    paddingVertical: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: scale(5),
    alignSelf: 'center',
    paddingHorizontal: moderateScale(25),
  },

  font: {
    color: Color.White,
    fontSize: scale(15),
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});
