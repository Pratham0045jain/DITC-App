import * as React from 'react';
import {
  Text,
  View, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import firebase from 'firebase';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  login = async () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password);
      alert('Login Successfully done');
      this.props.navigation.navigate('HomeScreen')
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          placeholder="Enter email-id"></TextInput>

        <TextInput
          style={styles.textInput}
          onChangeText={(text1) => {
            this.setState({ password: text1 });
          }}
          placeholder="Enter password"></TextInput>

        <TouchableOpacity
          style={styles.loginButton} 
          onPress={() => {
            this.login();
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Text /* style={styles.buttonText} */>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}>
          <Text /* style={styles.buttonText} */>Not a member? Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20
  },
  textInput: {
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    borderBottomWidth: 2,
    marginBottom: 25,
    borderRadius: 10,
    height: 35,
    padding: 5,
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: '#F56123',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 200,
    height: 45,
    marginBottom: 10,
    alignSelf: 'center',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
  },
});

