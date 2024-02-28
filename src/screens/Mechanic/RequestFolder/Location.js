import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView,
  StyleSheet,
  View,
  PermissionsAndroid,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Marker} from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomButton from '../../../components/CustomButton';
import GooglePlacesInput from '../../../components/MapFolder/GooglePlacesInput';
import BackWithMenu from '../../../components/BackWithMenu';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const Location = ({navigation}) => {
  const [Pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  return (
    <SafeAreaView>
      <View
        style={{
          position: 'absolute',
          top: 0,
          alignSelf: 'center',
          width: '100%',
        }}>
        <BackWithMenu
          onPress_back={() => navigation.navigate('notification')}
          onPress={() => navigation.openDrawer()}
        />
        <GooglePlacesInput
          style={styles.GooglePlacesInput}
          placeholder="location"
        />
      </View>
      <MapView
        onPress={requestCameraPermission}
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        // zoomControlEnabled={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={Pin}
          draggable={true}
          pinColor="red"
          onDragStart={e => {
            console.log('helo map', e.nativeEvent.coordinate);
          }}
          onDragEnd={e => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            console.log('helo map');
          }}></Marker>
      </MapView>
      <View
        style={{
          position: 'absolute',
          bottom: scale(20),
          alignSelf: 'center',
          width: '100%',
        }}>
        <CustomButton
          containerStyle={{
            width: '90%',
            paddingVertical: moderateScale(15),
            marginVertical: scale(10),
          }}
          onPress={() => navigation.navigate('progress')}
          title="Reached"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mapStyle: {
    height: '100%',
    width: '100%',
    zIndex: -17,
  },
  GooglePlacesInput: {
    marginHorizontal: scale(25),
    marginTop: scale(20),
    width: '80%',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  icon: {
    marginHorizontal: 20,
    alignSelf: 'flex-end',
  },
});
export default Location;
