import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Animated } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MyFriend from './AddFriendTop/MyFriend';
import NewFriend from './AddFriendTop/NewFriend';
import AddNewFriend from './AddFriendTop/AddNewFriend';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';


const AddFriend = ({navigation}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [slideAnim] = useState(new Animated.Value(wp('100%')));
  
  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideIn(); // 在组件挂载或标签页切换时执行淡入动画
  }, []); // 监听 activeTab 的变化

  const handleTabChange = (index) => {
    setActiveTab(index);
    slideIn(); // 切换页面时执行动画
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <MyFriend />;
      case 1:
        return <NewFriend/>;
      case 2:
        return <AddNewFriend/>;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: wp(3.5),paddingHorizontal:hp(2) }}>
        <AntDesign name='left' size={25}  onPress={() => navigation.goBack()}></AntDesign>
        <TouchableOpacity onPress={() => handleTabChange(0)} style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent' }}>
          <Text style={{color:activeTab === 0? '#000' : 'gray',fontSize:hp(2),borderBottomColor:activeTab === 0? '#000':'transparent',borderBottomWidth:activeTab === 0?2:0,paddingBottom:hp(1)}}>朋友</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handleTabChange(1)} style={{ flex: 1, alignItems: 'center', backgroundColor:'transparent' }}>
          <Text style={{color:activeTab === 1? '#000' : 'gray',fontSize:hp(2),borderBottomColor:activeTab === 1? '#000':'',borderBottomWidth:activeTab === 1?2:0,paddingBottom:hp(1)}}>新朋友</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handleTabChange(2)} style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent' }}>
          <Text style={{color:activeTab === 2? '#000' : 'gray',fontSize:hp(2),borderBottomColor:activeTab === 2? '#000':'',borderBottomWidth:activeTab === 2?2:0,paddingBottom:hp(1)}}>添加朋友</Text>
        </TouchableOpacity>
        <AntDesign name='setting' size={25} color={'#000'}></AntDesign>
      </View>
      <Animated.View style={{ width:'100%',height:'100%', transform: [{ translateX: slideAnim }] }}>
        {renderTabContent()}
      </Animated.View>
    </View>
  );
};

export default AddFriend;
