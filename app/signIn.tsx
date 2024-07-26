import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { Link } from "expo-router";

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={{
          uri: "https://res.cloudinary.com/dgqvcwwhr/image/upload/v1721725529/product/na8jczg7k7zflbfamfem.png",
        }}
      ></Image>
      <Text style={styles.text}>Welcome to Login</Text>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="E-mail address"
        ></TextInput>
        <TextInput style={styles.input} placeholder="Password"></TextInput>
        <Link href="">
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </Link>
      </View>
      <Link href="../homeScreen">
        <View style={styles.signIn}>
          <Text style={styles.signInText}>Sign in</Text>
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
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingTop: 40,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 50,
  },
  inputs: {
    display: "flex",
    gap: 10,
    marginBottom: 40,
    alignItems: "flex-end",
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
  forgotPass: {
    color: "#CE9760",
    fontWeight: "bold",
  },
  signIn: {
    width: 350,
    height: 65,
    backgroundColor: "#CE9760",
    paddingTop: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "transparent",
  },
  signInText: {
    color: "#543A20",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
