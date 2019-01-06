import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, StatusBar } from 'react-native';

const { height } = Dimensions.get('window');

export default class AisScreen extends React.Component {

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
                <View style={styles.Item}>
                        <ImageBackground source={require('../../assets/images/bgAis.jpg')} style={styles.ImageBackgroundStyle} borderRadius={10}>
                            {/* <Image
                                source={require('../../assets/images/brand.png')}
                                style={{width: 120, height: 110}}
                            /> */}
                            <Text style={styles.TextStyle1}>ความเร็วสูงสุด 1 Mbps. ไม่ลดสปีด</Text>
                            <Text style={styles.TextStyle2}>24 ชม. 19 ฿ (รวมภาษี 20.33)</Text>
                            <Text style={styles.TextStyle3}>*777*7251*380281#</Text>
                            {/* <Text style={styles.TextStyleTop1}>ซ่อม และจำหน่ายมือถือ</Text> */}
                        </ImageBackground>
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
    Item: {
        height: 110,
        // height: 500,
        backgroundColor: '#fff',
        margin: 10,
        // marginTop: 40,
        // marginTop: 55,
        borderRadius: 10,
        borderColor: 'rgb(221, 28, 75)',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageBackgroundStyle: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'flex-end'
    },
    TextStyle1: {
        fontFamily: 'Prompt-Regular',
        fontSize: 16,
        color: '#fff',
        marginRight: 20
    },
    TextStyle2: {
        fontFamily: 'Prompt-Regular',
        fontSize: 18,
        color: '#fff',
        marginRight: 20,
    },
    TextStyle3: {
        fontFamily: 'Prompt-Regular',
        fontSize: 18,
        color: '#fff',
        marginRight: 20,
    },
    scrollview: {
        flexGrow: 1,
    }
})