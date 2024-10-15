import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";

const DistanceSlider = () => {
  const [distance, setDistance] = useState(50);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>Maximum Distance</Text>
        <View style={styles.distanceDisplay}>
          <Ionicons name="location" size={24} color="#547474" />
          <Text style={styles.distanceText}>{`${distance} miles`}</Text>
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>0</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={500}
          step={1}
          value={distance}
          onValueChange={(value) => setDistance(Math.round(value))}
          minimumTrackTintColor="#547474"
          maximumTrackTintColor="#e0e0e0"
          thumbTintColor="#547474"
        />
        <Text style={styles.sliderLabel}>500</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  distanceDisplay: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#547474",
  },
  distanceText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#547474",
    fontWeight: "600",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  sliderLabel: {
    fontSize: 14,
    color: "#888",
  },
});

export default DistanceSlider;
