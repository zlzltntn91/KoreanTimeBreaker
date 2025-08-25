import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

interface ScreenLayoutProps {
    children: React.ReactNode;
    style?: object;
}

export default function ScreenLayout({children, style}: ScreenLayoutProps) {
    return (
        <SafeAreaView style={styles && styles.container}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        color: '#fff',
    },
});