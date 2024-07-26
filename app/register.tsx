import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { Link } from "expo-router";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={{
          uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725529/product/na8jczg7k7zflbfamfem.png",
        }}
      ></Image>
      <Text style={styles.text}>Register your Account</Text>
      <View style={styles.inputs}>
        <TextInput style={styles.input} placeholder="Full Name"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="E-mail address"
        ></TextInput>
        <TextInput style={styles.input} placeholder="Password"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
        ></TextInput>
      </View>
      <Link href="./index">
        <View style={styles.register}>
          <Text style={styles.registerText}>Register</Text>
        </View>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 30,
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingTop: 40,
  },
  inputs: {
    display: "flex",
    gap: 10,
    marginBottom: 40,
  },
  input: {
    width: 350,
    height: 60,
    backgroundColor: "#16181CB2",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "transparent",
    paddingLeft: 10,
  },
  register: {
    width: 350,
    height: 65,
    backgroundColor: "#CE9760",
    paddingTop: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "transparent",
  },
  registerText: {
    color: "#543A20",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  orRegister: {
    marginTop: 30,
  },
});

type user = {
  name: string;
  email: string;
  password: string;
};
