/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TextInput, View,Dimensions} from 'react-native';

let name = 'prite'
let number = 10;
let person = {'name':'prite'}
type Props = {};
const {width,height} = Dimensions.get('window')
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom:20}}>
        <TextInput
          style={styles.textInput}
          placeholder={'Username'}
          placeholderTextColor={'black'}
          keyboardType='numeric'
        />
        </View>
      
         <TextInput
         secureTextEntry={true}
          style={styles.textInput}
          placeholder={'Password'}
          placeholderTextColor={'black'}

        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'red'
  },
  textInput:{
    fontSize:30,
    color:'black',
    textAlign:'center'
  },
  title:{
    fontSize:20,
    color:'green',
    marginTop:10,
  }
});
