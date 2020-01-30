import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = props => {
    return <Text style={styles.mealText}>{props.children}</Text>
}

const styles = StyleSheet.create({
    mealText: {
        color: '#ADB8C4'
    }
})

export default DefaultText;