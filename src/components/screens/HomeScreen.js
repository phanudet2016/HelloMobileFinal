import React, {Component} from 'react';
import { Text, View, Image, Dimensions, StyleSheet, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const { height } = Dimensions.get('window');

export default class HomeScreen extends React.Component {

    state = {
        screenHeight: height,
    };
    
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    };

    render() {

        const scrollEnabled = this.state.screenHeight > height;

        return (
            <View style={styles.container}>
                <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffffff" translucent = {false}/>
                <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={scrollEnabled} onContentSizeChange={this.onContentSizeChange}>
                    <View style={styles.top}>
                        <ImageBackground source={require('../../assets/images/top1-bg.jpg')} style={styles.ImageBackgroundStyle} borderRadius={10}>
                            {/* <Image
                                source={require('../../assets/images/brand.png')}
                                style={{width: 120, height: 110}}
                            /> */}
                            <Text style={styles.TextStyleTop}>ฮัลโหล โมบาย</Text>
                            {/* <Text style={styles.TextStyleTop1}>ซ่อม และจำหน่ายมือถือ</Text> */}
                        </ImageBackground>
                    </View>
                    <View style={styles.center}>
                    <Text style={styles.TextStyle1}>สมัครอินเตอร์เน็ต</Text>
                    <Text style={styles.TextStyle2}>เลือกเครื่อข่ายที่ต้องการ</Text>
                    </View>
                    <View style={styles.buttom}>
                        <View style={styles.buttomItem}>
                            <TouchableOpacity style={styles.buttomItemInner} onPress={() => this.props.navigation.navigate('AisScreen')}>
                            <ImageBackground source={require('../../assets/images/bgAis.jpg')} style={styles.ImageBackgroundStyle} borderRadius={10}>
                                <Image
                                    source={require('../../assets/images/Ais-logo.png')}
                                    style={{width: 130, height: 60}}
                                />
                                <Text style={styles.TextStyle3}>เอไอเอส</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.buttomItem}>
                        <TouchableOpacity style={styles.buttomItemInner} onPress={() => this.props.navigation.navigate('DtacScreen')}>
                            <ImageBackground source={require('../../assets/images/bgDtac.jpg')} style={styles.ImageBackgroundStyle} borderRadius={10}>
                                <Image
                                    source={require('../../assets/images/dtac-logo.png')}
                                    style={{width: 120, height: 65}}
                                />
                                <Text style={styles.TextStyle3}>ดีแทค</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.buttomItem}>
                        <TouchableOpacity style={styles.buttomItemInner} onPress={() => this.props.navigation.navigate('TrueScreen')}>
                            <ImageBackground source={require('../../assets/images/bgTrue.jpg')} style={styles.ImageBackgroundStyle} borderRadius={10}>
                                <Image
                                    source={require('../../assets/images/true-logo.png')}
                                    style={{width: 150, height: 30}}
                                />
                                <Text style={styles.TextStyle3}>ทรูมูฟ เอช</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        </View>
                    </View> 
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
    top: {
        height: '30%',
        // height: 500,
        backgroundColor: '#fff',
        margin: 10,
        marginTop: 40,
        // marginTop: 55,
        borderRadius: 10,
        borderColor: 'rgb(221, 28, 75)',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        height: '10%',
        backgroundColor: '#fff',
        margin: 10,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    buttom: {
        height: '45%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    },
    buttomItem: {
        width: '50%',
        height: '50%',
        padding: 6,
        borderRadius: 10
    },
    buttomItemInner: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // ProvidersTitle: {
    //     flex: 0,
    //     backgroundColor: '#fff',
    //     margin: 10,
    //     borderRadius: 10,
    //     justifyContent: 'center',
    //     marginLeft: 30  
    // },
    // ProvidersContent: {
    //     flex: 2,
    //     backgroundColor: '#fff',
    //     margin: 10,
    //     borderColor: 'rgb(221, 28, 75)',
    //     justifyContent: 'space-between', 
    //     alignItems: 'stretch'
    // },
    // ProvidersBox: {
    //     width: 184, 
    //     height: 140, 
    //     backgroundColor: '#fff', 
    //     borderRadius: 10, 
    //     justifyContent: 'center', 
    //     alignItems: 'center',
    //     borderColor: '#ddd',
    //     // borderWidth: 1
    // },
    ImageBackgroundStyle: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    TextStyleTop: {
        fontFamily: 'Prompt-Regular',
        fontSize: 26,
        color: '#fff'
    },
    TextStyleTop1: {
        fontFamily: 'Prompt-Light',
        fontSize: 18,
        color: '#fff'
    },
    TextStyle1: {
        color: '#000',
        fontFamily: 'Prompt-Medium',
        fontSize: 18,
        marginLeft: 10
    },
    TextStyle2: {
        color: '#000',
        fontFamily: 'Prompt-Regular',
        fontSize: 16,
        marginLeft: 10
    },
    TextStyle3: {
        fontFamily: 'Prompt-Regular',
        fontSize: 18,
        color: '#fff'
    },
    scrollview: {
        flexGrow: 1,
    }
})