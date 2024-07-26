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

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.vector}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725619/product/cbgpcbyisttkhiixbbve.png",
          }}
        ></Image>
        <Text style={styles.cartText}>Cart</Text>
        <Image
          style={styles.bell}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721727122/product/ar7clpzgqcsitb8veska.png",
          }}
        ></Image>
      </View>
      <View style={styles.myOrder}>
        <Text style={styles.myOrderText}>My Order</Text>
        <Text style={styles.itemsText}>You have X items in your cart</Text>
      </View>
      <View style={styles.coffees}>
        <View style={styles.coffee}>
          <Image
            style={styles.coffeeImg}
            source={{
              uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
            }}
          ></Image>
          <View style={styles.coffeeText}>
            <Text style={styles.coffeeName}>Arabica</Text>
            <Text style={styles.with}>With Milk</Text>
            <Text style={styles.price}>$XX</Text>
          </View>
          <View style={styles.quantity}>
            <TouchableOpacity style={styles.decrement}>
              <Image
                style={styles.decrementImg}
                source={{
                  uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721806172/product/a1rk6jjcv3yozn5f0ypq.png",
                }}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.number}>1</Text>
            <TouchableOpacity style={styles.increment}>
              <Image
                style={styles.incrementImg}
                source={{
                  uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725874/product/rnpccxezls4glucl6nbf.png",
                }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.coffee}>
          <Image
            style={styles.coffeeImg}
            source={{
              uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
            }}
          ></Image>
          <View style={styles.coffeeText}>
            <Text style={styles.coffeeName}>Arabica</Text>
            <Text style={styles.with}>With Milk</Text>
            <Text style={styles.price}>$XX</Text>
          </View>
          <View style={styles.quantity}>
            <TouchableOpacity style={styles.decrement}>
              <Image
                style={styles.decrementImg}
                source={{
                  uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721806172/product/a1rk6jjcv3yozn5f0ypq.png",
                }}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.number}>1</Text>
            <TouchableOpacity style={styles.increment}>
              <Image
                style={styles.incrementImg}
                source={{
                  uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725874/product/rnpccxezls4glucl6nbf.png",
                }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.coffee}>
          <Image
            style={styles.coffeeImg}
            source={{
              uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
            }}
          ></Image>
          <View style={styles.coffeeText}>
            <Text style={styles.coffeeName}>Arabica</Text>
            <Text style={styles.with}>With Milk</Text>
            <Text style={styles.price}>$XX</Text>
          </View>
          <View style={styles.quantity}>
            <TouchableOpacity style={styles.decrement}>
              <Image
                style={styles.decrementImg}
                source={{
                  uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721806172/product/a1rk6jjcv3yozn5f0ypq.png",
                }}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.number}>1</Text>
            <TouchableOpacity style={styles.increment}>
              <Image
                style={styles.incrementImg}
                source={{
                  uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725874/product/rnpccxezls4glucl6nbf.png",
                }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* coffees end  */}
      <View style={styles.coupon}>
        <View style={styles.enterCoupon}>
          <TextInput
            placeholder="Enter Coupon Code Here"
            placeholderTextColor={"#543A20"}
            style={styles.couponInput}
          ></TextInput>
          <TouchableOpacity style={styles.applyCoupon}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <View style={styles.infoTexts}>
            <Text style={styles.subTotal}>
              Sub-total--------------------------------
            </Text>
            <Text style={styles.infoPrice}>$XX</Text>
          </View>
          <View style={styles.infoTexts}>
            <Text style={styles.shipping}>
              Shipping--------------------------------
            </Text>
            <Text style={styles.infoPrice}>$XX</Text>
          </View>
          <View style={styles.infoTexts}>
            <Text style={styles.total}>
              Total------------------------------------
            </Text>
            <Text style={styles.infoPrice}>$XX</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.finOrder}>
        <Link href={"../checkout"}>
          <Text style={styles.finalText}>Finalize Order</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#543A20",
    display: "flex",
  },
  cartText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 135,
    marginTop: 60,
  },
  myOrderText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  itemsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 11,
  },
  myOrder: {
    display: "flex",
    gap: 5,
    marginTop: 30,
    marginLeft: 20,
  },
  coffee: {
    backgroundColor: "#CE9760",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    width: "90%",
    marginLeft: 20,
  },
  coffeeText: {
    display: "flex",
    gap: 5,
  },
  coffeeName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  with: {
    color: "#543A20",
    fontWeight: "bold",
    fontSize: 10,
  },
  price: {
    color: "#543A20",
    fontWeight: "bold",
    fontSize: 15,
  },
  coffeeImg: {
    width: 100,
    height: 90,
    marginTop: 10,
    marginRight: 10,
  },
  coffees: {
    marginTop: 30,
    display: "flex",
    gap: 10,
  },
  quantity: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 40,
  },
  number: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  increment: {
    backgroundColor: "#543A20",
    padding: 6,
    borderRadius: 7,
  },
  decrement: {
    backgroundColor: "#543A20",
    padding: 5,
    borderRadius: 7,
  },
  incrementImg: {
    width: 13,
    height: 13,
  },
  decrementImg: {
    width: 15,
    height: 15,
    marginTop: 0,
  },
  coupon: {
    backgroundColor: "#CE9760",
    width: "90%",
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 15,
  },
  enterCoupon: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
    width: 320,
    borderColor: "#543A20",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 20,
  },
  couponInput: {
    color: "#543A20",
    height: 40,
    width: 240,
    paddingLeft: 5,
  },
  applyCoupon: {
    backgroundColor: "#543A20",
    width: 80,
    borderColor: "#543A20",
    borderStyle: "solid",
    borderWidth: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  applyText: {
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    paddingTop: 10,
    borderTopRightRadius: 10,
  },
  info: {
    marginTop: 30,
    marginBottom: 15,
    marginLeft: 20,
  },
  finOrder: {
    width: "90%",
    borderColor: "#CE9760",
    borderRadius: 13,
    borderStyle: "solid",
    borderWidth: 2,
    marginLeft: 20,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  finalText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  infoTexts: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subTotal: {
    color: "#543A20",
    fontWeight: "600",
  },
  infoPrice: {
    color: "#543A20",
    fontWeight: "bold",
  },
  shipping: {
    color: "#543A20",
    fontWeight: "600",
  },
  total: {
    color: "#543A20",
    fontWeight: "600",
  },
  bell: {
    width: 17,
    height: 21,
  },
  vector: {
    width: 11,
    height: 18,
  },
});
