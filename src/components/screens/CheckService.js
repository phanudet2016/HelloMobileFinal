import React, {Component} from 'react';
import { TouchableOpacity , Text, View, StatusBar, StyleSheet, PermissionsAndroid  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SendIntentAndroid from 'react-native-send-intent';

export default class CheckService extends React.Component {

    _makePhoneCall = async () => {
        try {
            const granted = await PermissionsAndroid.request (
                PermissionsAndroid.PERMISSIONS.CALL_PHONE
                // ,{
                //     'title': 'Cool Photo App Camera Permission',
                //     'message': 'Cool Photo App needs access to your camera ' +
                //                'so you can take awesome pictures.'
                // }
              )
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  SendIntentAndroid.sendPhoneCall('*121%23', true);
              } else {
                  console.log("Call Phone permission denied")
              }
        } catch (err) {
            console.warn(err)
        }
    }

    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffffff" translucent = {false}/>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this._makePhoneCall()}
            >
                <Text> Touch Here </Text>
            </TouchableOpacity>
         </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },
    countContainer: {
      alignItems: 'center',
      padding: 10
    },
    countText: {
      color: '#FF00FF'
    }
})