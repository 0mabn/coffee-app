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
      <View style={styles.notificationHeader}>
        <Image
          style={styles.vector}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725619/product/cbgpcbyisttkhiixbbve.png",
          }}
        ></Image>
        <Text style={styles.NotfText}>Notification</Text>
      </View>
      <View style={styles.texts}>
        <Text style={styles.today}>Today</Text>
        <Text style={styles.mark}>Mark all read</Text>
      </View>
      <View style={styles.notifications}>
        <View style={styles.notification}>
          <View style={styles.imgBox}>
            <Image
              style={styles.Img}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1722240073/product/qluqhpfdlntl3hcxcace.png",
              }}
            ></Image>
          </View>
          <View style={styles.text}>
            <Text style={styles.notificationTitle}>Order Delivered</Text>
            <Text style={styles.lorem}>
              Lorem ipsum dolor sit amet consectetur. Scelerisque
            </Text>
          </View>
          <View style={styles.hour}>
            <Text style={styles.hourText}>1h</Text>
          </View>
        </View>
        <View style={styles.notification}>
          <View style={styles.imgBox}>
            <Image
              style={styles.Img}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1722240235/product/pmdzg7t9h1isqcz7jeii.png",
              }}
            ></Image>
          </View>
          <View style={styles.text}>
            <Text style={styles.notificationTitle}>20% Discount Alert</Text>
            <Text style={styles.lorem}>
              Lorem ipsum dolor sit amet consectetur. Scelerisque
            </Text>
          </View>
          <View style={styles.hour}>
            <Text style={styles.hourText}>2h</Text>
          </View>
        </View>
        <View style={styles.notificationBottom}>
          <View style={styles.imgBox}>
            <Image
              style={styles.Img}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1722240094/product/ekrf3rckof5ab7qdhzgx.png",
              }}
            ></Image>
          </View>
          <View style={styles.text}>
            <Text style={styles.notificationTitle}>New Product Launched</Text>
            <Text style={styles.lorem}>
              Lorem ipsum dolor sit amet consectetur. Scelerisque
            </Text>
          </View>
          <View style={styles.hour}>
            <Text style={styles.hourText}>23h</Text>
          </View>
        </View>
      </View>
      <View style={styles.texts2}>
        <Text style={styles.today}>Yesterday</Text>
        <Text style={styles.mark}>Mark all read</Text>
      </View>
      <View style={styles.notifications}>
        <View style={styles.notification}>
          <View style={styles.imgBox}>
            <Image
              style={styles.Img}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1722240073/product/qluqhpfdlntl3hcxcace.png",
              }}
            ></Image>
          </View>
          <View style={styles.text}>
            <Text style={styles.notificationTitle}>Order Delivered</Text>
            <Text style={styles.lorem}>
              Lorem ipsum dolor sit amet consectetur. Scelerisque
            </Text>
          </View>
          <View style={styles.hour}>
            <Text style={styles.hourText}>1h</Text>
          </View>
        </View>
        <View style={styles.notification}>
          <View style={styles.imgBox}>
            <Image
              style={styles.Img}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1722240235/product/pmdzg7t9h1isqcz7jeii.png",
              }}
            ></Image>
          </View>
          <View style={styles.text}>
            <Text style={styles.notificationTitle}>20% Discount Alert</Text>
            <Text style={styles.lorem}>
              Lorem ipsum dolor sit amet consectetur. Scelerisque
            </Text>
          </View>
          <View style={styles.hour}>
            <Text style={styles.hourText}>2h</Text>
          </View>
        </View>
        <View style={styles.notificationBottom}>
          <View style={styles.imgBox}>
            <Image
              style={styles.Img}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1722240094/product/ekrf3rckof5ab7qdhzgx.png",
              }}
            ></Image>
          </View>
          <View style={styles.text}>
            <Text style={styles.notificationTitle}>New Product Launched</Text>
            <Text style={styles.lorem}>
              Lorem ipsum dolor sit amet consectetur. Scelerisque
            </Text>
          </View>
          <View style={styles.hour}>
            <Text style={styles.hourText}>23h</Text>
          </View>
        </View>
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
  notificationHeader: {
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
  texts: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 210,
  },
  texts2: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 170,
  },
  today: {
    fontWeight: "600",
    fontSize: 20,
    color: "#00000080",
  },
  mark: {
    color: " #000000B2",
    fontWeight: "600",
    fontSize: 14,
  },
  imgBox: {
    backgroundColor: "#CE9760",
    borderRadius: 40,
    width: 70,
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Img: {
    width: 38,
    height: 38,
  },
  notification: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#CE9760",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingBottom: 5,
    paddingLeft: 20,
    marginTop: 10,
  },
  notifications: {
    marginTop: 10,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    marginLeft: 10,
  },
  notificationTitle: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
  },
  lorem: {
    color: "black",
    fontWeight: "400",
    fontSize: 9,
    width: 200,
  },
  hourText: {
    color: "#8D8B8B",
    fontWeight: "600",
    fontSize: 14,
  },
  hour: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 40,
  },
  notificationBottom: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 5,
    paddingLeft: 20,
    marginTop: 10,
  },
});
