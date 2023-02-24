
import React,{useState} from 'react';
import type {PropsWithChildren} from 'react';
import ListItem from './ListItem';
import List from './listofcountries';
import SearchBar from './SearchBar';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';


const Home = () => {
    const [input , setInput] = useState('')
    console.log(input)
  return(
    <SafeAreaView>
    <View>
         <SearchBar matchString={setInput}  />  
        {/*  <SearchBar  />   */}
        <List /> 
    </View>
    </SafeAreaView>

  )
}

export default Home;

const styles = StyleSheet.create({
 
});

