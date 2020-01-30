import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import MealsList from '../components/MealsList';

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style = {styles.content}>
                <Text style = {styles.text}>Ooops! There's no favorite meals here. Start adding some!</Text>
            </View>
        )
    }

    return <MealsList listData={favMeals} navigation={props.navigation} />
};

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your favorites meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item 
                    title="Menu" 
                    iconName='ios-menu' 
                    onPress={() => {
                    navData.navigation.toggleDrawer();
                    }
                }/>
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    content: {
       flex: 1, 
       justifyContent: 'center',
       alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#ADB8C4',
        textAlign: 'center'
    }
})

export default FavoritesScreen;