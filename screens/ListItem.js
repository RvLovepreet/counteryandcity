import React from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    View,
} from 'react-native';

const ListItem = (props) => {
    const navigation = useNavigation();

    const goTo = (country) => {
        console.log(typeof country)
        navigation.navigate('CouteryWithCity', {
            countryName: `${country}`
        })

    }
    return (
                  <View >
                <TouchableOpacity styles={{ flex: 1, width: '100%', height: '100%', backgroundColor: 'black' }} onPress={() => goTo(props.country)}>
                    <View style={styles.list}>
                        <Text style={styles.item}>{props.country}</Text>
                    </View>
                </TouchableOpacity>
            </View>
      

    )
}
const styles = StyleSheet.create({
    list: {
        backgroundColor: '#fff',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#d1d9e5',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        color: 'red'
    },
    item: {
        position: 'relative',
        fontSize: 18,
        color: '#111',
        textTransform: 'capitalize',
        fontFamily: 'verdana',
        fontWeight: '400',
    }
});

export default ListItem;