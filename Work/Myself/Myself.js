import React,{ useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    AsyncStorage,
    StyleSheet
} from 'react-native';
import IconAntd from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';

const Myself = () => {
    const [avatarSource,setSource] = useState(0);
    const key = "uri";

    useEffect(() => {
        AsyncStorage.getItem(key).then((value) => {
            const jsonValue = JSON.parse(value);
            setSource({uri: jsonValue});
        });
    },[]);

    let exit = ()=>{
        Actions.replace('login');
        AsyncStorage.removeItem('login');
    }
    return (
        <View style={{flex:1,backgroundColor:'#eeeeee'}}>
            {/* 头像 */}
            <View style={[styles.headerContainer,styles.center]}>
                    <TouchableOpacity
                        style={styles.headView}
                        onPress={()=>{
                            const options = {
                                title: '拍照',
                                customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
                                storageOptions: {
                                  skipBackup: true,
                                  path: 'images'
                                }
                            };
                              
                            ImagePicker.showImagePicker(options, (response) => {
                                if (response.didCancel) {
                                  return;
                                } else if (response.error) {
                                  console.log('Error:', response.error);
                                } else if (response.customButton) {
                                  console.log('custom:', response.customButton);
                                } else {                                       
                                    const source = { uri: response.uri };
                                    AsyncStorage.setItem(key,JSON.stringify(response.uri));
                                    setSource(source);
                                }
                            });
                        }}
                    >
                        <Image source={avatarSource} style={styles.head}>
                        </Image>
                    </TouchableOpacity>
                <View>
                    <Text style={styles.pickname}>BINNU DHILLON</Text>
                </View>
            </View>

            {/* 我的个人中心 */}
            <View style={[styles.flexOne,styles.myContainer]}>
                <View style={[styles.center,styles.titleView]}>
                    <IconAntd name='bulb1' size={25} color='#a1a1a1' style={styles.titleIcon}/>
                    <Text style={styles.title}>我的个人中心</Text>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.listView}>
                        <View style={[styles.iconView,styles.center]}>
                            <IconAntd name='setting' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>账户管理</Text>
                        </View>
                        <View style={[styles.iconView,styles.center]}>
                            <IconAntd name='enviromento' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>收货地址</Text>
                        </View>
                        <View style={[styles.iconView,styles.center]}>
                            <IconAntd name='idcard' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>我的信息</Text>
                        </View>
                    </View>

                    <View style={styles.listView}>
                        <View style={[styles.iconView,styles.center]}>
                            <IconAntd name='profile' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>我的订单</Text>
                        </View>
                        <View style={[styles.iconView,styles.center]}>
                            <IconAwesome name='qrcode' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>我的二维码</Text>
                        </View>
                        <View style={[styles.iconView,styles.center]}>
                            <IconFeather name='layers' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>我的积分</Text>
                        </View>
                    </View>

                    <View style={styles.listView}>
                        <View style={[styles.lastView,styles.center]}>
                            <IconAntd name='staro' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>我的收藏</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* E族活动 */}
            <View style={styles.titleContainer}>
                <View style={[styles.center,styles.titleView]}>
                    <IconAntd name='tago' size={25} color='#a1a1a1' style={styles.titleIcon}/>
                    <Text style={styles.title}>E族活动</Text>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.listView}>
                        <View style={[styles.iconView,styles.center]}>
                            <IconAntd name='tool' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>居家维修保养</Text>
                        </View>
                        <View style={[styles.iconView,styles.center]}>
                            <IconAntd name='car' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>出行接送</Text>
                        </View>
                        <View style={[styles.iconView,styles.center]}>
                            <IconAntd name='user' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>我的受赠人</Text>
                        </View>
                    </View>

                    <View style={styles.listView}>
                        <View style={[styles.iconView,styles.center]}>
                            <IconAwesome name='bed' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>我的住宿优惠</Text>
                        </View>
                        <View style={[styles.iconView,styles.center]}>
                            <IconFeather name='flag' size={25} color='#a1a1a1'/>
                            <Text style={styles.mT5}>我的活动</Text>
                        </View>
                        <View style={[styles.iconView,styles.center]} onPress={()=>Actions.publish()}>
                            <TouchableOpacity onPress={()=> Actions.publish()}>
                                <IconAntd name='form' size={25} color='#a1a1a1'/>
                            </TouchableOpacity>
                            <Text style={styles.mT5}>我的发布</Text>
                        </View>
                    </View>
                    
                    <View style={[styles.center,styles.foot]}>
                        <TouchableOpacity onPress={exit} style={[{width:'30%',height:30,backgroundColor:'#fd4141'},{flexDirection:'row',alignItems:'center',justifyContent:'center'}]}><Text style={{color:'#fff'}}>退出登录</Text></TouchableOpacity>
                        <Text style={{color:'#a1a1a1'}}>BINNU DHILLON | 退出</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flexOne:{flex:1},mT5:{marginTop:5},
    center:{justifyContent:'center',alignItems:'center'},

    // 头像部分样式
    headerContainer:{flex:0.8,backgroundColor:'#fd4141'},
    headView:{marginBottom:20,borderRadius:100,height:100,width:100,backgroundColor:'white'},
    head:{width:'100%',height:'100%',borderRadius:100},
    pickname:{fontSize:20,color:'white'},

    // 我的个人中心 & E族活动
    myContainer:{backgroundColor:'white'},
    titleContainer:{flex:1,justifyContent:'center',backgroundColor:'white',marginTop:10},
    titleView:{flex:0.8,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#eeeeee'},
    titleIcon:{flex:1,marginLeft:10},
    title:{flex:8},
    listContainer:{flex:3,marginTop:5,marginBottom:5},
    listView:{flex:1,flexDirection:'row',marginTop:5,marginBottom:5},
    iconView:{flex:1,height:'100%'},
    lastView:{flex:0.33,height:'100%'},
    foot:{flex:1,marginTop:5,marginBottom:0,backgroundColor:'#eeeeee'}
});

export default Myself;