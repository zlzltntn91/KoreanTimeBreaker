import {Button, StatusBar, StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Link} from "expo-router";

export default function Index() {
    return (
        <>
            <SafeAreaProvider>
                <StatusBar barStyle={"light-content"}/>
                <View
                    style={styles.container}
                >
                    <Text style={styles.text}>로그인</Text>
                    <Text style={styles.text}>회원가입</Text>
                    <Link href={"./(tabs)"} asChild>
                        <Button title={"Hi"}></Button>
                    </Link>
                </View>
            </SafeAreaProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#25292e',
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
})