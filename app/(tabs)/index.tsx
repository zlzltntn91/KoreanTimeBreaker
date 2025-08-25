import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ScreenLayout from "@/components/ScreenLayout";

const TabMain = () => {
    const time = new Date().toLocaleDateString('ko-KR');
    return (
        <ScreenLayout>
            <Text style={styles.white}>
                {time}
            </Text>
            <Text style={styles.white}>
                <Pressable style={styles.button}>
                    <Text style={styles.white}>약속잡기</Text>
                </Pressable>
            </Text>
        </ScreenLayout>
    );
};

export default TabMain;

const styles = StyleSheet.create({
    white: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    button: {
        borderRadius: 10,
        padding: 12,
        backgroundColor: 'gray',
        color: '#25292e',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',
    }
});