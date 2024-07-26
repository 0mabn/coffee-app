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

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.vector}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725619/product/cbgpcbyisttkhiixbbve.png",
          }}
        ></Image>
        <Text style={styles.favText}>Favorites</Text>
        <Image
          style={styles.bell}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721727122/product/ar7clpzgqcsitb8veska.png",
          }}
        ></Image>
      </View>
      <View style={styles.searchFav}>
        <TextInput
          placeholder="Search Your Favorite Product"
          placeholderTextColor={"#543A20"}
          style={styles.searchInput}
        ></TextInput>
        <TouchableOpacity style={styles.search}>
          <Image
            style={styles.searchImg}
            source={{
              uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725706/product/br4cnza04v7syfezhsqk.png",
            }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.coffeeBoxes}>
        <View style={styles.coffee}>
          <View style={styles.images}>
            <Image
              style={styles.coffeeImg}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
              }}
            ></Image>
            <TouchableOpacity>
              <Image
                style={styles.heart}
                source={{
                  uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805512/product/fxofitpzkrlzsukwenhf.png",
                }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.priceNtitle}>
            <Text style={styles.coffeeTitle}>Arabica</Text>
            <Text style={styles.price}>$18</Text>
          </View>
          <Text style={styles.coffeeDescription}>
            Lorem ipsum dolor sit amet consec
          </Text>
        </View>
        <View style={styles.coffee}>
          <View style={styles.images}>
            <Image
              style={styles.coffeeImg}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
              }}
            ></Image>
            <TouchableOpacity>
              <Image
                style={styles.heart}
                source={{
                  uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805512/product/fxofitpzkrlzsukwenhf.png",
                }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.priceNtitle}>
            <Text style={styles.coffeeTitle}>Arabica</Text>
            <Text style={styles.price}>$18</Text>
          </View>
          <Text style={styles.coffeeDescription}>
            Lorem ipsum dolor sit amet consec
          </Text>
        </View>
        <View style={styles.coffee}>
          <View style={styles.images}>
            <Image
              style={styles.coffeeImg}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
              }}
            ></Image>
            <TouchableOpacity>
              <Image
                style={styles.heart}
                source={{
                  uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805512/product/fxofitpzkrlzsukwenhf.png",
                }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.priceNtitle}>
            <Text style={styles.coffeeTitle}>Arabica</Text>
            <Text style={styles.price}>$18</Text>
          </View>
          <Text style={styles.coffeeDescription}>
            Lorem ipsum dolor sit amet consec
          </Text>
        </View>
        <View style={styles.coffee}>
          <View style={styles.images}>
            <Image
              style={styles.coffeeImg}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
              }}
            ></Image>
            <TouchableOpacity>
              <Image
                style={styles.heart}
                source={{
                  uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805512/product/fxofitpzkrlzsukwenhf.png",
                }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.priceNtitle}>
            <Text style={styles.coffeeTitle}>Arabica</Text>
            <Text style={styles.price}>$18</Text>
          </View>
          <Text style={styles.coffeeDescription}>
            Lorem ipsum dolor sit amet consec
          </Text>
        </View>
      </View>
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
  favText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 110,
    marginTop: 60,
  },
  searchFav: {
    display: "flex",
    flexDirection: "row",
    height: 45,
    marginLeft: 20,
    marginTop: 40,
  },
  search: {
    backgroundColor: "#CE9760",
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  searchInput: {
    backgroundColor: "white",
    width: 300,
    fontSize: 10,
    paddingLeft: 15,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  searchImg: {
    width: 25,
    height: 25,
  },
  coffeesText: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
  },
  coffeesCategory: {
    marginTop: 30,
    marginLeft: 25,
    marginBottom: 30,
  },
  coffeeNames: {
    display: "flex",
    gap: 20,
    flexDirection: "row",
  },
  coffee: {
    width: 170,
    height: 180,
    backgroundColor: "#CE9760",
    borderRadius: 15,
  },
  coffeeBoxes: {
    display: "flex",
    gap: 17,
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 30,
  },
  coffeeImg: {
    width: 115,
    height: 95,
    marginTop: 10,
    marginLeft: 22,
  },
  heart: {
    width: 17,
    height: 17,
    marginTop: 17,
  },
  images: {
    display: "flex",
    flexDirection: "row",
  },
  priceNtitle: {
    display: "flex",
    flexDirection: "row",
    gap: 45,
    marginLeft: 10,
  },
  coffeeTitle: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
  },
  price: {
    color: "#39260B",
    fontWeight: "600",
    fontSize: 18,
  },
  coffeeDescription: {
    color: "#39260B",
    fontSize: 10,
    flexWrap: "wrap",
    marginTop: 10,
    width: 130,
    marginLeft: 10,
  },
  bell: {
    width: 16,
    height: 21,
  },
  vector: {
    width: 11,
    height: 18,
  },
});
