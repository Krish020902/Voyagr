import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles from "../assets/styles";

const CardItem = ({
  description,
  hasActions,
  hasVariant,
  image,
  isOnline,
  matches,
  place,
  name,
  budget, // Add this new prop
}) => {
  const fullWidth = Dimensions.get("window").width;

  const imageStyle = {
    borderRadius: 8,
    width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
    height: hasVariant ? 170 : 350,
    margin: hasVariant ? 0 : 20,
  };

  const nameStyle = {
    paddingTop: hasVariant ? 2 : 15,
    paddingBottom: hasVariant ? 1 : 7,
    color: "#363636",
    fontSize: hasVariant ? 13 : 30,
  };

  const budgetStyle = {
    color: "#27ae60", // Darker money green color
    fontSize: hasVariant ? 13 : 24,
    paddingBottom: hasVariant ? 5 : 7,
  };

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Icon name="heart" color={styles.WHITE} size={13} /> {matches}%
            Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{place}</Text>

      {/* BUDGET */}
      <Text style={budgetStyle}>{budget}</Text>

      {/* DESCRIPTION */}
      {description && (
        <View>
          <Text style={styles.username}>{name}</Text>
          <Text style={styles.descriptionCardItem}>{description}</Text>
        </View>
      )}

      {/* STATUS */}
      {!description && (
        <View style={styles.statusContainer}>
          <Text style={styles.username}>{name}</Text>

          {/* Name above the status */}
          <View style={styles.status}>
            {/* <View style={isOnline ? styles.online : styles.offline} /> */}
            {/* <Text style={styles.statusText}>
              {isOnline ? "Online" : "Offline"}
            </Text> */}
          </View>
        </View>
      )}

      {/* ACTIONS */}
      {hasActions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Icon name="star" color={styles.STAR_ACTIONS} size={14} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="heart" color={styles.LIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="close" color={styles.DISLIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Icon name="flash" color={styles.FLASH_ACTIONS} size={14} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
