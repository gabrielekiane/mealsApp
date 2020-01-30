import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback
} from 'react-native';

const CategoryGridTile = props => {

    let TouchableCmp = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'rgba(163,177,198,0.9)',
        shadowOpacity: 0.9,
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
        textAlign: 'right'
    }
});

export default CategoryGridTile;