import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../utils/Colors';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomChackBox from '../CustomChackBox';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Reached',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Job Done',
  },
];

const LiveTrackingCard = () => {
  const Item = ({title}) => (
    <TouchableOpacity style={styles.CardBox}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.Service}>{title}</Text>
        <CustomChackBox />
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
  );
};

export default LiveTrackingCard;

const styles = StyleSheet.create({
  CardBox: {
    backgroundColor: Color.lightGrey,
    borderRadius: 20,
    marginHorizontal: scale(20),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(15),
    elevation: 3,
    marginBottom: scale(10),
  },
  Service: {
    fontSize: scale(17),
    color: Color.Black,
    fontWeight: '600',
    lineHeight: 22,
  },

  Timing: {
    fontSize: scale(18),
    color: Color.Main,
  },
});
