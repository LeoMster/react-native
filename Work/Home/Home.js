import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import IconAntd from 'react-native-vector-icons/AntDesign';
import IconFea from 'react-native-vector-icons/Feather';

const Home = () => {
    return (
        <>
            {/* 搜索框 */}
            <View style={[styles.searchContainer,styles.center]}>
                <View style={styles.searchView}>
                    <View style={[styles.mirror,styles.center]}>
                        <IconAntd name='search1' size={25} color='white'/>
                    </View>
                    <View style={styles.iptView}>
                        <TextInput 
                            style={styles.ipt}
                            placeholder='请输入你要搜索的关键字'
                            placeholderTextColor='white'
                        />
                    </View>
                    <View style={styles.shopCarView}>
                        <IconFea size={25} name='shopping-cart' style={styles.car} color='white'/>
                    </View>
                </View>
            </View>

            {/* 轮播图 */}
            <View style={styles.swiperContainer}>
                <Swiper
                    autoplay={true}
                    paginationStyle={{bottom:5}}  
                    activeDotColor='#fd4141'
                    index={1}
                >
                    <View style={styles.flexOne}>
                        <Image source={require('../../image/banner_01.jpg')} style={styles.swiperView}/>
                    </View>
                    <View style={styles.flexOne}>
                        <Image source={require('../../image/banner_02.jpg')} style={styles.swiperView}/>
                    </View>
                    <View style={styles.flexOne}>
                        <Image source={require('../../image/banner_01.jpg')} style={styles.swiperView}/>
                    </View>
                </Swiper>
            </View>

            {/* 功能条 */}
            <View style={styles.listContainer}>
                <View style={[styles.flexOne,styles.center,styles.listView]}>
                    <View style={styles.imgContainer}>
                        <View style={[styles.center,styles.imgView]}>
                            <Image source={require('../../image/repair_03.jpg')} style={{width:'55%',height:'55%'}}/>
                        </View>
                    </View>
                    <View style={styles.textView}>
                        <Text>居家维修保养</Text>
                    </View>
                    <View style={[styles.rightIcon,styles.center]}>
                        <IconAntd name='right' size={20} color='#a1a1a1'/>
                    </View>
                </View>

                <View style={[styles.flexOne,styles.center,styles.listView]}>
                    <View style={styles.imgContainer}>
                        <View style={[styles.center,styles.imgView,styles.color2]}>
                            <Image source={require('../../image/flag_03.jpg')} style={{width:'50%',height:'55%'}}/>
                        </View>
                    </View>
                    <View style={styles.textView}>
                        <Text>住宿优惠</Text>
                    </View>
                    <View style={[styles.rightIcon,styles.center]}>
                        <IconAntd name='right' size={20} color='#a1a1a1'/>
                    </View>
                </View>
                
                <View style={[styles.flexOne,styles.center,styles.listView]}>
                    <View style={styles.imgContainer}>
                        <View style={[styles.center,styles.imgView,styles.color3]}>
                            <Image source={require('../../image/clock_03.jpg')} style={{width:'55%',height:'55%'}}/>
                        </View>
                    </View>
                    <View style={styles.textView}>
                        <Text>出行接送</Text>
                    </View>
                    <View style={[styles.rightIcon,styles.center]}>
                        <IconAntd name='right' size={20} color='#a1a1a1'/>
                    </View>
                </View>
                
                <View style={[styles.flexOne,styles.center,styles.listView]}>
                    <View style={styles.imgContainer}>
                        <View style={[styles.center,styles.imgView,styles.color4]}>
                            <Image source={require('../../image/gift_03.jpg')} style={{width:'55%',height:'55%'}}/>
                        </View>
                    </View>
                    <View style={styles.textView}>
                        <Text>E族活动</Text>
                    </View>
                    <View style={[styles.rightIcon,styles.center]}>
                        <IconAntd name='right' size={20} color='#a1a1a1'/>
                    </View>
                </View>
            </View>

            {/* 尾部 */}
            <View style={styles.footContainer}>
                <View style={[styles.center,styles.btnContainer]}>
                    <View style={[styles.btnView,styles.center]}>
                        <Text style={styles.btn}>发布需求</Text>
                    </View>
                </View>

                <View style={[styles.flexOne,styles.center]}>
                    <Text style={styles.text}> ©E族之家 版权所有</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    flexOne:{flex:1},
    center:{justifyContent:'center',alignItems:'center'},

    // 搜索框样式
    searchContainer:{flex:0.065,backgroundColor:'#fd4141'},
    searchView:{flex:0.7,flexDirection:'row',marginLeft:20,marginRight:20},
    mirror:{flex:1,height:'100%',backgroundColor:'rgba(255,241,240,0.6)',borderBottomLeftRadius:100,borderTopLeftRadius:100},
    iptView:{borderBottomRightRadius:100,borderTopRightRadius:100,flex:5,backgroundColor:'rgba(255,241,240,0.6)'},
    ipt:{padding:5,fontSize:15},
    shopCarView:{flex:1,justifyContent:'center',backgroundColor:'#fd4141'},
    car:{marginLeft:20},

    // 轮播图样式
    swiperContainer:{flex:0.3},
    swiperView:{width:'100%',height:'100%'},

    // 功能条样式
    listContainer:{flex:0.50,backgroundColor:'#eeeeee'},
    listView:{flexDirection:'row',backgroundColor:'white',marginTop:6},
    imgContainer:{flex:2.5,height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'white'},
    imgView:{marginLeft:20,width:70,height:70,backgroundColor:'#ffcccc',borderRadius:100},
    textView:{flex:8,justifyContent:'center',height:'100%',backgroundColor:'white',marginLeft:30},
    rightIcon:{flex:2,height:'100%',backgroundColor:'white'},
    color2:{backgroundColor:'#ffe1b1'},
    color3:{backgroundColor:'#bfe6a8'},
    color4:{backgroundColor:'#c3ddf2'},

    // 尾部样式
    footContainer:{flex:0.14,backgroundColor:'#eeeeee'},
    btnContainer:{flex:2,marginTop:10},
    btnView:{borderRadius:10,height:'80%',width:'80%',backgroundColor:'#f23030'},
    btn:{color:'white',fontSize:20},
    text:{color:'#a1a1a1',marginBottom:6}
});

export default Home;
