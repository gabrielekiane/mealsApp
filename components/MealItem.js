import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { Platform } from '@unimodules/core';

import DefaultText from './DefaultText';

const MealItem = props => {
    return(
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}} >
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage} >
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}} >
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.complexity}</DefaultText>
                        <DefaultText>{props.affordability}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#E6ECF4',
        marginVertical: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 5
    },
    mealHeader: {
        height: '85%',
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    },
});

export default MealItem;