/*
 * @Author: 水痕 
 * @Date: 2017-11-18 16:04:20 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-18 16:05:51
 * @version:1.0
 * @describe:关于侧边栏导航进来的页面
 */
import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import HeaderCom from './../common/HeaderCom';
export default class DrawerMessage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => <HeaderCom title="侧边内容页面" backgEvent={()=>navigation.goBack()}/>, // 使用自己定义的头部
        }
    }
    render() {
        return (
            <View>
                <HeaderCom title="侧边内容页面" backgEvent={()=>this.props.navigation.goBack()}/>
                <Text>我是侧边打开的内容页面</Text>
                <Text>接收到的Id:{this.props.navigation.state.params.id}</Text>
            </View>
        )
    }
}

