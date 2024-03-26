import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Animated,
  Dimensions,
} from "react-native";
import Slider from "@react-native-community/slider";

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
        <Text style={styles.speedButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.speedDisplay}>{speed}</Text>
      <TouchableOpacity onPress={increaseSpeed} style={styles.speedButton}>
        <Text style={styles.speedButtonText}>+</Text>
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
  },
});

export default SpeedControl;
