import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const SocialButton = ({ iconName, url, style }) => {
  const handlePress = () => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, style]}>
      <FontAwesome name={iconName} size={20} color="white" />
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.jpg")} style={styles.logoImage} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("ScrollScreen")}
      >
        <Text style={styles.button}>Scanimate My Tattoo!</Text>
      </TouchableOpacity>

      <View style={styles.social}>
        <SocialButton
          iconName="facebook"
          url="https://www.facebook.com/Brittaliciousdesigns"
          style={styles.facebook} // Facebook color
        />
        <SocialButton
          iconName="instagram"
          url="https://www.instagram.com/brittaliciousdesignsandtattoos/"
          style={styles.instagram} // Instagram color
        />
        {/* Add more buttons as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  logoImage: {
    width: "80%",
    resizeMode: "contain",
  },
  button: {
    padding: 16,
    backgroundColor: "#AC76FD",
    margin: 4,
    fontSize: 22,
    fontWeight: "bold",
  },
  button2: {
    padding: 16,
    backgroundColor: "#AC76FD",
    margin: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    justifyContent: "space-between",
    padding: 8,
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  facebook: {
    backgroundColor: "#3b5998",
    marginRight: 4,
    padding: 8,
    borderRadius: 6,
  },
  instagram: {
    backgroundColor: "#C13584",
    marginLeft: 4,
    padding: 8,
    borderRadius: 6,
  },
});

export default HomeScreen;
