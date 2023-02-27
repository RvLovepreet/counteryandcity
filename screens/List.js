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
        <>
        
        <View>
            <ScrollView>
            <FlatList 
            data= {jsonData}
            renderItem = {({item}) =>
            <ListItem country={item.name} />
            }
            />
            </ScrollView>
        </View>
   
        </>
    )
}
export default List;


const styles = StyleSheet.create({
    
});
