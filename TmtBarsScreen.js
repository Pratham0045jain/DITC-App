import * as React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import MyHeader from '../components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';

import db from '../config';
import firebase from 'firebase';
import HomeScreen from './HomeScreen';

const ScreenName = HomeScreen

export default class TmtBarsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brandName: '',
            modalVisible: false,
            checked: 'zero',
            wire: '',
            ring: '',
            nails: '',
            tool: '',
            quantity: '',
            size: '',
            num: ''
        };
    }

    generateUniqueId = () => {
        //Method 1 :-
        /* this.setState({ num: this.state.num + 1 });
        var requestId = 'request' + this.state.num;
        return requestId; */

        //Method 2 :-
        return Math.random().toString(36).substring(7);
    };

    addItems = async () => {
        var requestId = this.generateUniqueId();
        await
            db.collection('items').add({
                userId: "Pratham",
                brandName: this.state.brandName,
                quantity: this.state.quantity,
                size: this.state.size,
                wire: this.state.wire,
                nails: this.state.nails,
                tool: this.state.tool,
                itemId: requestId,
                date: firebase.firestore.FieldValue.serverTimestamp(),
            })
    };

    showModal = () => {
        return (
            <Modal animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}>
                <View>
                    <ScrollView>
                        <KeyboardAvoidingView>
                            <Text /* style={styles.textTop} */>Registration</Text>

                            <TextInput
                                style={styles.textInput}
                                placeholder="Type Wire Quantity"
                                maxLength={20}
                                onChangeText={(text) => {
                                    this.setState({ wire: text });
                                }}></TextInput>

                            <TextInput
                                style={styles.textInput}
                                placeholder="Type Ring's Size and Quantity"
                                onChangeText={(text) => {
                                    this.setState({ ring: text });
                                }}></TextInput>

                            <TextInput
                                style={styles.textInput}
                                placeholder="Type Nails Quantity"
                                multiline={true}
                                onChangeText={(text) => {
                                    this.setState({ nails: text });
                                }}></TextInput>

                            <TextInput
                                style={styles.textInput}
                                placeholder="Type any additional Tool"
                                onChangeText={(text) => {
                                    this.setState({ tool: text });
                                }}></TextInput>

                            <View>
                                <TouchableOpacity
                                    /* style={styles.loginButton} */
                                    onPress={() => {
                                        this.setState({ modalVisible: false });
                                    }}>
                                    <Text /* style={styles.buttonText} */>Ok</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    /* style={styles.loginButton} */
                                    onPress={() => {
                                        this.setState({ modalVisible: false });
                                    }}>
                                    <Text /* style={styles.buttonText} */>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }

    render() {
        return (
            <SafeAreaProvider style={styles.container}>
                <MyHeader
                    title="TMT Bars"
                    bgColor="#FF8E50"
                    screen="HomeScreen"
                    navigation={this.props.navigation}
                />
                <ScrollView>

                    <Text style={{ marginTop: 20, marginLeft: 10 }}>
                        Fill this information to know your estimate :-
                    </Text>
                    <View style={styles.viewTop}>
                        <Text
                            style={{
                                marginTop: 20,
                                fontWeight: 'bold',
                                fontSize: 15,
                                marginLeft: 20,
                            }}>
                            TATA Tiscon ------{' '}
                            <RadioButton
                                value="first"
                                status={
                                    this.state.checked === 'first' ? 'checked' : 'unchecked'
                                }
                                onPress={() => {
                                    this.setState({
                                        checked: 'first',
                                        brandName: 'TATA Tiscon',
                                    });
                                }}
                            />
                        </Text>
                        <View style={styles.line} />
                        <Text
                            style={{
                                marginTop: 20,
                                fontWeight: 'bold',
                                fontSize: 15,
                                marginLeft: 20,
                            }}>
                            Kamdhenu ------{' '}
                            <RadioButton
                                value="second"
                                status={
                                    this.state.checked === 'second' ? 'checked' : 'unchecked'
                                }
                                onPress={() =>
                                    this.setState({ checked: 'second', brandName: 'Kamdhenu' })
                                }
                            />
                        </Text>
                        <View style={styles.line} />
                        <Text
                            style={{
                                marginTop: 20,
                                fontWeight: 'bold',
                                fontSize: 15,
                                marginLeft: 20,
                            }}>
                            Jai Bharat ------
                            <RadioButton
                                value="third"
                                status={
                                    this.state.checked === 'third' ? 'checked' : 'unchecked'
                                }
                                onPress={() =>
                                    this.setState({ checked: 'third', brandName: 'Jai Bharat' })
                                }
                            />
                        </Text>
                    </View>
                    {this.showModal()}
                    <Text>
                        Quantity ----
                    </Text>
                    <TextInput
                        onChangeText={(text) => {
                            this.setState({ quantity: text });
                        }}
                        placeholder='type Quantity here'
                    />
                    <Text>
                        Size ----
                    </Text>
                    <TextInput
                        onChangeText={(text) => {
                            this.setState({ size: text });
                        }}
                        placeholder='type size here'
                    />
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ modalVisible: true });
                        }}>
                        <Text>Extras</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Estimate'), this.addItems()
                            }}
                            style={{ backgroundColor: "red" }}>
                            <Text>Know your estimate</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaProvider>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#FFFFF0',
        height: '100%',
    },
    viewTop: {
        height: 200,
        backgroundColor: '#ffbc99',
        marginTop: 20,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    textInput: {

    },
    line: {
        height: 2,
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: 'black',
    }
});