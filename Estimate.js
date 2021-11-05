import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon, Avatar } from 'react-native-elements';

import MyHeader from '../components/Header.js';

const image = {
    uri:
        'https://images.unsplash.com/photo-1552152370-fb05b25ff17d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBncmFkaWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
};

const image2 = {
    uri:
        'https://cdn.pixabay.com/photo/2017/04/08/18/17/correct-2214020_1280.png',
};


export default class Estimate extends React.Component {
    render() {
        return (
            <View >
                <MyHeader
                    title="Home"
                    bgColor="cyan"
                    screen='TmtBarsScreen'
                    navigation={this.props.navigation}
                />
                <Image source={image2} style={{ height: 100, width: 100 }}></Image>
                <Text>Your estimated bill will apear here... Please wait.</Text>

                {/* Estimated bill will appear here */}
                <Image source={image} style={{ height: 200 }}></Image>

                <Text>
                    If you are satisfied, then plase deposit ₹1000 as booking amount and
            click here -
                </Text>
                <TouchableOpacity>
                    <Text>I have paid ₹1000</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
});