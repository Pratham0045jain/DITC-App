import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      address: '',
      contact: '',
      confirmPassword: '',
    };
  }

  signUp = async () => {
    if (this.state.password !== this.state.confirmPassword) {
      Alert.alert('password mismatches');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          db.collection('users').add({
            emailId: this.state.email,
            name: this.state.name,
            address: this.state.address,
            contact: this.state.contact,
          });
          return Alert.alert('New user is created', '', [
            {
              text: 'Ok',
              onPress: () => {
                this.setState({ modalVisible: false });
              },
            },
          ]);
        }).then(()=>{
          this.props.navigation.navigate('HomeScreen')
        })
        .catch((err) => {
          return Alert.alert(err.message);
        });
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          maxLength={20}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Contact"
          maxLength={10}
          keyboardType={'numeric'}
          onChangeText={(text) => {
            this.setState({ contact: text });
          }}></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Address"
          multiline={true}
          onChangeText={(text) => {
            this.setState({ address: text });
          }}></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Email-Id"
          keyboardType={'email-address'}
          onChangeText={(text) => {
            this.setState({ email: text });
          }}></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="Confirm-Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ confirmPassword: text });
          }}></TextInput>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.signUp();
          }}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}>
          <Text style={styles.buttonText}>Already a member? Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 3,
  },
});