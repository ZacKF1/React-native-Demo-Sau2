/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TouchableOpacity,Alert,ActivityIndicator, View,ScrollView,Dimensions} from 'react-native';

let name = 'prite'
let number = 10;
let person = {'name':'prite'}
type Props = {};
const {width,height} = Dimensions.get('window')
const image_url = 'https://lh5.googleusercontent.com/-Yoia1JWRtFE/XSMA27Ubr-I/AAAAAAAAA6Q/iAFeXpvw5-cZ_C0jj-lLnIdDeEOwTIdUACLIBGAYYCw/w200-h268-n-k-no/'
export default class App extends Component<Props> {
  // add function
  handlerClick(){
    Alert.alert('click');
  }
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
              Loading
          </Text>
          <ActivityIndicator
            size='large'
            color='red'
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
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
