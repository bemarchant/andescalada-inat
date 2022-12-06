import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleSheet } from "react-native";
import MainScreen from "./screen/MainScreen";
import FieldGuideScreen from "./screen/FieldGuideScreen";
const queryClient = new QueryClient();

let screen = <MainScreen />;
//screen = <FieldGuideScreen />;

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>{screen}</QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#454545ff",
  },
});
