import React,{useEffect,useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';

const SearchBar = ({setInput}) => {
    
    const matchFunction = (data) =>{
        setInput(() =>data)
    } 
    return (
        <View style={styles.searchbar}>
        <TextInput style={styles.inputBox} 
        placeholder="Enter Countery Name" 
        onChangeText={data => matchFunction(data)}></TextInput>
        </View>
    )
}
  
export default SearchBar;

const styles = StyleSheet.create({
    searchbar:{
    backgroundColor:'#fff',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:15,
    shadowOffset: {width: -10, height: 3},  
    shadowColor: '#111',  
    shadowOpacity: .8,  
    shadowRadius: 3, 
    zIndex:111, 
},
inputBox:{
    borderWidth:1,
    borderColor:'grey',
    borderRadius:10,
    padding:5,
    fontSize:24,
    width:'100%'

},

});
