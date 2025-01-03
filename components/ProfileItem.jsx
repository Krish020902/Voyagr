import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";

import styles, { DARK_GRAY, WHITE } from "../assets/styles";

function ProfileItem(props) {
  const { age, info1, info2, info3, info4, location, matches, place, name } =
    props;

  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.matchesProfileItem}>
        <Text style={styles.matchesTextProfileItem}>
          <Icon name="heart" size={13} color={WHITE} /> {matches}% Match!
        </Text>
      </View>
      <Text style={styles.profileusername}>{name}</Text>
      <Text style={styles.place}>{place}</Text>

      <Text style={styles.descriptionProfileItem}>
        {age} - {location}
      </Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="person" size={12} color={DARK_GRAY} />
        </Text>
        <Text style={styles.infoContent}>{info1}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="pizza" size={12} color={DARK_GRAY} />
        </Text>
        <Text style={styles.infoContent}>{info2}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="airplane" size={12} color={DARK_GRAY} />
        </Text>
        <Text style={styles.infoContent}>{info3}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="smoking" size={12} color={DARK_GRAY} />
        </Text>
        <Text style={styles.infoContent}>{info4}</Text>
      </View>
    </View>
  );
}

export default ProfileItem;
