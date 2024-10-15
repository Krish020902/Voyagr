import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const GenderFilter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");

  const genders = ["Male", "Female", "Nonbinary"];

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => setIsVisible(true)}
      >
        <Text style={styles.optionText}>
          {selectedGender || "Who would you prefer to travel with?"}
        </Text>
        <Ionicons name="chevron-down" size={24} color="#547474" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Gender Preference</Text>
                {genders.map((gender, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.genderButton,
                      selectedGender === gender && styles.selectedGenderButton,
                    ]}
                    onPress={() => handleGenderSelect(gender)}
                  >
                    <Text
                      style={[
                        styles.genderText,
                        selectedGender === gender && styles.selectedGenderText,
                      ]}
                    >
                      {gender}
                    </Text>
                    {selectedGender === gender && (
                      <Ionicons name="checkmark" size={24} color="#fff" />
                    )}
                  </TouchableOpacity>
                ))}
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
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
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
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
  genderButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
    backgroundColor: "#f0f0f0",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectedGenderButton: {
    backgroundColor: "rgba(5, 5, 5, 0.8)",
  },
  genderText: {
    fontSize: 18,
    color: "#333",
  },
  selectedGenderText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default GenderFilter;
