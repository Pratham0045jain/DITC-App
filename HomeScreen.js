import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreenHeader from '../components/HomeScreenHeader.js';
import { Icon, Avatar } from 'react-native-elements';


const image = {
  uri:
    'https://images.unsplash.com/photo-1552152370-fb05b25ff17d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBncmFkaWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
      <SafeAreaProvider style={styles.container}>

        <HomeScreenHeader
          title="Home"
          bgColor="#5980F9"
          navigation={this.props.navigation} />

        <ScrollView>
          <View style={styles.backgroundStyle}>
 
            <View
              style={{
                marginHorizontal: 15,
                //marginTop: -20,
                //alignSelf: 'center',
              }}>

              <Text
                style={
                  {
                    marginTop: 10,
                    color: '#FFF',
                    fontSize: 35,
                    // alignSelf: 'center',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif-medium'
                  }
                }>
                Welcome back,
              </Text>
              <Text
                style={

                  {
                    //marginTop: 10,
                    color: '#FFF',
                    fontSize: 18,
                    // alignSelf: 'center',
                    fontWeight: 'bold',
                    //fontFamily:'sans-serif-medium',
                    marginBottom: 30,
                    // alignSelf: 'center',
                  }
                }>
                Please select the product you want to buy and just tap on that product to know the further steps...
              </Text>
            </View>

            {/* this image should be updated by the admin */}
            <View style={styles.whiteBackgoundView}>
              <Image
                style={{ height: 150, marginHorizontal: 10, borderRadius: 20, borderWidth: 3, borderColor: 'black', marginVertical: 10, }}
                source={{ uri: 'https://scontent.fdel5-2.fna.fbcdn.net/v/t1.6435-9/71201888_466623847258476_845460055905009664_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=IOFGbb4yVUQAX8w9-vC&_nc_ht=scontent.fdel5-2.fna&oh=b4cfda0044d3a59b6bac47e9927c46fc&oe=6193D85D' }}
              />
            </View>
          </View>

          <View style={styles.contactBox}>
            <Avatar
              rounded
              source={{
                uri:
                  'https://lh3.googleusercontent.com/wOJJhKPjGNhZfHdiGqaynpc_C6FBW4I7VuqW5W9PN5NQMwDp96GdwiAlEpedSSk2GNve9BCrUUCVfHKGighvKhIlKqIh5p0p3U3l_x5nyA5Eg7M9blLSA6iTxYA-2iX_wvqeadOpBopjTD-05ts_JVQhi6AI3KSbnOqFjHWbKZZc8MocK2j1Bz-BmKGVYJX47uotlnrHgUCnxJwi6-gLb-tKDOqekBldgA6ijl0MbeIieTHItvMdnZkN-EcYpz5LKvkpa5JiMlaqjXtAi1AKtYBrvPlv3nkUcR-8iN1UVwuCWjC3TV6La0DqFjIa0O9mt0M3V9Bd5V7uzDJ6n_kw1qdfc5WclPz0AhdYU9lcL5Tj1jFoPU8qZ2L2rXhYtOXUdlNowhII34C0wZtHjTo3VYHHVzmdbGQHbDKdxlpvC2po3HV2iT_lKRhRyHF7FxiObqSuqZzL7v--hUwynXLlB8WgE6DH8yzra-UTPnVWojGM-Dkql26iKq7_FrYmCzci2_8uLlxJljk5EcqZcmwpee8uYujCGrnrO5MrkJFqcUUGAhqeDnKlC0vjTOJrxoA97e0HNhEuq8DX4xn_rOCFBCz_yX06CqmVTSqCtmwGV0Ae4D6LtTjtFhL2UfBUEhdBszBhh1Jj4VzQm41kMBk6uZmcGOESW9VhW1tSMgD0F6p05uIrGKg-qKa0utWKR8ifj3bNZDioz0RUMSFzEryXHHfl=w757-h937-no?authuser=0',
              }}
              containerStyle={{
                marginLeft: 30,
                marginVertical: 10,
                borderWidth: 3,
                borderColor: 'white',
              }}
              size={40}
            />

            <View>
              <Text
                style={[
                  styles.contactName,
                  { marginTop: 7, fontWeight: 'bold' },
                ]}>
                Deepak Jain
              </Text>
              <Text
                style={[
                  styles.contactName,
                  { marginBottom: 5, fontSize: 13.5 },
                ]}>
                CEO, D.I.T.C
              </Text>
            </View>

            <Avatar
              rounded
              source={{
                uri:
                  'https://media.istockphoto.com/vectors/call-icon-vector-noisy-phone-flat-calling-symbol-isolated-on-white-vector-id1173137785?k=20&m=1173137785&s=170667a&w=0&h=YhlRkjeZOipQQG_kswC4-xtSNgYeSEoIkGexhuEcXkk=',
              }}
              containerStyle={{ marginLeft: 20, marginVertical: 12 }}
              size={35}
              onPress={() => { }}
            />

            <Avatar
              rounded
              source={{
                uri:
                  'https://media.istockphoto.com/vectors/email-open-mail-new-email-icon-vector-id1174677400?k=20&m=1174677400&s=170667a&w=0&h=wkbQA0Y4Z_Dwzey8LEarXRT6no2QEdt2WaGXL1ULF1s=',
              }}
              containerStyle={{ marginLeft: 7, marginVertical: 12 }}
              size={35}
              onPress={() => { }}
            />
          </View>

          {/* Current iron rates */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 20,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Current Iron Rates
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                marginRight: 20,
                marginTop: -20,
                fontWeight: 'bold',
                fontSize: 15,
                color: 'red',
              }}>
              👇
            </Text>
          </View>


          <View
            style={{
              height: 2,
              marginTop: 10,
              marginHorizontal: 10,
              backgroundColor: 'black',
            }}
          /> 

          <ScrollView  horizontal ={true}>


          <View style={[styles.currentRates,{marginLeft:25, backgroundColor:"#3698EE",}]}/>
          <View style={[styles.currentRates,{ backgroundColor:"#FF688B",}]}/>
          <View style={[styles.currentRates,{ marginRight:25, backgroundColor:"#715FFB",}]}/>
          </ScrollView>


          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <Text
              style={{
                marginLeft: 20,
                marginTop: -10,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Our Products
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                marginRight: 20,
                marginTop: -20,
                fontWeight: 'bold',
                fontSize: 15,
                color: 'red',
              }}>
              👇
            </Text>
          </View>

          {/* thin line */}
          <View
            style={{
              height: 2,
              marginTop: 10,
              marginHorizontal: 10,
              backgroundColor: 'black',
            }}
          />


          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={[
                styles.productButtons,
                { marginLeft: 25, marginTop: 20, width: '40%', height: 160, backgroundColor: '#FF8E50', },
              ]}
              onPress={() => { this.props.navigation.navigate('TmtBarsScreen') }}
            >
              <Text></Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.productButtons,
                { marginLeft: 20, marginTop: 20, width: '40%', height: 130, backgroundColor: '#888FEA' },
              ]}>
              <Text></Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', marginBottom: 30 }}>
            <TouchableOpacity
              style={[
                styles.productButtons,
                { marginLeft: 25, marginTop: 20, width: '40%', height: 130, backgroundColor: '#4653BB' },
              ]}>
              <Text></Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.productButtons,
                { marginLeft: 20, marginTop: -10, width: '40%', height: 170, backgroundColor: '#FFAA63' },
              ]}>
              <Text></Text>
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
  text: {
    flex: 0,
  },
  backgroundStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#5980F9',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 15,
  },
  contactBox: {
    backgroundColor: '#4A4A4A',
    height: 65,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 50,
    elevation: 15,
  },
  contactName: {
    fontSize: 19,
    color: '#FFFFFF',
    marginLeft: 15,
  },
  whiteBackgoundView: {
    height: 170,
    marginHorizontal: 10,
    marginBottom: 20,
    //height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 50,
    elevation: 15,
  },
  productButtons: {
    borderRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 50,
    elevation: 15,
  },
  currentRates:{
    marginHorizontal:6,
    height:110,
    width: windowWidth-90 ,
    borderRadius:10,
    marginTop:20,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 50,
    elevation: 15,
    marginBottom:35
  }
})