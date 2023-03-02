import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import BackWithMenu from '../../components/BackWithMenu';
import {Color} from '../../utils/Colors';

const Home = ({navigation}) => {
  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'Last Week'},
    {key: '2', value: 'Last Month'},
    {key: '3', value: '2 Month ago'},
    {key: '4', value: '5 Month ago'},
    {key: '5', value: '1 year ago'},
    {key: '6', value: '5 year ago'},
    {key: '7', value: '1 decade'},
  ];
  return (
    <SafeAreaView style={styles.Container}>
      <BackWithMenu
        onPress_back={() => navigation.navigate('notification')}
        onPress={() => navigation.openDrawer()}
      />

      <View style={styles.DropdownBox}>
        <SelectList
          placeholder="All Data"
          arrowicon={
            <FontAwesome name="chevron-down" size={18} color={Color.White} />
          }
          closeicon={
            <FontAwesome name="chevron-up" size={18} color={Color.White} />
          }
          dropdownStyles={{backgroundColor: Color.Main}}
          dropdownItemStyles={{backgroundColor: '#EFEFEF'}}
          boxStyles={{
            backgroundColor: Color.Main,
            borderWidth: 0,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          dropdownTextStyles={{color: Color.Black}}
          inputStyles={{color: Color.White, fontSize: scale(15)}}
          search={false}
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
        />
      </View>
      <ScrollView>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#5FB51B', '#459813', '#2F800C', '#216E07']}
          style={styles.linearGradient}>
          <Text style={styles.Text}>Total Requests Accepted</Text>
          <Text style={styles.Number}>34</Text>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#29B3D2', '#26ADCC', '#209CB8', '#15829A']}
          style={styles.linearGradient}>
          <Text style={styles.Text}>Total Revenue Generated</Text>
          <Text style={styles.Number}>1200$</Text>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#E90201', '#DD0101', '#CF0101', '#C40101']}
          style={styles.linearGradient}>
          <Text style={styles.Text}>Total Earned Amount</Text>
          <Text style={styles.Number}>900$</Text>
        </LinearGradient>
        <View style={{height: verticalScale(10)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  DropdownBox: {
    marginTop: scale(20),
    width: '95%',
    alignSelf: 'center',
  },
  linearGradient: {
    marginTop: scale(20),
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: moderateScale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Text: {
    fontSize: scale(20),
    fontWeight: '700',
    color: Color.White,
  },
  Number: {
    fontSize: scale(60),
    fontWeight: '700',
    color: Color.White,
  },
});

export default Home;
