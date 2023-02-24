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

const SearchBar = () => {
    const navigation = useNavigation();
    const [jsonData , setJsondata] = useState();
    const [matchString, setMatchString] = useState("")
    useEffect(()=>{
        const url = `https://countriesnow.space/api/v0.1/countries/capital`;
        const fetchAPI = async() => {
            try{
                const response = await fetch(url)
                const jsonFormat = await response.json()
                /* console.log(jsonFormat.data) */
               /*  console.log(typeof jsonFormat.data) */
                setJsondata([...jsonFormat.data])
               /*  console.log(jsonData[0]) */
                console.log(jsonData[1])
                console.log(jsonData[1].capital.match('Mariehamn'))
            }catch(err){
                console.log(err)
            }
        }
     /*   */
        
         fetchAPI(); 
        console.log(typeof matchString)
        
    },[])
    const FetchAPI2 = (inputvalue,List) => {
        return List.filter(place => {
            const regex = new RegExp(inputvalue,'gi')
            return place.name.match(regex) || place.capital.match(regex)
        })

    }
    const matchFunction = (data) =>{
        setMatchString(data)
        /* console.log(matchString) */
        console.log(FetchAPI2(matchString,jsonData))
    } 
    const gotoCountery = () =>{
        navigation.navigate('CouteryWithCity')
      /*   navigation.navigate("CouteryWithCity") */
    }
    const changeState = (data) => {
        setMatchString(data)
        console.log(matchString)
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
