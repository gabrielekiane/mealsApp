import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/mealsActions';

const FilterSwitch = props => {
    return(
        <View style={styles.filterContainer}>
            <Text style={styles.text}>{props.label}</Text>
            <Switch 
                trackColor={{ true: Colors.primaryColor }}
                value={props.state}
                onValueChange={props.onChange} 
            />
        </View>
    );
}

const FiltersScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setisLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegeterian: isVegeterian
        };
        
        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Availables filters / Restrictions</Text>
            <FilterSwitch 
                label='Gluten-free' 
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch 
                label='Lactose-free' 
                state={isLactoseFree} 
                onChange={newValue => setisLactoseFree(newValue)}
            />
            <FilterSwitch 
                label='Vegan' 
                state={isVegan} 
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch 
                label='Vegetarian' 
                state={isVegeterian} 
                onChange={newValue => setIsVegeterian(newValue)}
            />
        </View>
    )
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter meals',
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
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item 
                    title="Save" 
                    iconName='ios-save' 
                    onPress={
                        navData.navigation.getParam('save')
                    }
                />
            </HeaderButtons>
        )
    }
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E6ECF4',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        margin: 20,
        color: '#ADB8C4',
        fontWeight: 'bold'
    },
    text: {
        color: Colors.primaryColor,
        fontSize: 20,
    }
});

export default FiltersScreen;