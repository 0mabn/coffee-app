import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Touchable,
} from "react-native";
import { Link } from "expo-router";

export default function CheckoutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.checkout}>
          <Image
            style={styles.vector}
            source={{
              uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725619/product/cbgpcbyisttkhiixbbve.png",
            }}
          ></Image>
          <Text style={styles.checkoutText}>Checkout</Text>
        </View>
        <Text style={styles.deliveryText}>Deliver Address</Text>
        <View style={styles.deliveryAddress}>
          <View style={styles.locationImgBox}>
            <Image
              style={styles.location}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725607/product/phu2ghmmczoiznpocvmk.png",
              }}
            ></Image>
          </View>
          <View style={styles.address}>
            <Text style={styles.homeText}>Home</Text>
            <Text style={styles.addressText}>Address</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Change</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.paymentText}>Add Payment Method</Text>
        <View style={styles.addPayment}>
          <View style={styles.addImgBox}>
            <Image
              style={styles.add}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725648/product/iqrefigysdouite2grki.png",
              }}
            ></Image>
          </View>
          <View style={styles.addCard}>
            <Text style={styles.addText}>Add Card</Text>
            <Text style={styles.cardText}>Credit or Debit</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.productText}>Product List</Text>
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
              <Text style={styles.with}>With Milk</Text>
              <Text style={styles.price}>$XX</Text>
            </View>
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
              <Text style={styles.with}>With Milk</Text>
              <Text style={styles.price}>$XX</Text>
            </View>
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
              <Text style={styles.with}>With Milk</Text>
              <Text style={styles.price}>$XX</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.continuePayment}>
          <Text style={styles.continueText}>Continue Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#543A20",
    width: "100%",
    height: "100%",
  },
  checkoutText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  checkout: {
    backgroundColor: "#543A20",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    gap: 110,
    marginTop: 10,
  },
  deliveryText: {
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 15,
    color: "white",
    fontWeight: "500",
    fontSize: 25,
  },
  deliveryAddress: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
  },
  locationImgBox: {
    backgroundColor: "#CE9760",
    width: 49,
    height: 49,
    display: "flex",
    padding: 15.2,
    borderRadius: 30,
  },
  address: {
    display: "flex",
    marginLeft: 15,
    gap: 5,
  },
  vector: {
    width: 11,
    height: 18,
  },
  homeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  addressText: {
    color: "white",
  },
  button: {
    backgroundColor: "#CE9760",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginLeft: 170,
  },
  buttonText: {
    fontSize: 12,
  },
  paymentText: {
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 15,
    color: "white",
    fontWeight: "500",
    fontSize: 25,
  },
  addPayment: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
  },
  addImgBox: {
    backgroundColor: "#CE9760",
    width: 49,
    height: 49,
    display: "flex",
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderRadius: 30,
  },
  addCard: {
    display: "flex",
    marginLeft: 15,
    gap: 5,
  },
  addText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  cardText: {
    color: "white",
  },
  addButton: {
    backgroundColor: "#CE9760",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 23,
    marginLeft: 129,
  },
  productText: {
    color: "white",
    fontWeight: "500",
    fontSize: 25,
    marginLeft: 20,
    marginTop: 20,
  },
  orders: {
    display: "flex",
    marginLeft: 20,
    marginTop: 10,
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
    gap: 10,
    marginRight: 40,
  },
  name: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  with: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  price: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  coffeeImg: {
    backgroundColor: "#CE9760",
    width: 110,
    height: 110,
    borderRadius: 12,
    marginRight: 15,
  },
  continueText: {
    color: "#39260B",
    fontWeight: "600",
    fontSize: 18,
  },
  continuePayment: {
    backgroundColor: "#CE9760",
    width: 350,
    height: 60,
    marginLeft: 20,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  location: {
    width: 18,
    height: 21,
  },
  add: {
    width: 14,
    height: 17,
  },
});
