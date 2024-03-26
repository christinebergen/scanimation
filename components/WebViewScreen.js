import React from "react";
import {
  View,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Linking,
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

const images = [
  { uri: require("../assets/tattoo6.jpg") },
  { uri: require("../assets/tattoo7.jpg") },
  { uri: require("../assets/tattoo8.jpg") },
  { uri: require("../assets/tattoo9.jpg") },
  { uri: require("../assets/tattoo10.jpg") },
  { uri: require("../assets/tattoo11.jpg") },
  { uri: require("../assets/tattoo12.jpg") },
  { uri: require("../assets/tattoo13.jpg") },
  { uri: require("../assets/tattoo14.jpg") },
  { uri: require("../assets/tattoo15.jpg") },
  { uri: require("../assets/tattoo16.jpg") },
  { uri: require("../assets/tattoo17.jpg") },
];

const numColumns = 2; // Number of columns in the grid
const size = Dimensions.get("window").width / numColumns; // Calculate the size of each item based on screen width
const Gallery = () => {
  const renderItem = ({ item }) => (
    <Image source={item.uri} style={styles.image} />
  );

  return (
    <View>
      <Text>Tattoos by</Text>
      <Text>Brittaliciousdesigns</Text>
      <View style={styles.social}>
        <SocialButton
          iconName="facebook"
          url="https://www.facebook.com/Brittaliciousdesigns"
          onPress={() => console.log("Facebook Pressed")}
          style={styles.facebook} // Facebook color
        />
        <SocialButton
          iconName="instagram"
          url="https://www.instagram.com/brittaliciousdesignsandtattoos/"
          onPress={() => console.log("Instagram Pressed")}
          style={styles.instagram} // Instagram color
        />
        {/* Add more buttons as needed */}
      </View>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  image: {
    width: size,
    height: size,
    resizeMode: "cover",
    borderColor: "#AC76FD",
    borderWidth: 6,
    margin: 2,
  },
});

export default Gallery;
