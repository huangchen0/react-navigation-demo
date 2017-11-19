/*
 * @Author: 水痕 
 * @Date: 2017-11-17 19:53:59 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-17 20:43:26
 * @version:1.0
 * @describe:创建一个书籍的详细页面
 */
import React, { Component } from 'react';
// 引入自定义头部
import HeaderCom from './../common/HeaderCom';
import {
    View,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';

export default class BookDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => <HeaderCom backgEvent={()=>navigation.goBack()} title="书籍详细页面"/>, //使用自己定义的头部
        }
    }
    render() {
        return (
            <View>
                <HeaderCom backgEvent={()=>this.props.navigation.goBack()} title="书籍详细页面"/>
                <Text>我的书籍详细页面</Text>
                <Text>接收到的ID:{this.props.navigation.state.params.bookId}</Text>
            </View>
        )
    }
}

