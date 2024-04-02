import React from "react";

import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const SocialButton = ({ children, url, style }) => {
  const handlePress = () => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };
  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      {children}
    </TouchableOpacity>
  );
};
const sendEmail = () => {
  const email = "functionalwebdesigns@gmail.com";
  const subject = encodeURIComponent("Re: Scanimation Tattoo Scanner App");

  const url = `mailto:${email}?subject=${subject}`;

  Linking.openURL(url).catch((err) => console.error("An error occurred", err));
};
const EmailLink = () => {
  return (
    <TouchableOpacity onPress={sendEmail}>
      <Text style={{ color: "white", textDecorationLine: "underline" }}>
        Contact Developer
      </Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-dark.png")}
        style={styles.logoImage}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("ScrollScreen")}
      >
        <Text style={styles.button}>Scanimate My Tattoo!</Text>
      </TouchableOpacity>
      
      <Text style={styles.findus}>
        Find Brittalicious Designs on Social Media:
      </Text>
      <View style={styles.social}>
        <SocialButton
          url="https://www.brittaliciousdesigns.com"
          style={styles.web}
        >
          <Foundation name="web" size={24} color="white" />
        </SocialButton>
        <SocialButton
          url="https://www.facebook.com/Brittaliciousdesigns"
          style={styles.facebook}
        >
          <FontAwesome name="facebook" size={24} color="white" />
        </SocialButton>
        <SocialButton
          url="https://www.instagram.com/brittaliciousdesignsandtattoos/"
          style={styles.instagram}
        >
          <FontAwesome name="instagram" size={24} color="white" />
        </SocialButton>
        <SocialButton
          url="https://www.tiktok.com/@brittaliciousdesigns"
          style={styles.tiktok}
        >
          <FontAwesome5 name="tiktok" size={24} color="white" />
        </SocialButton>

        {/* Add more buttons as needed */}
      </View>
      <EmailLink />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
  },

  logoImage: {
    width: "80%",
    resizeMode: "contain",
    marginTop: -120,
    marginBottom: -120,
  },
  button: {
    padding: 16,
    backgroundColor: "#AC76FD",
    margin: 4,
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
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
  findus: {
    color: "white",
    fontWeight: "bold",
    paddingBottom: 8,
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  facebook: {
    backgroundColor: "#3b5998",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
  },
  instagram: {
    backgroundColor: "#C13584",
    marginLeft: 8,
    padding: 8,
    borderRadius: 6,
  },
  tiktok: {
    marginLeft: 8,
    padding: 8,
  },
  web: {
    marginRight: 8,
    padding: 8,
  },
});

export default HomeScreen;
