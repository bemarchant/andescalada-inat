import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainScreen from "./screen/MainScreen";
import FieldGuideScreen from "./screen/FieldGuideScreen";
import EditWildLifeCardScreen from "./screen/EditWildLifeCardScreen";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#454356ff" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#454545ff" },
          }}
        >
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
              title: "El Manzano",
            }}
          />
          <Stack.Screen
            name="FieldGuideScreen"
            component={FieldGuideScreen}
            options={{
              title: "El Manzano",
            }}
          />

          <Stack.Screen
            name="EditWildLifeCardScreen"
            component={EditWildLifeCardScreen}
            options={{
              title: "El Manzano",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#454545ff",
  },
});
