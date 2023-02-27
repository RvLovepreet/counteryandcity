
import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import ListItem from './ListItem';
import List from './List';
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
  const [input, setInput] = useState('')
  const [jsonData, setJsondata] = useState();
  const [searchData, setSearchData] = useState()
  const url = `https://countriesnow.space/api/v0.1/countries/capital`;
  
  const fetchAPI = async () => {
    try {
      const response = await fetch(url)
      const jsonFormat = await response.json()
      setSearchData([...jsonFormat.data])
      setJsondata([...jsonFormat.data])
    } catch (err) {
      console.log(err)
    }
  }

//useEffect for input 
  useEffect(() => {
    const FetchAPI2 = (inputvalue, list) => {
      return list.filter(place => {
        const regex = new RegExp(inputvalue, 'gi')
        return place.name.match(regex)
      })
    }

    //debouncing
    setTimeout(() => {
      input.length ? setSearchData([...FetchAPI2(input, jsonData)]) : fetchAPI()
    }, 300)

  }, [input])

  return (
    <SafeAreaView>
      <View >
        <SearchBar setInput={setInput} />
        <List  jsonData={searchData} />
      </View>
    </SafeAreaView>
  )

}

export default Home;

const styles = StyleSheet.create({

});

