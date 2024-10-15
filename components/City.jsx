import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, Alert } from "react-native";
import * as Location from "expo-location";
import Icon from "./Icon";
import styles from "../assets/styles";

const City = () => {
  const [city, setCity] = useState(" location...");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Reverse geocode to get city name
      let geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (geocode.length > 0) {
        setCity(geocode[0].city);
      } else {
        setCity("Unknown Location");
      }
    })();
  }, []);

  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        <Icon name="location-sharp" size={13} color={styles.DARK_GRAY} /> {city}
      </Text>
    </TouchableOpacity>
  );
};

export default City;
