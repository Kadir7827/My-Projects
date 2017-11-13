import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, TextInput } from 'react-native';
//import {StackNavigator} form 'react-navigation'
import Home from './Home';
import ReactCalculator from './src/ReactCalculator';
//import { StackNavigator } from 'StackNavigator';         

export default class ButtonBasics extends Component {

render: function() { var navigationView = ( <View style={{flex: 1, backgroundColor: '#fff'}}> <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}> Im in the Drawer!</Text> </View> ); return ( <DrawerLayoutAndroid drawerWidth={300} drawerPosition={DrawerLayoutAndroid.positions.Left} renderNavigationView={() => navigationView}> <View style={{flex: 1, alignItems: 'center'}}> <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text> <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text> </View> </DrawerLayoutAndroid> ); },
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('Navigate', () => ButtonBasics);





