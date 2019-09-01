/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions} from 'react-native';

let name = 'prite'
let number = 10;
let person = {'name':'prite'}
type Props = {};
const {width,height} = Dimensions.get('window')
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:0.33,backgroundColor:'yellow',justifyContent:'center'}}>
          <View style={{width:width*0.2,height:width*0.2,alignSelf:'flex-end'
          ,backgroundColor:'white'}}>

          </View>
        </View>
        <View style={{flex:0.33,backgroundColor:'green'}}>
        <View style={{width:50,height:50,alignSelf:'flex-start'
          ,backgroundColor:'white',marginTop:30,marginLeft:30}}>

          </View>
        </View>
        <View style={{flex:0.34,backgroundColor:'blue'}}>
        <View style={{width:50,height:50,alignSelf:'center'
          ,backgroundColor:'white'}}>

          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,backgroundColor:'red',
    justifyContent:'center',
  },
  title:{
    fontSize:20,
    color:'green',
    marginTop:10,
  }
});
