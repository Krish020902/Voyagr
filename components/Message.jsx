import React from "react";
import { Text, View, Image } from "react-native";

import styles from "../assets/styles";

function Message(props) {
  const { image, lastMessage, place } = props;

  return (
    <View style={styles.containerMessage}>
      <Image source={image} style={styles.avatar} />
      <View>
        <Text>{place}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View>
    </View>
  );
}

export default Message;
