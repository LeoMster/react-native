import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ToastAndroid,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

const API = 'https://cnodejs.org/api/v1/topics';

const Publish = () => {
    const [data, setData] = useState(0);
    const [num, setNum] = useState(1);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(API + '?page=' + num + '&&limit=15')
            .then(res => res.json())
            .then(result => {
                setData(result.data);
                setLoading(true)
            })
            .catch(error => console.error(error))
    }

    if (!isLoading) {
        return(
            <ActivityIndicator size="large" color="#fd4141" />
        )
    } else {
        return (
            <>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fd4141' }}>
                    <TouchableOpacity style={{ color: '#eee', position: 'absolute', left: 10 }} onPress={() => Actions.pop()}>
                        <Icon name='left' size={25} color={'#eee'} />
                    </TouchableOpacity>
                    <Text style={{ color: '#eee', fontSize: 20 }}>我的发布</Text>
                    <Text style={{ color: '#eee', position: 'absolute', right: 10 }}><Icon name='ellipsis1' size={25} /></Text>
                </View>

                <View style={{ flex: 13 }}>
                    {
                        data.map((item, index) => {
                            let r = Math.random();

                            return (<View style={{ height: 40, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#a1a1a1' }}>
                                <Text style={{ marginLeft: 10, color: '#333', flex: 8 }}>
                                    {item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title}
                                </Text>

                                <Text style={{ marginLeft: 30, color: '#333', flex: 3 }}>
                                    {item.create_at.slice(0, 10)}
                                </Text>

                                <Text style={r > 0.5 ? { flex: 2, color: '#fd4141' } : { flex: 2, color: '#333' }}>
                                    {r > 0.5 ? '已回复' : '待回复'}
                                </Text>
                            </View>);
                        })
                    }
                </View>

                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee' }}>
                    <TouchableOpacity
                        style={{ marginLeft: 15, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: 'red' }}
                        onPress={() => {
                            if (num === 1) {
                                ToastAndroid.showWithGravity('已经是第一页了！', ToastAndroid.SHORT, 0, 0);
                            } else {
                                let _num = num;
                                _num--;
                                setNum(_num)
                                getData();
                            }
                        }}
                    >
                        <Text style={{ height: 35, lineHeight: 35, color: '#eee' }}>上一页</Text>
                    </TouchableOpacity>

                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>第{num}页</Text>
                    </View>

                    <TouchableOpacity
                        style={{ marginRight: 15, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 15, backgroundColor: 'red' }}
                        onPress={() => {
                            if (num < 3) {
                                let _num = num;
                                _num++;
                                setNum(_num)
                                getData();
                            } else {
                                ToastAndroid.showWithGravity('已经是最后一页了！', ToastAndroid.SHORT, 0, 0);
                            }
                        }}
                    >
                        <Text style={{ height: 35, lineHeight: 35, color: '#eee' }}>下一页</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

export default Publish;