import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Matches from "./screens/Matches";
import Messages from "./screens/Messages";
import Profile from "./screens/Profile";
import { PRIMARY_COLOR, LIGHT_GRAY, WHITE } from "./assets/styles";
import Icon from "react-native-vector-icons/Ionicons"; // Make sure you have this package installed
import FilterPage from "./screens/FilterPage";
import Chatting from "./screens/Chatting";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, iconName, text, size }) => (
  <View style={{ alignItems: "center", justifyContent: "center" }}>
    <Icon
      name={iconName}
      size={size}
      color={focused ? PRIMARY_COLOR : LIGHT_GRAY}
    />
    <Text
      style={{
        fontSize: 10,
        color: focused ? PRIMARY_COLOR : LIGHT_GRAY,
        marginTop: 5,
      }}
    >
      {text}
    </Text>
  </View>
);

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false, // Hide default labels
        tabBarStyle: {
          backgroundColor: WHITE,
          borderTopWidth: 0,
          height: 55, // Significantly increased height
          paddingTop: 5,
          paddingBottom: 5,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let text;

          if (route.name === "Explore") {
            iconName = "search";
            text = "Explore";
          } else if (route.name === "Matches") {
            iconName = "heart";
            text = "Matches";
          } else if (route.name === "Chat") {
            iconName = "chatbubble";
            text = "Chat";
          }

          return (
            <TabBarIcon
              focused={focused}
              iconName={iconName}
              text={text}
              size={28} // Significantly increased icon size
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Matches"
        component={Matches}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Chat"
        component={Messages}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FilterPage"
          component={FilterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chatting"
          component={Chatting}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
