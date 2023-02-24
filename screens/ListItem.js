import React from 'react';
import type {PropsWithChildren} from 'react';
import {
FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';

const ListItem = (props) => {
    return (
        
        <View style={styles.list}>
            <TouchableOpacity>
            <Text style={styles.item}>{props.country}</Text>
            </TouchableOpacity>
        </View>
        
    )
}
const styles = StyleSheet.create({
    list:{
        backgroundColor:'#fff',
        paddingBottom:20,
        borderBottomWidth :1,
         borderBottomColor: '#d1d9e5',  
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        color:'red'
    },
    item:{
        fontSize:18,
        color:'#111',
        textTransform:'capitalize',
        fontFamily:'verdana',
        fontWeight:'400',    
    }
});

export default ListItem;