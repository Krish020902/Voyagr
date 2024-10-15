import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Icon from "../components/Icon";
import ProfileItem from "../components/ProfileItem";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import { useNavigation } from "@react-navigation/native";

function Profile({ route }) {
  const { user } = route.params;
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={user.image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-back"
                size={20}
                color={WHITE}
                style={styles.topIconLeft}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="ellipsis-vertical"
                size={20}
                color={WHITE}
                style={styles.topIconRight}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={user.match}
          name={user.name}
          age={user.age}
          location={user.location}
          info1={user.info1}
          info2={user.info2}
          info3={user.info3}
          info4={user.info4}
          place={user.place}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Icon name="ellipsis-horizontal" size={20} color={WHITE} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.roundedButton}
            onPress={() => navigation.navigate("Chatting", { user })}
          >
            <Icon name="chatbubble" size={20} color={WHITE} />
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default Profile;
