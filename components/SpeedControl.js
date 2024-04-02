import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SpeedControl = ({ speed, setSpeed }) => {
  const increaseSpeed = () => {
    if (speed < 10) setSpeed(speed + 1);
  };

  const decreaseSpeed = () => {
    if (speed > 1) setSpeed(speed - 1);
  };

  return (
    <View style={styles.speedControlContainer}>
      <TouchableOpacity onPress={decreaseSpeed} style={styles.speedButton}>
        <AntDesign name="minus" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.speedDisplay}>{speed}</Text>
      <TouchableOpacity onPress={increaseSpeed} style={styles.speedButton}>
      <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  speedControlContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  speedButton: {
    padding: 10,
    backgroundColor: "#AC76FD",
    margin: 4,
  },
  speedButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  speedDisplay: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 10,
    padding: 12,
    zIndex: 2, // Ensure the button container is above the image overlay
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default SpeedControl;
