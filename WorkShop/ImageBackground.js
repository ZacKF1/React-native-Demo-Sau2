/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,ImageBackground, View,Dimensions} from 'react-native';

let name = 'prite'
let number = 10;
let person = {'name':'prite'}
type Props = {};
const {width,height} = Dimensions.get('window')
const image_url = 'https://lh5.googleusercontent.com/-Yoia1JWRtFE/XSMA27Ubr-I/AAAAAAAAA6Q/iAFeXpvw5-cZ_C0jj-lLnIdDeEOwTIdUACLIBGAYYCw/w200-h268-n-k-no/'
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground 
        style={{width:width,height:height*0.5}}
        source={{uri:image_url}}
        resizeMode='cover'
        >
            <Text style={{color:'black',fontSize:30
            ,textAlign:'center'}}>
              Text
            </Text>
          </ImageBackground>
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
