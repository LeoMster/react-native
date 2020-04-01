import React, { useEffect, useState } from 'react';
import { BackHandler, ToastAndroid, AsyncStorage, View } from 'react-native'
import {
    Router,
    Scene,
    Tabs,
    Actions
} from 'react-native-router-flux';
import Home from './Work/Home/Home';
import Shop from './Work/Shop/Shop';
import Publish from './Work/Myself/Publish/Publish';
import ShopCart from './Work/ShopCart/ShopCart';
import Myself from './Work/Myself/Myself';
import IconAntd from 'react-native-vector-icons/AntDesign';
import SplashScreen from 'react-native-splash-screen'
import Register from './Work/component/Register';
import Login from './Work/component/Login';
import SwiperPage from './Work/component/SwiperPage';


console.disableYellowBox = true;
const App = () => {
    let now = 0;
    let [inStall, setInStall] = useState(true);
    let [isRegister, setIsRegister] = useState(false);
    let [isLogin, setIsLogin] = useState(false);
    init = () => {
        //AsyncStorage.clear();
        AsyncStorage.getItem('isInstall').
            then(res => {
                console.log(res);
                if (res) {
                    setInStall(false);
                }
            })
        AsyncStorage.getItem('register').
            then(res => {
                //console.log(res);
                let registerMsg = JSON.parse(res);
                if (!registerMsg) {
                    SplashScreen.hide();
                }
                if (registerMsg && registerMsg.token) {
                    console.log('1');
                    setIsRegister(true);
                    SplashScreen.hide();
                }
            });
        AsyncStorage.getItem('login').
            then(res => {
                let loginMsg = JSON.parse(res);
                if (loginMsg && loginMsg.token) {
                    setIsLogin(true);
                }
            })
    }
    useEffect(() => {
        init();

    }, []);
    let afterInstall = () => {
        setInStall(false);
    }
    if (inStall) {
        return <View style={{ flex: 1 }}>
            <SwiperPage afterInstall={afterInstall} />
        </View>
    }
    return (
        <Router
            backAndroidHandler={() => {
                if (Actions.currentScene == 'login') {
                    if (new Date().getTime() - now < 2000) {
                        BackHandler.exitApp();
                    } else {
                        ToastAndroid.show('确定要退出吗', 100);
                        now = new Date().getTime();
                        return true;
                    }
                } 
            }}   
        >
                    <Scene hideNavBar>
                        <Tabs
                            key='tabbar'
                            showLabel={true}
                            activeTintColor='#f56767'
                        >
                            <Scene
                                hideNavBar
                                icon={({ focused }) => <IconAntd name='home' size={25} color={focused ? '#f56767' : '#a1a1a1'} />}
                                key='one'
                                title='首页'
                                component={Home}
                            />
                            <Scene
                                hideNavBar
                                icon={({ focused }) => <IconAntd name='appstore-o' size={25} color={focused ? '#f56767' : '#a1a1a1'} />}
                                key='two'
                                title='商品分类'
                                component={Shop}
                            />
                            <Scene
                                hideNavBar
                                icon={({ focused }) => <IconAntd name='shoppingcart' size={25} color={focused ? '#f56767' : '#a1a1a1'} />}
                                key='three'
                                title='购物车'
                                component={ShopCart}
                            />
                            <Scene
                                hideNavBar
                                icon={({ focused }) => <IconAntd name='user' size={25} color={focused ? '#f56767' : '#a1a1a1'} />}
                                key='four'
                                title='个人中心'
                                component={Myself}
                            />
                        </Tabs>
                        <Scene hideNavBar hideTabBar key='publish' component={Publish} />
                        <Scene initial={!isRegister} key='register' hideNavBar component={Register} />
                        <Scene initial={isRegister && !isLogin} key='login' hideNavBar component={Login} />
                    </Scene>
        </Router >
    );
}

export default App;

