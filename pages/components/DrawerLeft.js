/*
 * @Author: 水痕 
 * @Date: 2017-11-18 15:34:45 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-18 16:15:42
 * @version:1.0
 * @describe:左侧导航的组件
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
export default class DrawerLeft extends Component {
    // 隐藏头部无效果
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    } 
    render() {
        let listAry = [
            {
                name:'张三',
                id:1
            },
            {
                name:'李四',
                id:2
            },
            {
                name:'王五',
                id:3
            },{
                name:'马六',
                id:4
            },
            {
                name:'王二',
                id:5
            }
        ];
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {
                    listAry.map((item,index)=>{
                        return <TouchableOpacity key={item.id} style={styles.list} onPress={()=>navigate('DrawerMessage',{ id: item.id })}>
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    })
                }
            </View>
        )
    }
}

// 定义样式
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    list:{
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'#ddd',
        borderBottomWidth:1,
    },
    text:{
        fontSize:20,
        color:'#333'
    },
    icon:{
        width:24,
        height:24,
    }
})