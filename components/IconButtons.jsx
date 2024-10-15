import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const IconButtons = () => {
  const [preferences, setPreferences] = useState({
    smoking: false,
    drinking: false,
    pets: false,
    music: false,
    food: false,
  });

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const buttons = [
    {
      key: "smoking",
      icon: "smoking",
      offIcon: "smoking-off",
      label: "Smoking",
    },
    {
      key: "drinking",
      icon: "glass-wine",
      offIcon: "glass-cocktail-off", // Changed to "glass-cocktail-off"
      label: "Drinking",
    },
    { key: "pets", icon: "paw", offIcon: "paw-off", label: "Pets" },
    { key: "music", icon: "music", offIcon: "music-off", label: "Bar" },
    { key: "food", icon: "food", offIcon: "food-off", label: "Foodie" },
  ];

  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.key}
          style={[
            styles.button,
            preferences[button.key]
              ? styles.buttonActive
              : styles.buttonInactive,
          ]}
          onPress={() => togglePreference(button.key)}
        >
          <Icon
            name={preferences[button.key] ? button.icon : button.offIcon}
            size={32}
            color={preferences[button.key] ? "#fff" : "#547474"}
          />
          <Text
            style={[
              styles.buttonText,
              preferences[button.key]
                ? styles.buttonTextActive
                : styles.buttonTextInactive,
            ]}
          >
            {button.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 12,
    padding: 15,
    margin: 8,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonActive: {
    backgroundColor: "#547474",
  },
  buttonInactive: {
    backgroundColor: "#f0f0f0",
    borderWidth: 2,
    borderColor: "#547474",
  },
  buttonText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonTextActive: {
    color: "#fff",
  },
  buttonTextInactive: {
    color: "#547474",
  },
});

export default IconButtons;
