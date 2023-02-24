import React,{useEffect,useState} from 'react';
import type {PropsWithChildren} from 'react';


import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

  const CounteryWithCity = () => { 

    useEffect(()=>{
      const [jsonData , setJsondata] = useState();
      const url = `https://countriesnow.space/api/v0.1/countries/cities `;
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
  
  },[])

    return(
     <View>
      <Text>
        Here is cities of countery
      </Text>
     </View>
    )
  }
  
  export default CounteryWithCity;
  
  const styles = StyleSheet.create({
   
  });
  