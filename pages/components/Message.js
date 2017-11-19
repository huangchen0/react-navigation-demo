/*
 * @Author: 水痕 
 * @Date: 2017-11-18 15:27:17 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-18 16:18:56
 * @version:1.0
 * @describe:使用DrawerNavigator案例
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import DrawerLeft from './DrawerLeft';
class Drawer extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#0187FB" barStyle="light-content" />
                <View style={styles.header}>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')} style={{alignSelf:'flex-start',marginLeft:10}}>
                            <Image source={require('./../../images/sunflower.jpg')} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.title}>消息</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() => alert('增加按钮')} style={{alignSelf:'flex-end',marginRight:10}}>
                            <Text style={styles.add}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text>Message页面</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#0187FB',
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    flex1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    title: {
        fontSize: 20,
        color: '#fff'
    },
    add: {
        fontSize: 30,
        color: '#fff',
    }
})

// 定义一个侧边导航的
const Message = DrawerNavigator({
    Drawer: {
        screen: Drawer, // 使用组件
    },
},{
    drawerWidth: 200, // 侧边的宽度
    drawerPosition: 'left', // 从哪里打开,默认是左边
    contentComponent: (props)=><DrawerLeft {...props}/>, // 侧边的组件(注意必须传递参数进去,否则进行页面跳转拿不到navigate)
    contentOptions:{
        activeTintColor: '#e91e63',
        style: {
            marginVertical: 0,
        }
    },
})
export default Message;