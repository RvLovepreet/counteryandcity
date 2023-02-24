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

const List = ({item}) => {
    const [jsonData , setJsondata] = useState();
    useEffect(()=>{
        const url = `https://countriesnow.space/api/v0.1/countries/capital`;
        const fetchAPI = async() => {
            try{
                const response = await fetch(url)
                const jsonFormat = await response.json()
                console.log(jsonFormat.data)
                console.log(typeof jsonFormat.data)
                setJsondata([...jsonFormat.data])
                console.log(jsonData[0])
                
               /*  setJsondata(jsonFormat.data[0].capital) */
            }catch(err){
                console.log(err)
            }
        }
         fetchAPI(); 
    },[])
    
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
