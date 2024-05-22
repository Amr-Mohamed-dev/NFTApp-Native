import { View, StyleSheet, Image, StatusBar } from "react-native";
import React from "react";
import Button from "./Button";
import { COLORS } from "../constants";

const NFTImage = ({ image, imageStyles, love, arrow, pressHandler }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyles} />
    </View>
  );
};

export default NFTImage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },

  buttonHeart: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    right: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
  buttonArrow: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    left: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
});
