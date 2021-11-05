import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon, Header } from 'react-native-elements';

export default class MyHeader extends React.Component {
    render() {
      return (
        <View>
          <Header
            barStyle="dark-content"
            backgroundColor={this.props.bgColor}
            centerComponent={{
                text: this.props.title,
                style: {
                fontWeight: 'bold',
                fontSize: 20,
                color: 'black',
                marginTop:5,
                marginBottom:2
              },
            }} 
            leftComponent={
              <TouchableOpacity onPress ={()=>{
                this.props.navigation.navigate(this.props.screen)
              }}>
                <Icon
                  type="antdesign"
                  name="arrowleft"
                  color="black"
                  size={27}
                  containerStyle={{marginTop:5,marginLeft:3}}
                />
              </TouchableOpacity>
            }
          />
        </View>
      );
    }
  }