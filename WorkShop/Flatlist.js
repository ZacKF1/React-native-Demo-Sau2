/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,TouchableOpacity,Image,Alert,FlatList,Modal,View,ScrollView,Dimensions} from 'react-native';

let name = 'prite'
let number = 10;
let person = {'name':'prite'}
type Props = {};
const {width,height} = Dimensions.get('window')
const data = [{image:'https://lh5.googleusercontent.com/-Yoia1JWRtFE/XSMA27Ubr-I/AAAAAAAAA6Q/iAFeXpvw5-cZ_C0jj-lLnIdDeEOwTIdUACLIBGAYYCw/w200-h268-n-k-no/',"place_name":"Ko Kret"
},{image:'https://lh6.googleusercontent.com/-8I9bp0jrXcs/XHzFlP0_TwI/AAAAAAAADMk/bXVVMuVjPRsjugFFRVK9_a72neWmaKmwQCLIBGAYYCw/w200-h268-n-k-no/',"place_name":"Wat Paramaiyikawat"
},{image:'https://lh3.googleusercontent.com/-EhfipfdHJas/W4vqz-XgKVI/AAAAAAAAVNE/avLn008QtxwZYrvUCaeBDD7ENeeByrFXwCLIBGAYYCw/w200-h268-n-k-no/',"place_name":"Wat Yai Sawang Arom"
}];

export default class App extends Component<Props> {
  // add function

  handlerClick(){
    Alert.alert('click');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center'}}>
        <FlatList
          data={data}
          renderItem={this.renderItem.bind(this)}
          />
          {/* <FlatList
          horizontal
          data={data}
          renderItem={this.renderItem.bind(this)}
          /> */}
        </View>
      </View>
    );
  }
  renderItem({item}){
      return(
        <View style={{marginTop:20,marginBottom:20}}>
          <Image source={{uri:item.image}} style={{width:width,height:height*0.2}}/>
           <Text style={styles.title}>{item.place_name}</Text>
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'white'
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
