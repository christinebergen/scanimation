import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Animated,
  Dimensions,
} from "react-native";
import SpeedControl from "./SpeedControl";
import { Camera, CameraType } from "expo-camera";

const screenWidth = Dimensions.get("window").width;

export default function CameraScreen({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false); // New state for recording status
  const cameraRef = useRef(null); // Reference to the camera
  const [numberOfLines, setNumberOfLines] = useState(0);

  const imageWidth = 400;
  const scrollX = useRef(new Animated.Value(0)).current; // for image scrolling
  const [scrollSpeed, setScrollSpeed] = useState(5); // speed of scrolling

  const VerticalLine = () => <View style={styles.verticalLine} />;

  const LineContainer = () => {
    const numberOfLines = 500; // Adjust the number of lines
    return (
      <View style={styles.lineContainer}>
        {Array.from({ length: numberOfLines }).map((_, index) => (
          <VerticalLine key={index} />
        ))}
      </View>
    );
  };

  const startScrolling = () => {
    scrollX.setValue(screenWidth); // Start from the right
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: -screenWidth, // Move to the left
        duration: 150000 / scrollSpeed,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startScrolling();
  }, [scrollSpeed]); // Dependency on scrollSpeed

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <Animated.View
          style={[
            styles.overlay,
            {
              transform: [{ translateX: scrollX }],
            },
          ]}
        >
          <LineContainer />
          <LineContainer />
        </Animated.View>
        <SpeedControl speed={scrollSpeed} setSpeed={setScrollSpeed} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.text}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: -150,
    right: 0,
    bottom: 0,
    marginBottom: 90,
    marginTop: 60,
    flexDirection: "row", // Ensure horizontal layout
    width: (12 + 2) * 500,
  },
  verticalLine: {
    width: 12, // Adjust the thickness of the line
    marginRight: 2,
    height: "100%",
    backgroundColor: "black",
  },

  lineContainer: {
    flexDirection: "row",
    width: (12 + 2) * 500, // Double the width for continuous animation
  },

  text: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    padding: 8,
    backgroundColor: "#AC76FD",
    margin: 4,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,

    padding: 16,
    width: "100%",
    zIndex: 2, // Ensure the button container is above the image overlay
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
