import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import BackAndName from '../../../components/BackAndName';
import {Color} from '../../../utils/Colors';

const CompletedJob = ({navigation}) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Battery service ',
      type: 'Vehicle Type : Car ',
      Timing: 'Date: 2022-05-02',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Battery service ',
      type: 'Vehicle Type : Car ',
      Timing: 'Date: 2022-05-02',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Battery service.',
      type: 'Vehicle Type : Car ',
      Timing: 'Date: 2022-05-02',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1457171e29d73',
      title: 'Battery service.',
      type: 'Vehicle Type : Car ',
      Timing: 'Date: 2022-05-02',
    },
  ];
  const Item = ({title, Timing, type}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('summary')}
      style={styles.CardBox}>
      <View style={{width: '80%'}}>
        <Text style={styles.Service}>{title}</Text>
        <Text style={[styles.Service, {marginVertical: 5}]}>{type}</Text>
        <Text style={styles.Timing}>{Timing}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.Container}>
      <BackAndName onPress={() => navigation.goBack()} title="Summaries" />
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => (
          <Item title={item.title} Timing={item.Timing} type={item.type} />
        )}
        keyExtractor={item => item.id}
      />
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
    paddingVertical: moderateScale(30),
    elevation: 3,
    marginBottom: scale(10),
  },
  Service: {
    fontSize: scale(17),
    color: Color.Black,
    lineHeight: 22,
  },

  Timing: {
    fontSize: scale(18),
    color: Color.Main,
  },
});

export default CompletedJob;
