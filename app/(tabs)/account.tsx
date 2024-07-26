import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal,
} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function AccountScreen() {
  const [showBox, setShowBox] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.vector}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725619/product/cbgpcbyisttkhiixbbve.png",
          }}
        ></Image>
        <Text style={styles.proText}>Profile</Text>
        <Image
          style={styles.bell}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721727122/product/ar7clpzgqcsitb8veska.png",
          }}
        ></Image>
      </View>
      <View style={styles.imgAndName}>
        <Image
          style={styles.profImg}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725151/product/wepp4sfdkeziyn8t9eg4.jpg",
          }}
        ></Image>
        <Text style={styles.username}>Username</Text>
      </View>
      <View style={styles.settings}>
        <View style={styles.option}>
          <View style={styles.optionImg1}>
            <Image
              style={styles.optionImg2}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725735/product/ds8k3ijhfstj3lblfqos.png",
              }}
            ></Image>
          </View>
          <Text style={styles.title}>Your Profile</Text>
          <TouchableOpacity>
            <Image
              style={styles.vector}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721726079/product/v9sqnw657s8udeazlhwh.png",
              }}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.option}>
          <View style={styles.optionImg1}>
            <Image
              style={styles.optionImg2}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725856/product/wfh1rx32bgbmt5aijwqt.png",
              }}
            ></Image>
          </View>
          <Text style={styles.title}>My Orders</Text>
          <Link href={"../myOrders"}>
            <Image
              style={styles.vector}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721726079/product/v9sqnw657s8udeazlhwh.png",
              }}
            ></Image>
          </Link>
        </View>
        <View style={styles.option}>
          <View style={styles.optionImg1}>
            <Image
              style={styles.optionImg2}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721726053/product/fcvrrj7tcllqqp9r7ick.png",
              }}
            ></Image>
          </View>
          <Text style={styles.title}>Privacy Policy</Text>
          <Link href={"../privacyPolicy"}>
            <Image
              style={styles.vector}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721726079/product/v9sqnw657s8udeazlhwh.png",
              }}
            ></Image>
          </Link>
        </View>
        <View style={styles.option}>
          <View style={styles.optionImg1}>
            <Image
              style={styles.optionImg2}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725722/product/cn6gkzaxjskmcgtjk0sg.png",
              }}
            ></Image>
          </View>
          <Text style={styles.title}>Invite Friend</Text>
          <TouchableOpacity>
            <Image
              style={styles.vector}
              source={{
                uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721726079/product/v9sqnw657s8udeazlhwh.png",
              }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logout}>
        <View style={styles.optionImg1}>
          <Image
            style={styles.optionImg2}
            source={{
              uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725889/product/vla5khqwxh4hma2jv7ft.png",
            }}
          ></Image>
        </View>
        <Text style={styles.title}>Logout</Text>
        <TouchableOpacity onPress={() => setShowBox(!showBox)}>
          <Image
            style={styles.vector}
            source={{
              uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721726079/product/v9sqnw657s8udeazlhwh.png",
            }}
          ></Image>
        </TouchableOpacity>
        {showBox && (
          <Modal
            transparent={true}
            animationType="slide"
            visible={showBox}
            onRequestClose={() => setShowBox(false)}
          >
            <View style={styles.logoutContainer}>
              <View style={styles.box}>
                <Text style={styles.logoutText}>Logout</Text>
                <Text style={styles.confirmation}>
                  Are you sure you want to logout?
                </Text>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.yesButton}>
                    <Text style={styles.yesText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.noButton}
                    onPress={() => setShowBox(false)}
                  >
                    <Text style={styles.noText}>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        )}
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
    alignItems: "center",
  },
  proText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 123,
    marginTop: 60,
  },
  profImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 40,
    marginLeft: 17,
  },
  username: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  imgAndName: {
    display: "flex",
    gap: 10,
  },
  settings: {
    marginTop: 50,
    display: "flex",
    gap: 20,
  },
  option: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  optionImg2: {
    width: 25,
    height: 25,
  },
  optionImg1: {
    backgroundColor: "#CE9760",
    borderRadius: 30,
    padding: 14,
    marginRight: 20,
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    width: 250,
  },
  vector: {
    width: 11,
    height: 18,
  },
  logout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 80,
  },
  box: {
    backgroundColor: "#CE9760",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    gap: 20,
    width: 350,
    marginLeft: 20,
    marginTop: 350,
  },
  logoutText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  confirmation: {
    color: "#39260B",
    fontWeight: "400",
    fontSize: 13,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
  },
  yesButton: {
    backgroundColor: "#543A20",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  yesText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  noButton: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderStyle: "solid",
    borderWidth: 1,
  },
  noText: {
    color: "#543A20",
    fontWeight: "600",
    fontSize: 14,
  },
  logoutContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
  },
  bell: {
    width: 17,
    height: 21,
  },
});
