import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PlaceTypeSelector = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlaces, setSelectedPlaces] = useState([]);

  const placeTypes = [
    "Beaches",
    "Mountains",
    "Windy/Cold",
    "Trekking",
    "Religious",
    "Spiritual",
    "City with night life",
    "Cultural",
    "Adventure Sports",
    "Deserts",
    "Forests",
    "Countryside",
    "Islands",
    "Lakes/Rivers",
    "Historical Sites",
    "Villages",
    "Wildlife Reserves",
    "Luxury Resorts",
    "Shopping Destinations",
    "Art and Museums",
    "Food and Culinary Experiences",
    "Festivals and Events",
    "Hot Springs",
    "Skiing Destinations",
    "Caves",
    "Waterfalls",
    "Parks and Gardens",
    "Small Towns",
  ];

  const togglePlaceSelection = (place) => {
    setSelectedPlaces((prevSelected) =>
      prevSelected.includes(place)
        ? prevSelected.filter((item) => item !== place)
        : [...prevSelected, place]
    );
  };

  const handleCloseDrawer = () => setIsVisible(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setIsVisible(true)}
      >
        <View>
          <Text style={styles.selectorLabel}>Preferred Places</Text>
          <Text style={styles.selectorValue}>
            {selectedPlaces.length
              ? `${selectedPlaces.length} selected`
              : "Tap to select"}
          </Text>
        </View>
        <Ionicons name="chevron-down" size={24} color="#547474" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={handleCloseDrawer}
      >
        <TouchableWithoutFeedback onPress={handleCloseDrawer}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Place Types</Text>
                <ScrollView style={styles.scrollView}>
                  {placeTypes.map((place, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.placeButton,
                        selectedPlaces.includes(place) &&
                          styles.selectedPlaceButton,
                      ]}
                      onPress={() => togglePlaceSelection(place)}
                    >
                      <Text
                        style={[
                          styles.placeText,
                          selectedPlaces.includes(place) &&
                            styles.selectedPlaceText,
                        ]}
                      >
                        {place}
                      </Text>
                      {selectedPlaces.includes(place) && (
                        <Ionicons name="checkmark" size={24} color="#fff" />
                      )}
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 20,
  },
  selector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  selectorValue: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "rgba(84, 116, 116, 0.9)",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "white",
  },
  scrollView: {
    maxHeight: "90%",
  },
  placeButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
  },
  selectedPlaceButton: {
    backgroundColor: "rgba(5, 5, 5, 0.8)",
  },
  placeText: {
    fontSize: 16,
    color: "#333",
  },
  selectedPlaceText: {
    color: "white",
    fontWeight: "600",
  },
});

export default PlaceTypeSelector;
