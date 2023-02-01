import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BackAndName from '../../../components/BackAndName';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../../../utils/Colors';
import Octicons from 'react-native-vector-icons/Octicons';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Money Recieved.',
    type: 'Description',
    Timing: '07/07/2022',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pending Service.',
    type: 'Description',
    Timing: '07/07/2022',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Service Completed.',
    type: 'Description',
    Timing: '07/07/2022',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1457171e29d73',
    title: 'Service incompleted.',
    type: 'Description',
    Timing: '07/07/2022',
  },
];

const MyServices = ({navigation}) => {
  const Item = ({title, Timing, type}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('editservice')}
      style={styles.CardBox}>
      <View style={{width: '80%'}}>
        <Text style={styles.Timing}>{title}</Text>
        <Text style={styles.Timing}>{type}</Text>
        <Text style={styles.Timing}>{Timing}</Text>
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
          <Item title={item.title} Timing={item.Timing} type={item.type} />
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('addservices')}
        style={styles.ToAddCircle}>
        <Octicons size={50} name={'plus-circle'} color={Color.Main} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  CardBox: {
    backgroundColor: '#f4f4f4',
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
    height: verticalScale(50),
    aspectRatio: 1 / 1,
    borderWidth: 5,
    borderColor: '#EB6162',
    borderRadius: 100,
    position: 'absolute',
    right: 10,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MyServices;
