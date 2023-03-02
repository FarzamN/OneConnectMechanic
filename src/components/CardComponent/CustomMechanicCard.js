import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import CustomModal from '../CustomModal';
import {useNavigation} from '@react-navigation/native';
const DATA = [
  {
    id: '1',
    Name: 'Kal-El ',
    Service_Name: 'Service Name',
    Location: 'Location',
    Vehicle: 'Vehicle',
    img: require('../../assets/Images/dpone.png'),
  },
  {
    id: '2',
    Name: 'Diana Prince',
    Service_Name: 'Service Name',
    Location: 'Location',
    Vehicle: 'Vehicle',
    img: require('../../assets/Images/dptwo.png'),
  },
  {
    id: '3',
    Name: 'Bruce Wayne',
    Service_Name: 'Service Name',
    Location: 'Location',
    Vehicle: 'Vehicle',
    img: require('../../assets/Images/dpthree.png'),
  },
  {
    id: '4',
    Name: 'Barry Allen',
    Service_Name: 'Service Name',
    Location: 'Location',
    Vehicle: 'Vehicle',
    img: require('../../assets/Images/dpfour.png'),
  },
  {
    id: '5',
    Name: 'Hal Jordan',
    Service_Name: 'Service Name',
    Location: 'Location',
    Vehicle: 'Vehicle',
    img: require('../../assets/Images/dpfive.png'),
  },
  {
    id: '6',
    Name: 'Arthur Curry',
    Service_Name: 'Service Name',
    Location: 'Location',
    Vehicle: 'Vehicle',
    img: require('../../assets/Images/dpsix.png'),
  },
];
const Item = ({item, onPressMore}) => (
  <View style={styles.mainBox}>
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: moderateScale(20),
      }}>
      <View style={{width: '50%', alignItems: 'center'}}>
        <Image style={styles.userImg} source={item.img} />
      </View>
      <View style={{width: '50%'}}>
        <Text style={styles.Text}>{item.Name}</Text>
        <Text style={styles.Text}>{item.Service_Name}</Text>
        <Text style={styles.Text}>{item.Location}</Text>
        <Text style={styles.Text}>{item.Vehicle}</Text>
        <View style={{width: '50%'}}></View>
      </View>
    </View>

    <TouchableOpacity
      style={[
        {
          width: '100%',
          // borderRightWidth: 1,
          borderRightColor: Color.borderColor,
          backgroundColor: Color.Main,
        },
      ]}
      onPress={onPressMore}>
      <Text style={styles.btnText}>accept</Text>
    </TouchableOpacity>
  </View>
);
const CustomMechanicCard = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPressMore={() => {
          setShowModal(toggleModal());
          console.log('modal Open');
        }}
      />
    );
  };
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {showModal == false ? (
        <CustomModal
          onPress={() => navigation.navigate('location')}
          placeholder="Estimated time to reach"
          Modal_Text="Enter Estimation Time"
          title="add"
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
        />
      ) : (
        setShowModal(false)
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: Color.White,
    elevation: 5,
    marginVertical: scale(8),
    width: '90%',
    alignSelf: 'center',
  },
  userImg: {
    width: scale(80),
    height: scale(80),
  },
  Text: {
    fontSize: scale(13),
    color: Color.Black,
    fontWeight: '500',
  },
  btnText: {
    color: Color.White,
    fontSize: scale(22),
    fontWeight: '700',
    borderTopWidth: 1,
    borderColor: Color.borderColor,
    paddingVertical: moderateScale(5),
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
export default CustomMechanicCard;
