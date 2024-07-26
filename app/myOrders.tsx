import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.myOrders}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725619/product/cbgpcbyisttkhiixbbve.png",
            }}
          ></Image>
          <Text style={styles.myOrdersText}>My Orders</Text>
        </View>
        <View style={styles.orders}>
          <View style={styles.order}>
            <Image
              style={styles.coffeeImg}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
              }}
            ></Image>
            <View style={styles.info}>
              <Text style={styles.name}>Coffee Name</Text>
              <Text style={styles.quantity}>Qty: X</Text>
              <Text style={styles.price}>$XX</Text>
              <Text style={styles.status}>Status</Text>
            </View>
            <TouchableOpacity style={styles.trackButton}>
              <Text style={styles.trackText}>Track</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.orders}>
          <View style={styles.order}>
            <Image
              style={styles.coffeeImg}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
              }}
            ></Image>
            <View style={styles.info}>
              <Text style={styles.name}>Coffee Name</Text>
              <Text style={styles.quantity}>Qty: X</Text>
              <Text style={styles.price}>$XX</Text>
              <Text style={styles.status}>Status</Text>
            </View>
            <TouchableOpacity style={styles.trackButton}>
              <Text style={styles.trackText}>Track</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.orders}>
          <View style={styles.order}>
            <Image
              style={styles.coffeeImg}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
              }}
            ></Image>
            <View style={styles.info}>
              <Text style={styles.name}>Coffee Name</Text>
              <Text style={styles.quantity}>Qty: X</Text>
              <Text style={styles.price}>$XX</Text>
              <Text style={styles.status}>Status</Text>
            </View>
            <TouchableOpacity style={styles.trackButton}>
              <Text style={styles.trackText}>Track</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.orders}>
          <View style={styles.order}>
            <Image
              style={styles.coffeeImg}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
              }}
            ></Image>
            <View style={styles.info}>
              <Text style={styles.name}>Coffee Name</Text>
              <Text style={styles.quantity}>Qty: X</Text>
              <Text style={styles.price}>$XX</Text>
              <Text style={styles.status}>Status</Text>
            </View>
            <TouchableOpacity style={styles.trackButton}>
              <Text style={styles.trackText}>Track</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  myOrders: {
    backgroundColor: "#543A20",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    gap: 110,
    height: 90,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  myOrdersText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  coffeeImg: {
    backgroundColor: "#CE9760",
    width: 110,
    height: 110,
    borderRadius: 12,
    marginRight: 15,
  },
  orders: {
    display: "flex",
    marginLeft: 20,
    marginTop: 20,
    borderColor: "#CE976038",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  order: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  info: {
    display: "flex",
    gap: 5,
    marginRight: 40,
  },
  name: {
    color: "#543A20",
    fontWeight: "600",
    fontSize: 18,
  },
  quantity: {
    color: "#0000007D",
    fontSize: 12,
    fontWeight: "500",
  },
  price: {
    color: "#543A20",
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    color: "#0000007D",
    fontSize: 12,
    fontWeight: "500",
  },
  trackButton: {
    backgroundColor: "#CE9760",
    borderRadius: 15,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  trackText: {
    color: "white",
    fontWeight: "600",
    fontSize: 13,
  },
});
