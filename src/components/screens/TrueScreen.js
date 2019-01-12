import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, StatusBar, FlatList, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Content, List, ListItem, Body, Right } from 'native-base';
import SendIntentAndroid from 'react-native-send-intent';
import dataRef from '../mock/mockdata';

const { height } = Dimensions.get('window');

export default class TrueScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            screenHeight: height,
            dataSource: dataRef.servicesTrue
        };
    }

    _makePhoneCall = async (e) => {
        try {
            const granted = await PermissionsAndroid.request (
                PermissionsAndroid.PERMISSIONS.CALL_PHONE
              )
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  SendIntentAndroid.sendPhoneCall(`${e}%23`, true);
              } else {
                  console.log("Call Phone permission denied")
              }
        } catch (err) {
            console.warn(err)
        }
    }

    _renderItem (item) {
        return (
            <Content>
                <List>
                    <ListItem thumbnail>
                        <Body>
                            <Text style={styles.TextStyle1}>{item.packageName}</Text>
                            <Text style={styles.TextStyle2}>{item.periodOfTime}</Text>
                            <Text style={styles.TextStyle3}>{item.number}</Text>
                        </Body>
                        <Right>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this._makePhoneCall(item.sentCall)}
                            >
                                <Text style={styles.TextStyle4}>สมัคร</Text>
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                </List>
            </Content>

        )
    }
    
    render () {
        return (
            <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffffff" translucent = {false}/>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => this._renderItem(item)}
                />
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttomItemInner: {
        backgroundColor: '#fff',
    },
    ImageBackgroundStyle: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'flex-end'
    },
    TextStyle1: {
        fontFamily: 'Prompt-Light',
        fontSize: 14,
        color: '#000',
        marginRight: 20
    },
    TextStyle2: {
        fontFamily: 'Prompt-Regular',
        fontSize: 16,
        color: '#000',
        marginRight: 18,
    },
    TextStyle3: {
        fontFamily: 'Prompt-Regular',
        fontSize: 15,
        color: 'rgb(221, 28, 75)',
        marginRight: 20,
    },
    TextStyle4: {
        fontFamily: 'Prompt-Regular',
        fontSize: 16,
        color: '#fff',
    },
    scrollview: {
        flexGrow: 1,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(221, 28, 75)',
        padding: 10,
        borderRadius: 10,
    },
})