import React, { useState, useRef } from "react";
import {
  View,
  ImageBackground,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import Icon from "react-native-vector-icons/FontAwesome";
import City from "../components/City";
import Filters from "../components/Filters";
import CardItem from "../components/CardItem";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";

const { width, height } = Dimensions.get("window");

function Home() {
  const [swiper, setSwiper] = useState(null);
  const likeOpacity = useRef(new Animated.Value(0)).current;
  const nopeOpacity = useRef(new Animated.Value(0)).current;

  const handleSwipe = (direction) => {
    const animatedValue = direction === "right" ? likeOpacity : nopeOpacity;
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const iconSize = 130;

  const iconStyle = {
    position: "absolute",
    top: height / 2 - iconSize / 2,
    zIndex: 1000,
    width: iconSize,
    height: iconSize,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: iconSize / 2,
    justifyContent: "center",
    alignItems: "center",
  };

  const likeStyle = {
    ...iconStyle,
    right: width / 4 - 65,
    opacity: likeOpacity,
  };

  const nopeStyle = {
    ...iconStyle,
    left: width / 4 - 65,
    opacity: nopeOpacity,
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Text style={styles.logo}>VOYAGR</Text>

          <Filters />
        </View>
        <Animated.View style={likeStyle}>
          <Icon name="check-circle" size={130} color="#4CAF50" />
        </Animated.View>
        <Animated.View style={nopeStyle}>
          <Icon name="times-circle" size={130} color="#F44336" />
        </Animated.View>
        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper) => setSwiper(newSwiper)}
          onSwipedRight={() => handleSwipe("right")}
          onSwipedLeft={() => handleSwipe("left")}
        >
          {DEMO.map((item) => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                place={item.place}
                description={item.description}
                matches={item.match}
                budget={item.budget}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
}

export default Home;
