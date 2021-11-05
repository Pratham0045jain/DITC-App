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

export default class HomeScreenHeader extends React.Component {
    render() {
        return (
            <SafeAreaProvider style={styles.container}>

                <Header
                    barStyle="light-content"
                    backgroundColor={this.props.bgColor}
                    centerComponent={{
                        text: this.props.title,
                        style: {
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: 'white',
                            marginTop: 5,
                            marginBottom: 2
                        },
                    }}
                    leftComponent={
                        <TouchableOpacity>
                            <Icon
                                name="menu"
                                size={35}
                                color="white"
                                containerStyle={{ marginLeft: 10, alignSelf: "flex-start" }}
                                onPress={() => {

                                }}
                            />
                        </TouchableOpacity>
                    }
                    rightComponent={
                        <TouchableOpacity>
                            <Icon
                                name="notifications"
                                size={32}
                                color="white"
                                containerStyle={{ padding: 2, marginRight: 10, alignSelf: "flex-end", backgroundColor: 'red', borderRadius: 40 }}
                                onPress={() => {

                                }}
                            />
                        </TouchableOpacity>
                    }
                />
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
       
    },
    top: {
        flexDirection: 'row',
        alignSelf: 'flex-start'
    }
})