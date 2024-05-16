import * as React from 'react';
import { Button, View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import TopNavBar from '../../components/TopNavigaion/TopNavBar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FriendsScreen from '../Friend/FriendsScreen';
import MessageScreen from '../Message/MessageScreen';
import MineScreen from '../Mine/MineScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import UserCity from './HomeTopNav/UserCity';
import UserFollow from './HomeTopNav/UserFollow';
import UserRecommend from './HomeTopNav/UserRecommend';
import TheMall from './HomeTopNav/TheMall';
import GroupBuying from './HomeTopNav/GroupBuying';
import Online from './HomeTopNav/Online';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TestChange from './HomeTopNav/TestChangePage';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

// 首页组件
const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({ navigation}) => {

  return (
    <View style={styles.container}>
      <Tab.Navigator 
      initialRouteName='推荐'
      tabBarOptions={{
        activeTintColor:'white',
        indicatorStyle: {
          backgroundColor: 'white', // 设置下划线颜色为白色
        },
        labelStyle: {
          fontSize: hp(2), // 设置字体大小为16
        },
      }}
      screenOptions={{
        "tabBarStyle":{
          "backgroundColor":'#000',
          "height":hp(6),
          
        }
      }}
      
      >
        <Tab.Screen name="关注" component={UserFollow} />
        <Tab.Screen name="商城" component={TheMall} />
        <Tab.Screen name="团购" component={GroupBuying} />
        <Tab.Screen name="直播" component={Online} />
        <Tab.Screen name="城市" component={UserCity} />
        <Tab.Screen name="推荐" component={UserRecommend}/>
      </Tab.Navigator>
      <IconButton
        icon="menu"
        onPress={() => navigation.openDrawer()}
        style={styles.iconButton1}
        size={wp(7)}
      />
      <IconButton
        icon="magnify"
        onPress={() => {navigation.navigate('搜索')}}
        style={styles.iconButton2}
        size={wp(7)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  iconButton1: {
    position: 'absolute',
    zIndex: 2,
    marginTop:hp(6),
    left:wp(3)
  },
  iconButton2: {
    position: 'absolute',
    zIndex: 2,
    right: wp(3),
    marginTop:hp(6),
  },
});

export default HomeScreen;