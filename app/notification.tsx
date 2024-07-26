import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        <Image
          style={styles.vector}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725619/product/cbgpcbyisttkhiixbbve.png",
          }}
        ></Image>
        <Text style={styles.NotfText}>Notification</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  notification: {
    backgroundColor: "#543A20",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    gap: 80,
    height: 90,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  NotfText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 25,
  },
  vector: {
    width: 11,
    height: 18,
  },
});
