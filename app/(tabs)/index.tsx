import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { useData, DataProvider } from "@/contexts/DataProvider";
import { router } from "expo-router";

const HomeContent = () => {
  const { products, categories } = useData();
  console.log("categories", categories);
  console.log("products", products);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profImg}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725151/product/wepp4sfdkeziyn8t9eg4.jpg",
          }}
        ></Image>
        <View style={styles.texts}>
          <Text style={styles.text1}>Username</Text>
          <Text style={styles.text2}>Good Morning !</Text>
        </View>
        <View style={styles.twoButtons}>
          <Image
            style={styles.search}
            source={{
              uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805247/product/aqjsddcd3kx581suqkh7.png",
            }}
          ></Image>
          <Pressable onPress={() => router.push("../notification")}>
            <Image
              style={styles.bell}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721727122/product/ar7clpzgqcsitb8veska.png",
              }}
            ></Image>
          </Pressable>
        </View>
      </View>
      <View style={styles.promotion}>
        <View style={styles.promotionInfo}>
          <Text style={styles.discountText}>
            Get 20% Discount On Your First Order
          </Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit
            mattis{" "}
          </Text>
        </View>
        <Image
          style={styles.coffeePromotion}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805640/product/zrmewusadctezqjhlrij.png",
          }}
        ></Image>
      </View>
      <ScrollView horizontal style={{ ...styles.coffeesCategory, flexGrow: 0 }}>
        <View style={styles.coffeeNames}>
          {categories &&
            categories?.map((category) => {
              return (
                <Text key={category.id} style={styles.coffeesText}>
                  {category.name}
                </Text>
              );
            })}
        </View>
      </ScrollView>
      <View style={styles.coffeeBoxes}>
        {products.slice(0, 4).map((product) => (
          <View style={styles.coffee} key={product.id}>
            <View style={styles.images}>
              <Image
                style={styles.coffeeImg}
                source={{
                  uri: product.image,
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
              <Text style={styles.coffeeTitle}>{product.name}</Text>
              <Text style={styles.price}>${product.price}</Text>
            </View>
            <Text style={styles.coffeeDescription}>{product.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <DataProvider>
      <HomeContent />
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#543A20",
  },
  profImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
    marginTop: 50,
  },
  text1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  texts: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 10,
    gap: 5,
  },
  text2: {
    color: "white",
    fontWeight: "semibold",
    fontSize: 18,
  },
  search: {
    width: 20,
    height: 20,
  },
  bell: {
    width: 19,
    height: 22,
  },
  twoButtons: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 90,
  },
  promotion: {
    backgroundColor: "#CE97607D",
    width: 360,
    height: 150,
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  discountText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  descriptionText: {
    color: "white",
    fontSize: 10,
  },
  promotionInfo: {
    display: "flex",
    gap: 10,
    width: 190,
  },
  coffeePromotion: {
    width: 130,
    height: 130,
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
    justifyContent: "center",
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
    gap: 28,
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
});

// import {
//   Image,
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   Text,
//   ScrollView,
// } from "react-native";
// import { Link } from "expo-router";
// import { useAuth } from "@/contexts/AuthProvider";
// import { useData, DataProvider } from "@/contexts/DataProvider";
// import { useState } from "react";
// import { router } from "expo-router";

// export default function HomeScreen() {
//   const { onLogout } = useAuth();
//   const { products, categories } = useData();
//   console.log("categories", categories);
//   console.log("products", products);

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image
//           style={styles.profImg}
//           source={{
//             uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725151/product/wepp4sfdkeziyn8t9eg4.jpg",
//           }}
//         ></Image>
//         <View style={styles.texts}>
//           <Text style={styles.text1}>Username</Text>
//           <Text style={styles.text2}>Good Morning !</Text>
//         </View>
//         <View style={styles.twoButtons}>
//           <Image
//             style={styles.search}
//             source={{
//               uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805247/product/aqjsddcd3kx581suqkh7.png",
//             }}
//           ></Image>
//           <Image
//             style={styles.bell}
//             source={{
//               uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721727122/product/ar7clpzgqcsitb8veska.png",
//             }}
//           ></Image>
//         </View>
//       </View>
//       <View style={styles.promotion}>
//         <View style={styles.promotionInfo}>
//           <Text style={styles.discountText}>
//             Get 20% Discount On Your First Order
//           </Text>
//           <Text style={styles.descriptionText}>
//             Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit
//             mattis{" "}
//           </Text>
//         </View>
//         <Image
//           style={styles.coffeePromotion}
//           source={{
//             uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805640/product/zrmewusadctezqjhlrij.png",
//           }}
//         ></Image>
//       </View>
//       <ScrollView horizontal style={{ ...styles.coffeesCategory, flexGrow: 0 }}>
//         <View style={styles.coffeeNames}>
//           {categories &&
//             categories?.map((category) => {
//               return (
//                 <Text key={category.id} style={styles.coffeesText}>
//                   {category.name}
//                 </Text>
//               );
//             })}
//         </View>
//       </ScrollView>
//       <View style={styles.coffeeBoxes}>
//         <View style={styles.coffee}>
//           <View style={styles.images}>
//             <Image
//               style={styles.coffeeImg}
//               source={{
//                 uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
//               }}
//             ></Image>
//             <TouchableOpacity>
//               <Image
//                 style={styles.heart}
//                 source={{
//                   uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805512/product/fxofitpzkrlzsukwenhf.png",
//                 }}
//               ></Image>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.priceNtitle}>
//             <Text style={styles.coffeeTitle}>Arabica</Text>
//             <Text style={styles.price}>$18</Text>
//           </View>
//           <Text style={styles.coffeeDescription}>
//             Lorem ipsum dolor sit amet consec
//           </Text>
//         </View>
//         <View style={styles.coffee}>
//           <View style={styles.images}>
//             <Image
//               style={styles.coffeeImg}
//               source={{
//                 uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
//               }}
//             ></Image>
//             <TouchableOpacity>
//               <Image
//                 style={styles.heart}
//                 source={{
//                   uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805512/product/fxofitpzkrlzsukwenhf.png",
//                 }}
//               ></Image>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.priceNtitle}>
//             <Text style={styles.coffeeTitle}>Arabica</Text>
//             <Text style={styles.price}>$18</Text>
//           </View>
//           <Text style={styles.coffeeDescription}>
//             Lorem ipsum dolor sit amet consec
//           </Text>
//         </View>
//         <View style={styles.coffee}>
//           <View style={styles.images}>
//             <Image
//               style={styles.coffeeImg}
//               source={{
//                 uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
//               }}
//             ></Image>
//             <TouchableOpacity>
//               <Image
//                 style={styles.heart}
//                 source={{
//                   uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805512/product/fxofitpzkrlzsukwenhf.png",
//                 }}
//               ></Image>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.priceNtitle}>
//             <Text style={styles.coffeeTitle}>Arabica</Text>
//             <Text style={styles.price}>$18</Text>
//           </View>
//           <Text style={styles.coffeeDescription}>
//             Lorem ipsum dolor sit amet consec
//           </Text>
//         </View>
//         <View style={styles.coffee}>
//           <View style={styles.images}>
//             <Image
//               style={styles.coffeeImg}
//               source={{
//                 uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725278/product/fff39qbrh15y3v7jqmzz.png",
//               }}
//             ></Image>
//             <TouchableOpacity>
//               <Image
//                 style={styles.heart}
//                 source={{
//                   uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721805512/product/fxofitpzkrlzsukwenhf.png",
//                 }}
//               ></Image>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.priceNtitle}>
//             <Text style={styles.coffeeTitle}>Arabica</Text>
//             <Text style={styles.price}>$18</Text>
//           </View>
//           <Text style={styles.coffeeDescription}>
//             Lorem ipsum dolor sit amet consec
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     alignItems: "center",
//     // justifyContent: "center",
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#543A20",
//   },
//   profImg: {
//     width: 60,
//     height: 60,
//     borderRadius: 50,
//   },
//   header: {
//     display: "flex",
//     flexDirection: "row",
//     marginBottom: 30,
//     marginTop: 50,
//   },
//   text1: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   texts: {
//     display: "flex",
//     justifyContent: "center",
//     marginLeft: 10,
//     gap: 5,
//   },
//   text2: {
//     color: "white",
//     fontWeight: "semibold",
//     fontSize: 18,
//   },
//   search: {
//     width: 20,
//     height: 20,
//   },
//   bell: {
//     width: 19,
//     height: 22,
//   },
//   twoButtons: {
//     display: "flex",
//     flexDirection: "row",
//     gap: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 90,
//   },
//   promotion: {
//     backgroundColor: "#CE97607D",
//     width: 360,
//     height: 150,
//     display: "flex",
//     flexDirection: "row",
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   discountText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   descriptionText: {
//     color: "white",
//     fontSize: 10,
//   },
//   promotionInfo: {
//     display: "flex",
//     gap: 10,
//     width: 190,
//   },
//   coffeePromotion: {
//     width: 130,
//     height: 130,
//   },
//   coffeesText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "400",
//   },
//   coffeesCategory: {
//     marginTop: 30,
//     marginLeft: 25,
//     marginBottom: 30,
//   },
//   coffeeNames: {
//     display: "flex",
//     gap: 20,
//     flexDirection: "row",
//   },
//   coffee: {
//     width: 170,
//     height: 180,
//     backgroundColor: "#CE9760",
//     borderRadius: 15,
//   },
//   coffeeBoxes: {
//     display: "flex",
//     gap: 17,
//     flexWrap: "wrap",
//     flexDirection: "row",
//     marginLeft: 15,
//   },
//   coffeeImg: {
//     width: 115,
//     height: 95,
//     marginTop: 10,
//     marginLeft: 22,
//   },
//   heart: {
//     width: 17,
//     height: 17,
//     marginTop: 17,
//   },
//   images: {
//     display: "flex",
//     flexDirection: "row",
//   },
//   priceNtitle: {
//     display: "flex",
//     flexDirection: "row",
//     gap: 45,
//     marginLeft: 10,
//   },
//   coffeeTitle: {
//     color: "white",
//     fontWeight: "500",
//     fontSize: 20,
//   },
//   price: {
//     color: "#39260B",
//     fontWeight: "600",
//     fontSize: 18,
//   },
//   coffeeDescription: {
//     color: "#39260B",
//     fontSize: 10,
//     flexWrap: "wrap",
//     marginTop: 10,
//     width: 130,
//     marginLeft: 10,
//   },
// });
