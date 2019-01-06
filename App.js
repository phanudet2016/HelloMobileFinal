/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import HomeScreen from './src/components/screens/HomeScreen';
import CheckService from './src/components/screens/CheckService';
import AisScreen from './src/components/screens/AisScreen';
import DtacScreen from './src/components/screens/DtacScreen';
import TrueScreen from './src/components/screens/TrueScreen';

// Create Stack *****************************************************************

const HomeStack = createStackNavigator(
  {
    Home: { 
      screen: HomeScreen,
      navigationOptions: () => {
        return {
          title: 'Home',
          header: null,
          headerTitleStyle: { flex: 1, textAlign: 'center', alignSelf: 'center'}
        }
      }
    },
    AisScreen: { 
      screen: AisScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'เอไอเอส',
          headerTitleStyle: { flex: 1, textAlign: 'center', alignSelf: 'center', fontFamily: 'Prompt-Medium', fontWeight: undefined, fontSize: 16 },
          headerRight: (<View></View>),
          titleStyle: { fontFamily: 'Prompt-Light' }
        }
      }
    },
    DtacScreen: { 
      screen: DtacScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'ดีแทค',
          headerTitleStyle: { flex: 1, textAlign: 'center', alignSelf: 'center', fontFamily: 'Prompt-Medium', fontWeight: undefined, fontSize: 16 },
          headerRight: (<View></View>),
          titleStyle: { fontFamily: 'Prompt-Light' }
        }
      }
    },
    TrueScreen: { 
      screen: TrueScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'ทรูมูฟ เอช',
          headerTitleStyle: { flex: 1, textAlign: 'center', alignSelf: 'center', fontFamily: 'Prompt-Medium', fontWeight: undefined, fontSize: 16 },
          headerRight: (<View></View>),
          titleStyle: { fontFamily: 'Prompt-Light' }
        }
      }
    },
  },
  {
    initialRouteName: 'AisScreen',
  }
);

const ServiceStack = createStackNavigator(
  {
    CheckService: { 
      screen: CheckService,
      navigationOptions: () => {
        return {
          title: 'ตรวจสอบยอดเงิน',
          headerTitleStyle: { flex: 1, textAlign: 'center', alignSelf: 'center', fontFamily: 'Prompt-Medium', fontWeight: undefined, fontSize: 16 },
          titleStyle: { fontFamily: 'Prompt-Light' }
        }
      }
    }
  },
  {
    initialRouteName: 'CheckService',
  }
);

// Create Tab *****************************************************************

const TabNavigator = createBottomTabNavigator({
  Home: { 
    screen: HomeStack,
    navigationOptions: () => {
      return {
        tabBarIcon: ({ tintColor }) => (
          <AntDesignIcons name="home" size={27} color={tintColor}/>
        )
      }
    }
  },
  CheckService: { 
    screen: ServiceStack,
    navigationOptions: () => {
      return {
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="wallet" size={25} color={tintColor}/>
        )
      }
    }
  }
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'rgb(221, 28, 75)',
    inactiveTintColor: '#000000',
    showLabel: false,
    labelStyle: {
      fontSize: 12,
    },
    indicatorStyle: {
      backgroundColor: 'transparent',
      borderTopColor: 'rgba(119,75,151,1)',
      borderTopWidth: 2
    },
    style: {
      // backgroundColor: 'rgb(91,153,236)',
    }
  }
});

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// onPress={() => this.props.navigation.navigate('AisScreen')}