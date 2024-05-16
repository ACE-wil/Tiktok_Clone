import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, SafeAreaView, } from 'react-native';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen';
import FriendsScreen from '../../screens/Friend/FriendsScreen';
import MessageScreen from '../../screens/Message/MessageScreen';
import MineScreen from '../../screens/Mine/MineScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoScreen from '../../screens/Video/VideoScreen';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Provider } from 'react-redux';
import store from '../../redux_store/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux_store/showBottomTabSlice';
const screenHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options; // 从这个描述符中取出 options 属性，并将其值赋给 focusedOptions。
  const { routeNames, routes } = state; // 更新路由
  const currentRoute = routes[state.index].name; // 更新当前路由

  const isMessageOrMineScreen = currentRoute === '消息' || currentRoute === '我'; // 用于判断是不是“消息”或者“我”
  const tabBarBackgroundColor = isMessageOrMineScreen ? 'white' : '#000'; // 如果是“消息”或者“我”，底部导航栏背景色变白色，否则为黑色
  const tabBarTextColor = isMessageOrMineScreen ? 'black' : 'white'; // 如果是是“消息”或者“我”，底部导航栏文字变黑色，否则白色

  const showBottomTab = useSelector((state) => state.showBottomTab.value); // 从redux取得全局状态showBottomTab，用于首页页面控制底部导航栏的显示与隐藏

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    
    <View style={[styles.tabBar,{display: showBottomTab ? 'flex' : 'none', backgroundColor: tabBarBackgroundColor, color:tabBarTextColor,width:'100%', }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index; // 聚焦就更新索引

        // 点击就跳转导航
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: false,
          });

          if (!isFocused && !event.defaultPrevented) {
            if (index ===3){
                navigation.navigate('消息'); // 跳转到消息页面
            }if(index === 4){
              navigation.navigate('我'); // 跳转到消息页面
            }
            else{navigation.navigate(route.name);}
            
          }
        };

        if (index === 2) { // 中间位置
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={[styles.tabButton, { justifyContent: 'center' }]}
            >
              <Ionicons name={'add-circle'} size={hp(6)} color={tabBarTextColor} />
            </TouchableOpacity>
          );
        };
        if (index === 3) {
          return (
            <TouchableOpacity
            key='消息'
            onPress={onPress}
            style={styles.tabButton}
          >
            <Text style={{ color: isFocused ? '#000' : 'gray', fontSize: hp('2%') }}>
              消息
            </Text>
          </TouchableOpacity>
          )
        }
        if (index === 4) {
          return (
            <TouchableOpacity
            key='我'
            onPress={onPress}
            style={styles.tabButton}
          >
            <Text style={{ color: isFocused ? '#000' : 'gray', fontSize: hp('2%')}}>
              我
            </Text>
          </TouchableOpacity>
          )
        }
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            <Text style={{ color: isFocused ? 'white' : 'gray', fontSize: hp('2%') }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

function BottomTabNavigator() {
  return (
    <Provider store={store}>
      {/* 使用自定义导航栏 */}
    <Tab.Navigator tabBarOptions={{}} screenOptions={{ headerShown: false}} tabBar={props => <CustomTabBar {...props}/>} > 
      <Tab.Screen name="首页" component={HomeScreen}/>
      <Tab.Screen name="朋友" component={FriendsScreen}/>
      <Tab.Screen name="视频" component={VideoScreen}/>
      <Tab.Screen name="消息" component={MessageScreen}/>
      <Tab.Screen name="我" component={MineScreen}/>
    </Tab.Navigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height:screenHeight*0.08,
    bottom:0,
    zIndex:2
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTabNavigator;
