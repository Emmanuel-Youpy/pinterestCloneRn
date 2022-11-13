import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabScreen from "./screens/TabScreen";
import PinScreen from "./screens/PinScreen";
import { NhostClient, NhostReactProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";
import AuthStackNavigator from "./screens/AuthNavigator/AuthStackNavigator";
import CreatorProfileScreen from "./screens/CreatorProfileScreen";
import PopularViewScreen from "./screens/PopularViewScreen";
import PinScreen2 from "./screens/PinScreen2";
import SettingsScreen from "./screens/SettingsScreen";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import themeReducer from "./stores/themeReducer";

const nhost = new NhostClient({
  subdomain: "hckqnkyordkdhgfhetwm",
  region: "us - east - 1",
});

const Stack = createNativeStackNavigator();
// const store = createStore(themeReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <NhostReactProvider nhost={nhost}>
      {/* <NhostApolloProvider nhost={nhost}> */}
      {/* <Provider store={store}> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={AuthStackNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tabs"
            component={TabScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pin"
            component={PinScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pin2"
            component={PinScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Creator"
            component={CreatorProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PopularView"
            component={PopularViewScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </Provider> */}
      {/* </NhostApolloProvider> */}
    </NhostReactProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
