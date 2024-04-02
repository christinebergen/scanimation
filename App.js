import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen";
import ScrollScreen from "./components/ScrollScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "black", // Header background color
          },
          headerTintColor: "white", // Color of header title and buttons
          headerTitleStyle: {
            fontWeight: "bold", // Style of header title
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Tattoo Animator" }}
        />
        <Stack.Screen
          name="ScrollScreen"
          component={ScrollScreen}
          options={{ title: "Tattoo Animator" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
