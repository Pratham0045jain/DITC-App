import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../Screens/HomeScreen'
import Estimate from '../Screens/Estimate';
import TmtBarsScreen from '../Screens/TmtBarsScreen';

const StackNavigator = createStackNavigator({
    Home: { screen: HomeScreen, navigationOptions: { headerShown: false } },
    TmtBarsScreen: { screen: TmtBarsScreen },
    Estimate: { screen: Estimate, navigationOptions: { headerShown: false } },
}, {
    initialRouteName: 'Home', navigationOptions: { headerShown: false }
})

export default StackNavigator;