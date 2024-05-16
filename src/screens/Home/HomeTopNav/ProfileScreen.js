import React, {useRef,useState} from 'react';
import { ImageBackground, Pressable, Touchable } from 'react-native';
import { Image,Text,ScrollView } from 'react-native';
import {Animated, PanResponder, StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import { Icon } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { FlatList } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CreateScreen from '../../Mine/MineTopScreen/CreateScreen';
import SalesScreen from '../../Mine/MineTopScreen/SalesScreen';

import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const VideoTab = createMaterialTopTabNavigator();

const ProfileScreen = ({navigation, currenIndex}) => {
    const [scrollY] = useState(new Animated.Value(0));
    const [isOpen, setIsOpen] = useState(false);
    const [genderMan, setGenderMan] = useState(true);
    const pan = useRef(new Animated.Value(wp(70))).current; 
    const contOpacity = isOpen ? 0.5 : 1;
    const drawerWidth = wp(60);
    const screenWidth = Dimensions.get('window').width;
    const [isFans,setIsFans] = useState(true)

    const ProfileData = [
      { id: 1, uri: require('../../../assets/video/demo3.mp4'), AvatarImage: require('../../../assets/images/szlyw.jpeg'), like: 1901, comment: 132, collect: 825, share: 425, userName:'@山中冷月微',videoText: '去读博吧,会拥有光明未来的!#读博的日子#研究生#论文',bgcolor:'#000',gender:'女',likeCount:'76.3万', friends:'none', follow:'4', fans:'11.9万', isGenderMan:false},
      
      { id: 2, uri: require('../../../assets/video/demo2.mp4'), AvatarImage: require('../../../assets/images/yzw.jpeg'), like: 219, comment: 132, collect: 825, share: 425, userName:'@尹子维',videoText: '彩蛋的他终于承认了…他是恋爱脑……#尹子维徐冬冬和她的日记 #徐冬冬 #心动种草指南',bgcolor:'#000',gender:'男',likeCount:'1252.4万', friends:'none', follow:'37', fans:'110.9万',isGenderMan:true },
      
      { id: 3, uri: require('../../../assets/video/demo1.mp4'), AvatarImage: require('../../../assets/images/jh.jpeg'), like: 3319, comment: 132, collect: 825, share: 425, userName:'@俊鸿',videoText: '方方面我都比你强，你拿什么跟我打?—加Ace3V #Turbo3',bgcolor:'#000',gender:'男',likeCount:'4077.3万', friends:'none', follow:'134', fans:'131.0万',isGenderMan:true},
      
      { id: 4, uri: require('../../../assets/video/demo4.mp4'), AvatarImage: require('../../../assets/images/cxldb.jpeg'), like: 2119, comment: 132, collect: 825, share: 425, userName:'@陈翔六点半',videoText: '对老板贴脸开大，我真不是故意的#职场那些事#走别人的路让别人无路可走',bgcolor:'#000' ,gender:'男',likeCount:'9.8亿', friends:'none', follow:'415', fans:'7070.0万',isGenderMan:true},
      
      { id: 5, uri: require('../../../assets/video/demo5.mp4'), AvatarImage: require('../../../assets/images/tcwldy.jpeg'), like: 4219, comment: 132, collect: 825, share: 425, userName:'@桃厂网络电影',videoText: '这白月光的杀伤力也太大了吧#城中之城#城中之城人性量心尺#隆妮#于和伟',bgcolor:'#000' ,gender:'男',likeCount:'2.4亿', friends:'none', follow:'84', fans:'288.5万',isGenderMan:true},
    ];


  return (
    <ScrollView style={[styles.container,{}]}>

      <Pressable style={{opacity:contOpacity,flex:1}}>

        <ImageBackground source={require('../../../assets/images/TopNavBarBG.png')} style={{width:'100%',height:200}}>
          <View style={{paddingTop:80,paddingLeft:20,flexDirection:'row'}}>
            <Image source={ProfileData[currenIndex].AvatarImage} style={{width:100,height:100,borderRadius:50,borderWidth:2,borderColor:'white'}}></Image>
            <View style={{flexDirection:'column'}}>
              <Text style={{fontSize:hp(2.3),color:'white',left:20,lineHeight:80}}>{ProfileData[currenIndex].userName}</Text>
              <Text style={{left:18,top:-20,fontSize:hp(1.5)}}>抖音号：wuai566</Text>
            </View>
          </View>
        </ImageBackground>
        
      </Pressable>


      <View style={{backgroundColor:'white',borderRadius:20,top:-10,flex:1,opacity:contOpacity}}>
          <View style={{flexDirection:'row'}}>
              <Text style={{left:30,top:10}}><Text style={{color:'#000',fontSize:18,fontWeight:'bold'}}>{ProfileData[currenIndex].likeCount}</Text><Text>获赞</Text></Text>
              <Text style={{left:50,top:10}}><Text style={{color:'#000',fontSize:18,fontWeight:'bold'}}>{ProfileData[currenIndex].follow}</Text><Text>关注</Text></Text>
              <Text style={{left:70,top:10}}><Text style={{color:'#000',fontSize:18,fontWeight:'bold'}}>{ProfileData[currenIndex].fans}</Text><Text>粉丝</Text></Text>
          </View>
          <View style={{top:30,left:20}}>
              <Text style={{color:'#000'}}>{ProfileData[currenIndex].videoText}</Text>
          </View>
          <View style={{flexDirection:'row',left:20,top:36}}>
              <TouchableOpacity style={{width:40,height:20,backgroundColor:'#ECECEC',borderRadius:1,paddingLeft:3}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:ProfileData[currenIndex].isGenderMan?'#35C2FC':'#FF2875'}}>♂</Text>
                    <Text style={{color:'#3C3C3C'}}>{ProfileData[currenIndex].gender}</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'auto',height:'auto',backgroundColor:'#ECECEC',borderRadius:1,paddingLeft:6,marginLeft:8,paddingRight:6}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#3C3C3C'}}>广东·广州</Text>
                  </View>
              </TouchableOpacity>
          </View>

          <View style={{width:'100%',height:60,marginTop:hp(5),display:'flex',alignItems:'center',justifyContent:"center"}}>
            <View style={{flexDirection:'row',height:40}}>
            <TouchableOpacity  onPress={() => {[setIsFans(!isFans)]}} style={{width:'45%',height:40,backgroundColor:isFans?'#ECECEC':'#FF2875',borderRadius:5,marginRight:wp(1),display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:17,color:isFans?'#333333':'#FFFFFF',textAlign:'center'}}>{isFans?'取消关注':'关注'}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={{width:'45%',height:40,backgroundColor:'#ECECEC',borderRadius:5,marginLeft:wp(1),display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:17,color:'#333333',textAlign:'center'}}>私信</Text>
            </TouchableOpacity>
            </View>
          </View>
      
        <View style={styles.VideoTaps}>
            <VideoTab.Navigator 
            style={{top:hp(0.5),height:hp(110)}}
            tabBarOptions={{
              activeTintColor:'#000',
              indicatorStyle: {
              backgroundColor: '#000', // 设置下划线颜色为白色
              },
              labelStyle: {
              fontSize: 16, // 设置字体大小为16
              color:'#000'
              },
              }}
            screenOptions={{
              "tabBarStyle":{
              "backgroundColor":'white',
              },
            gestureEnabled: true, // 启用手势
            gestureDirection: 'horizontal', // 设置手势方向为水平
        }}
        >
              <VideoTab.Screen name="作品" component={CreateScreen}/>
              <VideoTab.Screen name="橱窗" component={SalesScreen}/>
            </VideoTab.Navigator>
        </View>

      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0, // 初始位置设为右侧
    padding:hp(1),
    backgroundColor: '#FFF',
    alignItems: 'center',
    zIndex: 3,
  },
  item: {
    width:wp(18),
    height:wp(18)
  },
  listContent: {
    justifyContent: 'space-evenly',
  },
  seacher:{
    width:45,height:45,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#ccc',borderRadius:50,marginRight:10
  },
  viewer:{
    width:45,height:45,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#ccc',borderRadius:50,marginRight:10
  },
  VideoTaps:{flex:1},
});

export default ProfileScreen;