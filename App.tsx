import * as React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button, IconButton } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GroupBuying from './src/screens/Home/HomeTopNav/GroupBuying';
import Online from './src/screens/Home/HomeTopNav/Online';
import TheMall from './src/screens/Home/HomeTopNav/TheMall';
import UserCity from './src/screens/Home/HomeTopNav/UserCity';
import UserFollow from './src/screens/Home/HomeTopNav/UserFollow';
import UserRecommend from './src/screens/Home/HomeTopNav/UserRecommend';
import FriendsScreen from './src/screens/Friend/FriendsScreen';
import MineScreen from './src/screens/Mine/MineScreen';
import MessageScreen from './src/screens/Message/MessageScreen';
import BottomTabNavigator from './src/components/BottomTabNavigator/BottomTabNavigator';
import HomeScreen from './src/screens/Home/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native';
import SearchScreen from './src/screens/Home/Search/SearchScreen';
import EditMessage from './src/screens/Mine/EditMessage';
import AddFriend from './src/screens/Mine/AddFriend';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import TestDrawer from './src/screens/Mine/RightDrawerTest/TestDrawer';
import CreateVideoList from './src/screens/Mine/MineTopScreen/CreateVideoList';
import ProfileScreen from './src/screens/Home/HomeTopNav/ProfileScreen';
import CreateScreen from './src/screens/Mine/MineTopScreen/CreateScreen';
import { SafeAreaView } from 'react-native';


function CustomDrawerContent() {

  const miniAppData = [
    { name: '玩了个锤子', imgUrl: require('./src/assets/images/wlgcz.jpg') },
    { name: '饿了么外卖', imgUrl: require('./src/assets/images/elmwm.jpg') },
    { name: '抖音月付', imgUrl: require('./src/assets/images/dyyf.jpg') },
    { name: '小程序推广', imgUrl: require('./src/assets/images/xcxtg.jpg') },
    { name: '河马剧场', imgUrl: require('./src/assets/images/hmjc.jpg') },
    { name: '微剧吧', imgUrl: require('./src/assets/images/wjb.jpg') },
  ]

  const followPeoData = [
    { name: '山中冷月微', imgUrl: require('./src/assets/images/szlyw.jpeg') },
    { name: '星街战', imgUrl: require('./src/assets/images/xjz.jpg') },
    { name: '陈翔六点半', imgUrl: require('./src/assets/images/cxldb.jpeg') },
    { name: '桃厂电影', imgUrl: require('./src/assets/images/tcwldy.jpeg') },
    { name: '真子日记', imgUrl: require('./src/assets/images/zzzj.jpeg') },
    { name: '周星伦', imgUrl: require('./src/assets/images/zxl.jpeg') },
  ]

  const Commonfunction = [
    { name: '我的钱包', imgUrl: require('./src/assets/images/My_wallet.png') },
    { name: '券包', imgUrl: require('./src/assets/images/tickets.png') },
    { name: '小程序', imgUrl: require('./src/assets/images/uniapp.png') },
    { name: '观看历史', imgUrl: require('./src/assets/images/Wat_history.png') },
    { name: '内容偏好', imgUrl: require('./src/assets/images/Cont_preference.png') },
    { name: '离线模式', imgUrl: require('./src/assets/images/Off_line.png') },
    { name: '设置', imgUrl: require('./src/assets/images/Setting.png') },
    { name: '稍后再看', imgUrl: require('./src/assets/images/Wat_later.png') },
  ]

  const LifeMoment = [
    { name: '我的钱包', imgUrl: require('./src/assets/images/My_wallet.png') },
    { name: '券包', imgUrl: require('./src/assets/images/tickets.png') },
    { name: '小程序', imgUrl: require('./src/assets/images/uniapp.png') },
    { name: '观看历史', imgUrl: require('./src/assets/images/Wat_history.png') },
    { name: '内容偏好', imgUrl: require('./src/assets/images/Cont_preference.png') },
    { name: '离线模式', imgUrl: require('./src/assets/images/Off_line.png') },
    { name: '设置', imgUrl: require('./src/assets/images/Setting.png') },
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.imgUrl} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  };

  const renderItem2 = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.imgUrl} style={styles.box4_image} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  };

  const renderItem3 = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.imgUrl} style={styles.box5_image} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  };

  return (
    <LinearGradient
  colors={['#D5F6FF', '#F4E4FF']}
  style={{ flex: 1,zIndex:1 }}
>
    <ScrollView style={styles.container}>
      {/* 在这里放置您想要的自定义内容，例如一个盒子 */}
      <View style={styles.box1}>
        <Text style={{fontSize:20,lineHeight:40}}>早上好</Text>
        <Pressable style={styles.btn} onPress={() => alert('Search button pressed')} >
          <Ionicons name='scan' style={styles.icon} size={18}/>
          <Text style={styles.btnText}>扫一扫</Text>
        </Pressable>
      </View>
      
      <View style={styles.box2}>
        <View style={{paddingLeft:10,paddingTop:10,flexDirection:'row',justifyContent:'flex-end'}}>
            <Text style={{fontWeight:'bold',marginRight:95,fontSize:15,color:'#000'}}>通知消息</Text>
            <Text style={{fontSize:12,marginTop:3}}>有新消息</Text>
            <Ionicons name='chevron-forward-sharp' size={15} style={{lineHeight:22,marginRight:10}}/>
        </View>
        <View style={{paddingLeft:10,marginTop:8,flexDirection:'row'}}>
          <AntDesign name="shoppingcart" size={20} color={'white'} style={styles.shopIcon}></AntDesign>
          <Text style={{fontSize:14,marginLeft:2,lineHeight:22,color:'#000'}}>购物： 评价领优惠券</Text><Text style={{fontSize:12,lineHeight:23,marginLeft:6}}>昨天 10：49</Text>
        </View>
        <View style={{paddingLeft:10,marginTop:12,flexDirection:'row'}}>
          <AntDesign name="shoppingcart" size={20} color={'white'} style={styles.shopIcon}></AntDesign>
          <Text style={{fontSize:13,marginLeft:2,lineHeight:22,color:'#000'}}>商品橱窗通知：【商品关闭...</Text><Text style={{fontSize:12,lineHeight:22,marginLeft:9}}>前天</Text>
        </View>
      </View>

      <View style={styles.box3}>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'#000',fontSize:15,}}>常用小程序</Text>
            <Text style={{fontSize:13,lineHeight:24,marginLeft:105}}>全部</Text>
            <Ionicons name='chevron-forward-sharp' size={15} style={{lineHeight:22,marginRight:10}}/>
          </View>

          <View>
          <FlatList
            data={miniAppData}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            numColumns={3}
            />
          </View>
      </View>

      <View style={styles.box4}>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'#000',fontSize:15,}}>最近常看</Text>
            <Text style={{fontSize:13,lineHeight:24,marginLeft:115}}>全部</Text>
            <Ionicons name='chevron-forward-sharp' size={15} style={{lineHeight:22,marginRight:10}}/>
          </View>

          <View>
          <FlatList
            data={followPeoData}
            renderItem={renderItem2}
            keyExtractor={item => item.name}
            numColumns={3}
            />
          </View>
      </View>

      <View style={styles.box5}>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'#000',fontSize:15,}}>常用功能</Text>
            <Text style={{fontSize:13,lineHeight:24,marginLeft:105}}>全部</Text>
            <Ionicons name='chevron-forward-sharp' size={15} style={{lineHeight:22,marginRight:10}}/>
          </View>

          <View>
          <FlatList
            data={Commonfunction}
            renderItem={renderItem3}
            keyExtractor={item => item.name}
            numColumns={3}
            contentContainerStyle={styles.flatListContent}
            />
          </View>
      </View>

      <View style={styles.box6}>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'#000',fontSize:15,}}>生活动态</Text>
            <Text style={{fontSize:13,lineHeight:24,marginLeft:105}}>全部</Text>
            <Ionicons name='chevron-forward-sharp' size={15} style={{lineHeight:22,marginRight:10}}/>
          </View>

          <FlatList
            data={LifeMoment}
            renderItem={renderItem3}
            keyExtractor={item => item.name}
            numColumns={3}
            contentContainerStyle={styles.flatListContent}
            />
      </View>

    </ScrollView>
    </LinearGradient>
  );
}


