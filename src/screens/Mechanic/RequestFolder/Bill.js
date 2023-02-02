import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import BackAndName from '../../../components/BackAndName';
import ServiceDetail from '../../../components/CardComponent/ServiceDetail';
import {Color} from '../../../utils/Colors';

const Bill = ({navigation}) => {
  return (
    <SafeAreaView style={styles.continer}>
      <ScrollView>
        <BackAndName
          onPress={() => navigation.goBack()}
          color={Color.Black}
          title="Bill"
        />
        <View style={styles.CardContainer}>
          <Text style={styles.Service}>SERVICE CHARGES</Text>
          <Text style={styles.Price}>$30.89</Text>
          <View style={styles.DateBox}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Text}>Date :</Text>
              <Text style={styles.Num}>2022-1-09</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Text}>Discount :</Text>
              <Text style={styles.Num}>10%</Text>
            </View>
          </View>
        </View>
        <Text style={styles.CustomerID}>Customer ID Number : 1234567</Text>
        <ServiceDetail />
        <View style={{height: 10}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  CardContainer: {
    backgroundColor: '#F0F0F0',
    paddingVertical: moderateScale(25),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: Color.Main,
    borderTopColor: Color.Main,
  },
  Service: {
    textAlign: 'center',
    color: Color.Black,
    fontSize: scale(20),
  },
  Price: {
    textAlign: 'center',
    color: Color.Main,
    fontSize: scale(30),
    fontWeight: '700',
    paddingVertical: moderateScale(10),
  },
  Num: {
    color: Color.Main,
    fontSize: scale(17),
  },
  Text: {
    color: Color.Black,
    fontSize: scale(17),
  },
  DateBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
  },
  CustomerID: {
    color: Color.Black,
    fontWeight: '600',
    fontSize: scale(18),
    marginTop: scale(20),
    textAlign: 'center',
  },
});

export default Bill;
