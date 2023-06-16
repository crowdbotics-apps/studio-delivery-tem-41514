import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MapScreen = () => {
  const [coordinates, setCoordinates] = useState([{
    latitude: 37.8025259,
    longitude: -122.4351431
  }, {
    latitude: 37.7896386,
    longitude: -122.421646
  }]);
  const [region, setRegion] = useState({
    latitude: 37.8025259,
    longitude: -122.4351431,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  useEffect(() => {
    const {
      latitude,
      longitude
    } = coordinates[0];
    setRegion({ ...region,
      latitude,
      longitude
    });
  }, []);
  return <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {coordinates.map((coordinate, index) => <Marker key={index} coordinate={coordinate} title={index === 0 ? 'Start' : 'End'} pinColor={index === 0 ? 'green' : 'red'} />)}
        <Polyline coordinates={coordinates} strokeWidth={5} strokeColor="blue" />
      </MapView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
export default MapScreen;