// 侧边栏抽屉
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="首页" component={BottomTabNavigator} options={{ headerShown: false }}/>
      <Drawer.Screen name="搜索" component={SearchScreen} options={{ headerShown: false }}/>
      <Drawer.Screen name="朋友" component={FriendsScreen} options={{ headerShown: false }}/>
      <Drawer.Screen name="消息" component={MessageScreen} options={{ headerShown: false }}/>
      <Drawer.Screen name="我的" component={MineScreen} options={{ headerShown: false }}/>
      <Drawer.Screen name="编辑资料" component={EditMessage} options={{ headerShown: false }}/>
      <Drawer.Screen name="添加朋友" component={AddFriend} options={{ headerShown: false }}/>
      <Drawer.Screen name="作品视频" component={CreateVideoList} options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
}

// 主应用组件
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'auto',
  },
  box1: {
    marginTop:10,
    position:'relative',
    width:'88%',
    height:40,
    left:'2%',
    flexDirection:'row',
  },
  box2: {
    width:'88%',
    height:110,
    left:'6%',
    position:'relative',
    marginTop:10,
    backgroundColor:'white',
    borderRadius:10,
  },
  box3: {
    width:'88%',
    height:'auto',
    left:'6%',
    position:'relative',
    marginTop:10,
    backgroundColor:'white',
    borderRadius:10,
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:10,
  },
  box4: {
    width:'88%',
    height:'auto',
    left:'6%',
    position:'relative',
    marginTop:10,
    backgroundColor:'white',
    borderRadius:10,
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:10
  },
  box5: {
    width:'88%',
    height:260,
    left:'6%',
    position:'relative',
    marginTop:10,
    marginBottom:30,
    backgroundColor:'white',
    borderRadius:10,
    paddingLeft:10,
    paddingTop:10,
  },
  box6: {
    width:'88%',
    height:260,
    left:'6%',
    position:'relative',
    marginTop:-18,
    marginBottom:30,
    backgroundColor:'white',
    borderRadius:10,
    paddingLeft:10,
    paddingTop:10,
  },
  shopIcon: {
    backgroundColor:'red',
    borderRadius:50,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center', // 水平居中
    marginLeft: 80,
    backgroundColor:'white',
    paddingLeft:10,
    paddingRight:10,
    borderRadius:15
  },
  btnText: {
    fontSize: 15,
  },
  icon:{
    marginRight: 5, 
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    
    margin: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  box4_image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  box5_image: {
    width: 30,
    height: 30,
    borderRadius: 2,
  },
  flatListContent: {
    justifyContent: 'flex-start',
  },
  name: {
    marginTop: 5,
    fontSize:11
  },
})