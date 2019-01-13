import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, StatusBar, FlatList, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Content, List, ListItem, Body, Right } from 'native-base';
import Modal from "react-native-modalbox";
import SendIntentAndroid from 'react-native-send-intent';
import dataRef from '../mock/mockdata';

const { height, width } = Dimensions.get('window');

export default class DtacScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            screenHeight: height,
            msgAlert: '',
            titleAlert: '',
            sentCall: '',
            dataSource: dataRef.servicesDtac
        };
    }

    _makePhoneCall = async (e) => {
        try {
            const granted = await PermissionsAndroid.request (
                PermissionsAndroid.PERMISSIONS.CALL_PHONE
              )
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  SendIntentAndroid.sendPhoneCall(`${this.state.sentCall}%23`, true);
              } else {
                  console.log("Call Phone permission denied")
              }
        } catch (err) {
            console.warn(err)
        }
    }

    _settimePhoneCall () {
        this.refs.myModal.close()
        setTimeout(() => {
            this._makePhoneCall()
        }, 500);
    }

    _showModal = (sentCall, msgTitle, msg) => {
        this.setState ({ 
            sentCall: sentCall,
            titleAlert: msgTitle,
            msgAlert: msg
        })
        this.refs.myModal.open()
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
                                onPress={() => this._showModal(item.sentCall, item.msgTitle, item.msg)}
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

                <Modal
                    ref={'myModal'}
                    style={styles.ModalStyle}
                    position='center'
                    backdrop={true}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.TextAlert}>{this.state.titleAlert}</Text>
                            <Text style={styles.TextMsg}>{this.state.msgAlert}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'center'}}>
                            <TouchableOpacity
                                style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 10, marginRight: 20, borderRadius: 10, borderWidth: 3, borderColor: '#dd1c4b', width: 100}}
                                onPress={() => this.refs.myModal.close()}
                            >
                                <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 16, color: '#000'}}>ยกเลิก</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#dd1c4b', padding: 10, borderRadius: 10, width: 100}}
                                onPress={() => this._settimePhoneCall()}
                            >
                                <Text style={styles.TextStyle4}>ตกลง</Text>
                            </TouchableOpacity>
                        </View>
                </Modal>
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
    ModalStyle: {
        justifyContent: 'center',
        borderRadius: 20,
        width: width - 80,
        height: 280
    },
    TextAlert: {
        fontFamily: 'Prompt-Medium',
        fontSize: 18,
        color: '#000',
        marginTop: 40
    },
    TextMsg: {
        fontFamily: 'Prompt-Regular',
        fontSize: 14,
        color: '#000',
        marginTop: 20
    }
})