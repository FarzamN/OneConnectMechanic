import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import BackAndName from '../../../components/BackAndName';
import {Color} from '../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomButton from '../../../components/CustomButton';
import CustomModal from '../../../components/CustomModal';

const DATA = [
  {
    id: '1',
    Name: 'Bank Name',
    Car: 'Account name',
    Reg: 'Account Number',
  },
  {
    id: '2',
    Name: 'Bank Name',
    Car: 'Account name',
    Reg: 'Account Number',
  },
  {
    id: '3',
    Name: 'Bank Name',
    Car: 'Account name',
    Reg: 'Account Number',
  },
  {
    id: '4',
    Name: 'Bank Name',
    Car: 'Account name',
    Reg: 'Account Number',
  },
  {
    id: '5',
    Name: 'Bank Name',
    Car: 'Account name',
    Reg: 'Account Number',
  },
  {
    id: '6',
    Name: 'Bank Name',
    Car: 'Account name',
    Reg: 'Account Number',
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
        Select
      </Text>
    </TouchableOpacity>
  </View>
);
const BankSelection = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        // onPress={() => navigation.navigate('editbank')}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackAndName
        onPress={() => navigation.goBack()}
        title={'Bank Selection'}
        color={Color.Black}
        Menucolor={Color.White}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <CustomButton
        onPress={() => {
          setShowModal(toggleModal());
          console.log('modal Open');
        }}
        title={'NEXt'}
        containerStyle={{
          marginBottom: scale(10),
          paddingVertical: moderateScale(15),
          width: '80%',
        }}
      />
      {showModal == false ? (
        <CustomModal
          onPress={() => navigation.navigate('location')}
          placeholder="Enter Amount"
          Modal_Text="Enter Amount"
          title="request"
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
        />
      ) : (
        setShowModal(false)
      )}
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
    color: Color.Black,
  },
  TextThree: {
    fontSize: scale(14),
    color: Color.placeholderTextColor,
  },
  mainBox: {
    elevation: 7,
    marginVertical: scale(8),
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: Color.White,
  },
  userImg: {
    width: scale(100),
    height: scale(70),
  },
});

export default BankSelection;
