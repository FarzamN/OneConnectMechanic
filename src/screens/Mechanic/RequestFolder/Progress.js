import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

import {moderateScale, scale} from 'react-native-size-matters';
import BackAndName from '../../../components/BackAndName';
import LiveTrackingCard from '../../../components/CardComponent/LiveTrackingCard';
import CustomButton from '../../../components/CustomButton';
import CustomModal from '../../../components/CustomModal';
import {Color} from '../../../utils/Colors';

const Progress = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.continer}>
      <BackAndName
        onPress={() => navigation.goBack()}
        color={Color.Black}
        title="Progress"
      />

      <View style={styles.CardContainer}>
        <Image
          style={styles.UserDp}
          source={require('../../../assets/Images/dpone.png')}
        />
        <View style={styles.CardBox}>
          <Text style={styles.Text}>Name of Mechanic</Text>
          <Text style={styles.Text}>Location</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.Live_Tracking_Box}>
          <Text style={styles.Live_Tracking_Text}>Live Tracking</Text>
          <LiveTrackingCard />
        </View>
      </ScrollView>
      <CustomButton
        onPress={() => {
          setShowModal(toggleModal());
          console.log('modal Open');
        }}
        containerStyle={{marginBottom: scale(20), width: '90%'}}
        title="Complete"
      />
      {showModal == false ? (
        <CustomModal
          ExCharges={true}
          ExChargesText="Service Charges"
          price="20$"
          onPress={() => navigation.navigate('bill')}
          Modal_Text="Add Details"
          placeholder="Add extra Charges"
          title="add"
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
  continer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  CardContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    paddingVertical: moderateScale(30),
    alignItems: 'center',
    elevation: 3,
  },
  UserDp: {
    width: scale(80),
    height: scale(80),
    marginLeft: scale(20),
  },
  CardBox: {
    paddingHorizontal: moderateScale(20),
  },
  Text: {
    color: Color.placeholderTextColor,
    fontSize: scale(15),
    lineHeight: 20,
    fontWeight: '600',
  },
  Live_Tracking_Box: {
    marginTop: scale(20),
  },
  Live_Tracking_Text: {
    color: Color.Main,
    fontWeight: '700',
    fontSize: scale(22),
    marginLeft: scale(20),
    marginBottom: scale(10),
  },
});

export default Progress;
