/*
 * @Author: 水痕 
 * @Date: 2017-11-17 20:57:33 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-17 20:58:47
 * @version:1.0
 * @describe:创建一个电影的组件
 */
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class MoveList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    }
    render() {
        return (
            <View>
                <Text>我是电影列表页面</Text>
            </View>
        )
    }
}

