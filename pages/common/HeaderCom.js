/*
 * @Author: 水痕 
 * @Date: 2017-11-14 22:58:42 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-14 23:34:11
 * @version:1.0
 * @describe:创建一个通过头部的组件
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';
export default class HeaderCom extends Component {
    render() {
        /**
         * 导航栏中传递的参数说明
         * backgEvent:返回的事件
         * title:中间标题
         * headerInfo:右边副标题
         * headerColor:导航的背景色
         * isNotShowBack:是否存在返回按钮,默认显示
         */
        const {backgEvent,title,headerInfo,headerColor,isNotShowBack} = this.props;
        return (
            <View style={[styles.header,{backgroundColor:headerColor?headerColor:'#fff'}]}>
                <View style={styles.header_container}>
                    <View style={[styles.back_ioc_group, styles.flex_1]}>
                        {
                            isNotShowBack?null:
                            <TouchableOpacity onPress={backgEvent} style={styles.back_ioc_group}>
                                <View style={styles.back_ioc}></View>
                                <Text style={styles.back_txt}>返回</Text>
                            </TouchableOpacity>
                        }
                    </View>
                    <View style={styles.flex_1}>
                        <Text style={styles.header_title}>{title}</Text>
                    </View>
                    <View style={styles.flex_1}>
                        <Text style={styles.header_info}>{headerInfo}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

// 定义样式
const styles = StyleSheet.create({
    header: {
        height: 50,
        width:Dimensions.get('window').width,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor:'#fff',
        paddingHorizontal:10,
        // 设置边框阴影
        shadowOffset:{ width:0, height:0 }, 
        shadowColor:'#f00', 
        shadowOpacity:0.2, 
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
    },
    flex_1: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    back_ioc_group: {
        flex:1,
        height:50,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    back_ioc:{
        borderLeftWidth:1,
        borderBottomWidth:1,
        height:15,
        width:15,
        borderColor:'#333',
        transform:[{rotateZ:'45deg'},{translateX:2},{translateY:-2}]
    },
    back_txt:{
        fontSize:16,
        color:'#333'
    },
    header_title: {
        fontSize:16,
        color:'#333'
    },
    header_info: {
        alignSelf:'flex-end'
    }
})