
import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, TextInput, Image, Animated } from 'react-native';


class Home extends Component {

  constructor(){
    super();
    this.state={val1:''};
  }


  _onPressButton() {
     Alert.alert('You tapped the android my button!')
  }

   render() {
      return (

       < View style={styles.container}>
        <View style={styles.buttonContainer}>

       
              <Text>User Name!</Text>
          <TextInput
          value={this.state.val1}
          style={{height: 40}}
          placeholder="Email"
        />
         <Image source={require('./src/user.png')} />
        </View>
        <View style={styles.buttonContainer}>
        <Text>Password</Text>
          <TextInput
          style={{height: 40}}
          placeholder="Password"
        />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Login"
          />
          <Button
            onPress={(val1) => this.setState({val1})} 
            title="Reset"
            color="#841584"
          />
        </View>
      </View>
      );
   }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})



export default Home;