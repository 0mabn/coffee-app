import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.privPol}>
        <Image
          style={styles.vector}
          source={{
            uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725619/product/cbgpcbyisttkhiixbbve.png",
          }}
        ></Image>
        <Text style={styles.privPolText}>Privacy & Policy</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.terms}>Terms & Conditions</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Consequat tempus velit tempor
          eros. Orci egestas pharetra at pharetra lobortis at. Morbi sagittis
          dui orci quis arcu massa pellentesque libero euismod. Erat laoreet sit
          mi dictumst ultrices amet. Elementum in commodo scelerisque non in.
          Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh
          quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat
          tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum
          condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus
          nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus
          pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed.
          Pulvinar tortor ac aliquam tortor enim. Volutpat aliquam ut purus nibh
          quisque amet ut morbi. Sed eget auctor quis nibh mattis feugiat
          tincidunt ridiculus accumsan. Nisl fermentum nulla mattis elementum
          condimentum leo massa. Potenti leo feugiat orci at scelerisque lacus
          nibh. Egestas cras sem vestibulum maecenas massa pulvinar rhoncus
          pharetra arcu. Turpis quam non praesent dictum et arcu ultrices sed.
        </Text>
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
  privPol: {
    backgroundColor: "#543A20",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    gap: 80,
    height: 100,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  privPolText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  terms: {
    fontWeight: "bold",
    fontSize: 20,
  },
  box: {
    width: 320,
    marginLeft: 20,
    marginTop: 40,
    display: "flex",
    gap: 20,
    height: "100%",
  },
  text: {
    fontWeight: "400",
    fontSize: 15,
  },
  vector: {
    width: 11,
    height: 18,
  },
});
