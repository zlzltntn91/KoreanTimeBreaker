import {Tabs} from "expo-router";
import {StatusBar, StyleSheet} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <>
            <StatusBar barStyle={"light-content"}/>
            <SafeAreaProvider>
                <Tabs screenOptions={{
                    // headerShown: false,
                    tabBarActiveTintColor: '#ffd33d',
                    headerStyle: {
                        backgroundColor: '#25292e',
                    },
                    headerShadowVisible: false,
                    headerTintColor: '#fff',
                    tabBarStyle: {
                        backgroundColor: '#25292e',
                    },
                }}>
                    <Tabs.Screen name="index" options={{headerShown: false, title: "약속"}}/>
                </Tabs>
            </SafeAreaProvider>
        </>
    );
}

