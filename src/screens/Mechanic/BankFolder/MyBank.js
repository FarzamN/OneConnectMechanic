import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
import {Color} from '../../../utils/Colors';
import BackAndName from '../../../components/BackAndName';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const DATA = [
  {
    id: '1',
    Name: 'Desdamona',
    Car: 'Bank Name',
    Reg: 'Reg ID: 15329875',
  },
  {
    id: '2',
    Name: 'Baleno',
    Car: 'Bank Name',
    Reg: 'Reg ID: 15438293',
  },
  {
    id: '3',
    Name: 'Eleanor',
    Car: 'Bank Name',
    Reg: 'Reg ID: 14285850',
  },
  {
    id: '4',
    Name: 'Desdamona',
    Car: 'Bank Name',
    Reg: 'Reg ID: 15329875',
  },
  {
    id: '5',
    Name: 'Baleno',
    Car: 'Bank Name',
    Reg: 'Reg ID: 15438293',
  },
  {
    id: '6',
    Name: 'Eleanor',
    Car: 'Bank Name',
    Reg: 'Reg ID: 14285850',
  },
];
const Item = ({item, onPress}) => (
  <View style={styles.mainBox}>
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: moderateScale(30),
      }}>
      <View style={{paddingHorizontal: moderateScale(20)}}>
        <Text style={styles.TextOne}>{item.Name}</Text>
        <Text style={styles.TextOne}>{item.Car}</Text>
        <Text style={styles.TextOne}>{item.Reg}</Text>
      </View>
    </View>
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          color: Color.Main,
          textAlign: 'center',
          fontSize: scale(22),
          fontWeight: '700',
          borderTopWidth: 1,
          borderColor: Color.borderColor,
          paddingVertical: moderateScale(3),
        }}>
        Edit
      </Text>
    </TouchableOpacity>
  </View>
);
const MyBank = ({navigation}) => {
  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => navigation.navigate('editbank')} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackAndName
        onPress={() => navigation.goBack()}
        title={'My Bank'}
        color={Color.Black}
        Menucolor={Color.White}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // extraData={selectedId}
      />
      <View style={styles.AddBox}>
        <Text style={styles.Add}>Add Another Bank</Text>
        <View style={styles.row}>
          <TextInput
            style={{color: Color.Black}}
            placeholderTextColor={Color.placeholderTextColor}
            // placeholder="Registration ID..."
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('addbank')}
            style={styles.AddBtnBox}>
            <Text style={styles.AddBtn}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  AddBox: {
    marginHorizontal: scale(20),
  },
  Add: {
    color: Color.Black,
    fontSize: scale(15),
    fontWeight: '600',
  },

  row: {
    flexDirection: 'row',
    height: verticalScale(50),
    margin: scale(10),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.borderColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
  },
  AddBtn: {
    color: Color.Main,
  },
  AddBtnBox: {
    borderWidth: 1,
    borderColor: Color.Main,
    borderRadius: 10,
    width: scale(50),
    height: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextOne: {
    fontSize: scale(14),
    fontWeight: '500',
    color: Color.greyfont,
  },
  TextThree: {
    fontSize: scale(14),
    color: Color.placeholderTextColor,
  },
  mainBox: {
    backgroundColor: Color.White,
    marginVertical: scale(8),
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  userImg: {
    width: scale(100),
    height: scale(70),
  },
});

export default MyBank;
