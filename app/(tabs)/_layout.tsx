import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFD33D",
        headerStyle: { backgroundColor: "#25292E" },
        headerShadowVisible: false,
        headerTintColor: "#FFF",
        tabBarStyle: {
          backgroundColor: "#25292E",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // arrow function
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen name="about" options={{ title: "About" }} />
    </Tabs>
  );
}

export default TabsLayout;
