import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

const PlaceholderImage = require("@/assets/images-backgroud-Image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={PlaceholderImage} />
      </View>
      <Text style={styles.text}>HOME</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  text: {
    color: "#FFF",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#FFF",
  },
});
