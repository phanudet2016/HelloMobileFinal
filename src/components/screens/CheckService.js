import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Dimensions, StatusBar, FlatList, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import SendIntentAndroid from 'react-native-send-intent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import dataRef from '../mock/mockdata';

const { height } = Dimensions.get('window');

export default class CheckService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            screenHeight: height,
            dataSource: dataRef.CheckServices
        };
    }
    
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    };

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
                    <Left>
                            <Thumbnail square  source={require('../../assets/images/bgAis.jpg')}  style={{height: 70, width: 70}} borderRadius={10}/>
                        </Left>
                        <Body>
                            <Text style={styles.TextStyle1}>{item.providerENG}</Text>
                            <Text style={styles.TextStyle2}>{item.providerTH}</Text>
                            <Text style={styles.TextStyle3}>{item.number}</Text>
                        </Body>
                        <Right>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this._makePhoneCall(item.sentCall)}
                            >
                                <Text style={styles.TextStyle4}>ตรวจสอบ</Text>
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                </List>
            </Content>

        )
    }
    
    render () {
        const scrollEnabled = this.state.screenHeight > height;

        return (
            <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffffff" translucent = {false}/>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => this._renderItem(item)}
                />
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Ionicons name="ios-log-out" size={35} color='black'/>
                            </Left>
                            <Body>
                                <Text style={styles.TextStyle2}>ออกจากระบบ</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
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
        fontFamily: 'Prompt-Regular',
        fontSize: 17,
        color: '#000',
        marginRight: 20
    },
    TextStyle2: {
        fontFamily: 'Prompt-Light',
        fontSize: 15,
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