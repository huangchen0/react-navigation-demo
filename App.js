/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import BookList from './pages/components/BookList';
import BookDetail from './pages/components/BookDetail';
import Leading from './pages/components/Leading';
import DrawerMessage from './pages/components/DrawerMessage';
import TabBar from './pages/common/TabBar';
// 定义一个StackNavigator
const App = StackNavigator({
    Leading:{screen:Leading},
    BookList:{screen:TabBar}, // 直接在第一个进入页面中使用TabBar就可以
    BookDetail:{screen:BookDetail},
    DrawerMessage:{screen:DrawerMessage}, // 侧边导航的内容
},{
    headerMode:'none',
})

export default App;
