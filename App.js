import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  WildLifeCardEditScreen,
  MainScreen,
  FieldGuideScreen,
} from "./screens";
import PopMenuContextProvider from "./store/context/popMenu-context";
import ImageSettingsContextProvider from "./store/context/imageSettings-context";
const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ImageSettingsContextProvider>
          <PopMenuContextProvider>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "white" },
                headerTintColor: "gray",
                contentStyle: { backgroundColor: "black" },
              }}
            >
              <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ title: "MainScreen" }}
              />

              <Stack.Screen
                name="FieldGuideScreen"
                component={FieldGuideScreen}
                options={{ title: "FieldGuideScreen" }}
              />

              <Stack.Screen
                name="WildLifeCardEditScreen"
                component={WildLifeCardEditScreen}
                options={{ title: "Editor" }}
              />
            </Stack.Navigator>
          </PopMenuContextProvider>
        </ImageSettingsContextProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
