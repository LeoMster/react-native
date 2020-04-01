import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, AsyncStorage, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { Button } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux';

const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 640;
const styles = StyleSheet.create({
    img: { width: '100%', height: '100%' },
    slide1: { flex: 1, alignItems: 'center', height: '100%' },
    start: { bottom: 100, width: 150 , height: 50, backgroundColor: 'red', color: "white", textAlignVertical: 'center', borderRadius: 20 }
})
export default class SwiperPage extends Component {
    start = () => {
        AsyncStorage.setItem('isInstall', 'true',()=>{
            this.props.afterInstall();
        });
        
    }
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../image/banner1.jpg')} />
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../image/banner2.jpg')} />
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../image/banner3.jpg')} />
                    <Button onPress={this.start} style={styles.start}>立即体验</Button>
                </View>
            </Swiper>
        )
    }
}