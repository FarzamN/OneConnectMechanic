import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import BackAndName from '../../../components/BackAndName';
import {moderateScale, scale} from 'react-native-size-matters';
import {Color} from '../../../utils/Colors';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Battery service.',
    type: 'Base Price :  30$',
    Description: 'Description',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Battery service.',
    type: 'Base Price :  30$',
    Description: 'Description',
  },
];

const MyServices = ({navigation}) => {
  const Item = ({title, Description, type}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('editservice')}
      style={styles.CardBox}>
      <View style={{width: '80%'}}>
        <Text style={styles.Timing}>{title}</Text>
        <Text style={styles.Timing}>{type}</Text>
        <Text style={styles.Timing}>{Description}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="My Services" />
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => (
          <Item
            title={item.title}
            Description={item.Description}
            type={item.type}
          />
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('addservices')}
        style={styles.ToAddCircle}>
        <Image
          style={{width: scale(70), height: scale(70)}}
          source={require('../../../assets/Images/plus.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  CardBox: {
    backgroundColor: Color.lightGrey,
    borderRadius: 20,
    width: '85%',
    alignSelf: 'center',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    elevation: 3,
    marginBottom: scale(10),
  },
  Timing: {
    color: Color.Black,
    fontSize: scale(14),
  },
  ToAddCircle: {
    borderRadius: 100,
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
export default MyServices;
