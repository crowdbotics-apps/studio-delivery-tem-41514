import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MapScreen = () => {
  const mapRef = useRef(null);
  const startLocation = {
    latitude: 37.78825,
    longitude: -122.4324
  };
  const endLocation = {
    latitude: 37.78525,
    longitude: -122.4354
  };
  const routeCoordinates = [startLocation, {
    latitude: 37.78625,
    longitude: -122.4344
  }, {
    latitude: 37.78575,
    longitude: -122.4350
  }, endLocation];
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates(routeCoordinates, {
        edgePadding: {
          top: 50,
          right: 50,
          bottom: 50,
          left: 50
        },
        animated: true
      });
    }
  }, [mapRef]);
  return <View style={styles.container}>
      <MapView ref={mapRef} style={styles.map} initialRegion={{
      latitude: startLocation.latitude,
      longitude: startLocation.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }}>
        <Marker coordinate={startLocation} title="Start" />
        <Marker coordinate={endLocation} title="End" />
        <Polyline coordinates={routeCoordinates} strokeWidth={5} strokeColor="blue" />
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