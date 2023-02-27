import React,{useEffect,useState} from 'react';
import type {PropsWithChildren} from 'react';
import ListItem from './ListItem';
import {
FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const List = ({jsonData}) => { 
    return (
       
        <View style={styles.countryList} >
            <FlatList  
            data= {jsonData}
            renderItem = {({item}) =>
            <ListItem  country={item.name}  />
            }
            />
        </View>
   
     
    )
}
export default List;


const styles = StyleSheet.create({
    countryList:{marginBottom:200},
});
