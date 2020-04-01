import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, TextInput, AsyncStorage, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../component/index';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            usernameIn: '',
            pwd: '',
            pwdIn: '',
            isloading: 'false'
        }
    }
    userhandle = (text) => {
        this.setState({ username: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    login = () => {
        if (this.state.pwd === '' || this.state.username === '') {
            ToastAndroid.showWithGravity('用户名或者密码不可为空', ToastAndroid.SHORT, 0, 0, 0);
        } else {
            this.setState({ isloading: true })
            AsyncStorage.getItem('register').
                then(res => {
                    let loginMsg = JSON.parse(res);
                    this.setState({
                        usernameIn: loginMsg.username,
                        pwdIn: loginMsg.pwd
                    }, () => {
                            if (this.state.pwd !== this.state.pwdIn || this.state.username !== this.state.usernameIn) {
                                ToastAndroid.showWithGravity('用户名或密码输入有误', ToastAndroid.SHORT, 0, 0, 0);
                            } else if (this.state.isloading) {
                                ToastAndroid.showWithGravity('欢迎使用', ToastAndroid.SHORT, 0, 0, 0);
                                Actions.one();
                            }
                    })
                });
            myFetch.post('/login', {
                username: this.state.username,
                pwd: this.state.pwd
            }).then(res => {
                AsyncStorage.setItem('login', JSON.stringify(res.data)).
                    then(() => {
                        this.setState({ isloading: false });
                    });
            })
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View
                    style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                    }}>
                    <Icon size={25} name="user" color="red" />
                    <TextInput onChangeText={this.userhandle} placeholder="用户名" />
                </View>
                <View
                    style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                    }}>
                    <Icon size={25} name="user" color="red" />
                    <TextInput onChangeText={this.pwdhandle} secureTextEntry={true} placeholder="密码" />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            width: '30%',
                            height: 40,
                            backgroundColor: '#fd4141',
                            marginTop: 30,
                            marginRight: 65,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20
                        }}
                        onPress={() => Actions.register()}>
                        <Text style={{ color: '#fff' }}>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '30%',
                            height: 40,
                            backgroundColor: '#fd4141',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20
                        }}
                        onPress={this.login}>
                        <Text style={{ color: '#fff' }}>登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
