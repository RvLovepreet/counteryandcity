import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import CitiesList from './CitiesList';
import List from './List';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View,
} from 'react-native';

const CounteryWithCity = ({ route, navigation }) => {
  const { countryName } = route.params;
  const [cities, setCities] = useState()
  const [noCity, setNoCity] = useState(true)
  console.log(countryName)
  useEffect(() => {

    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      body: JSON.stringify({
        country: countryName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    }

    const url = 'https://countriesnow.space/api/v0.1/countries/cities'
    fetch(url, requestOptions)
      .then(data => data.json()).catch(err => console.log('error'))
      .then(result => setCities([...result.data])).catch(err => setNoCity(false))
  }, [])
  return (
    <View>
      <View style={styles.citylist}>
        <Text style={styles.countryName}>{countryName}</Text>
        {noCity ?
          <FlatList
            data={cities}
            renderItem={({ item }) =>
              <CitiesList city={item} />} /> :
          <View style={styles.nocity}>
            <Text style={styles.nocitycontent} >No City Provided for {countryName}</Text>
          </View>
        }
      </View>
    </View>
  )
}

export default CounteryWithCity;

const styles = StyleSheet.create({
  citylist:{
    marginBottom:80
  },
  countryName: {
    textAlign: 'center',
    color: '#009dff',
    backgroundColor: '#fff',
    shadowOffset: { width: -10, height: 3 },
    shadowColor: '#111',
    shadowOpacity: .8,
    shadowRadius: 3,
    zIndex: 111, fontSize: 40, fontWeight: '700'
  },

  nocity: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    fontSize: 23
  },
  nocitycontent: {
    fontSize: 50,
    fontWeight: '800',
    color: '#009dff'
  }
});
