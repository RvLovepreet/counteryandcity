
import React from 'react';
import type {PropsWithChildren} from 'react';

import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import List from './screens/List';
import Home from './screens/Home';
import ListItem from './screens/ListItem';
import CounteryWithCity from './screens/couteryWithCityName';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer  independent={true}>
       <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CouteryWithCity" component={CounteryWithCity} />
      </Stack.Navigator>
    </NavigationContainer> 
 /*    <Home/> */
   /*  <SafeAreaView>

    <View>
    <Text>
      Hello Everyone
    </Text>
   <List/>
    </View>
    </SafeAreaView> */
  )
}

export default App;

const styles = StyleSheet.create({
 
});

