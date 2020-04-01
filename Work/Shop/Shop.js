import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';

const shopData = [
    {
        rowOne:{
            title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
            price: '36.00'
        },
        rowTwo:{
            title: 'Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳',
            price: '36.00'
        }
    }
]

const barText = [
    {text:'综合',isActive:true},
    {text:'销量',isActive:false},
    {text:'新品',isActive:false},
    {text:'价格',isActive:false},
    {text:'信用',isActive:false},
]

const Home = () => {
    return (
        <>
            {/* 搜索框 */}
            <View style={[styles.center,styles.searchContainer]}>
                <View style={styles.searchView}>
                    <View style={styles.iptView}>
                        <TextInput
                            style={styles.ipt}
                            placeholder='请输入商城名称'
                        />
                    </View>
                    <View style={[styles.center,styles.imgView]}>
                        <Image source={require('../../image/mirror.png')} style={styles.img}></Image>
                    </View>
                </View>
            </View>

            {/* 选项条 */}
            <View style={[styles.center,styles.choseBarContainer]}>
                <View style={styles.choseBarView}>
                    {
                        barText.map((item,index) => {
                            return (
                                <View key={index} style={styles.center}>
                                    <Text style={item.isActive?styles.itemActive:item.itemNotActive}>{item.text}</Text>
                                </View>
                            );
                        })
                    }
                </View>
            </View>

            {/* 零食列表 */}
            <View style={styles.listContainer}>
                <FlatList
                    style={styles.flat}
                    data={shopData.concat(shopData,shopData)}
                    renderItem={
                        ({item}) => <View style={[styles.center,styles.listView]}>
                            <View style={styles.rowContainer}>
                                <Image source={require('../../image/1.jpg')} style={styles.rowOneImg}></Image>
                                <Text style={styles.title}>{item.rowOne.title}</Text>
                                <View style={styles.priceView}>
                                    <Text style={styles.price}>{item.rowOne.price}</Text>
                                </View>
                            </View>

                            <View style={styles.blank}></View>

                            <View style={styles.rowContainer}>
                                <Image source={require('../../image/2.jpg')} style={styles.rowTwoImg}></Image>
                                <Text style={styles.title}>{item.rowTwo.title}</Text>
                                <View style={styles.priceView}>
                                    <Text style={styles.price}>{item.rowTwo.price}</Text>
                                </View>
                            </View>
                        </View>
                    }
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    center:{flex:1,justifyContent:'center',alignItems:'center'},
    
    // 搜索框样式
    searchContainer:{flex:0.05},
    searchView:{flex:0.8,flexDirection:'row'},
    iptView:{flex:0.75,backgroundColor:'#eeeeee'},
    ipt:{padding:0,fontSize:12,paddingLeft:10},
    imgView:{flex:0.1,backgroundColor:'#eeeeee'},
    img:{width:'45%',height:'45%'},

    // 选项条样式
    choseBarContainer:{
        borderTopWidth:1,borderTopColor:'#eeeeee',borderBottomWidth:1,borderBottomColor:'#eeeeee',
        flex:0.05,flexDirection:'row'
    },
    choseBarView:{flex:0.9,flexDirection:'row'},
    itemActive:{color:'#f23030',textAlign:'center'},itemNotActive:{color:'#666666',textAlign:'center'},

    // 零食列表样式
    listContainer:{flex:0.9,backgroundColor:'#eeeeee'},
    flat:{width:'100%'},
    listView:{width:'100%',height:240,flexDirection:'row',marginTop:6},
    rowContainer:{backgroundColor:'#fff',flex:0.47,height:240,justifyContent:'center',alignItems:'center'},
    rowOneImg:{marginTop:25,width:'50%',height:'52%'},
    rowTwoImg:{marginTop:25,width:'63%',height:'52%'},
    title:{marginLeft:10,marginRight:10,marginTop:25,fontSize:10,color:'#666666'},
    priceView:{width:'100%',height:25,justifyContent:'center'},
    price:{color:'#f23030',marginLeft:10,fontSize:10},
    blank:{backgroundColor:'#eeeeee',flex:0.02,height:240}
});

export default Home;

