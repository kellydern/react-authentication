import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp( {
    apiKey: 'AIzaSyAsKCB9aU-WJWi3ywQRZOiHm1bn3MqWsTk',
    authDomain: 'authentication-61c81.firebaseapp.com',
    databaseURL: 'https://authentication-61c81.firebaseio.com',
    projectId: 'authentication-61c81',
    storageBucket: 'authentication-61c81.appspot.com',
    messagingSenderId: '3384604428'
  });
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
