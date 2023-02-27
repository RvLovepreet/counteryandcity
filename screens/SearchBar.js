import React,{useEffect,useState} from 'react';
import { useNavigation } from '@react-navigation/native';
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
    const navigation = useNavigation();
    const matchFunction = (data) =>{
        setInput(() => data)
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
searchbtn:{
    backgroundColor:'#0062ff',
    textAlign:'center',
    width:'20%',
    padding:5, 
    display:'flex',
    marginLeft:5,
    borderRadius:10,
    alignItems:'center',
},
searchbtntext:{
    color:'#fff',
    fontSize:24,
    fontWeight:'600'
},
});
