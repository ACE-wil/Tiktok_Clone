import React, {useRef,useState} from 'react';
import { ImageBackground, Pressable, Touchable } from 'react-native';
import { Image,Text,ScrollView } from 'react-native';
import {Animated, PanResponder, StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import { FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CreateScreen from './MineTopScreen/CreateScreen';
import SalesScreen from './MineTopScreen/SalesScreen';
import SecretScreen from './MineTopScreen/SecretScreen';
import RecomScreen from './MineTopScreen/RecomScreen';
import StarScreen from './MineTopScreen/StarScreen';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const VideoTab = createMaterialTopTabNavigator();
const screenWidth = Dimensions.get('window').width;

const MineScreen = ({navigation}) => {
  const [scrollY] = useState(new Animated.Value(0));
  const [isOpen, setIsOpen] = useState(false);
  const pan = useRef(new Animated.Value(wp(70))).current; 
  const contOpacity = isOpen ? 0.5 : 1;
  const drawerWidth = wp(60);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        if (!isOpen && gestureState.dx > 0) {
          Animated.event([null, { dx: pan }], { useNativeDriver: false })(event, gestureState);
        } else if (isOpen && gestureState.dx < 0) {
          Animated.event([null, { dx: pan }], { useNativeDriver: false })(event, gestureState);
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dx > drawerWidth / 2) {
          openDrawer();
        } else {
          closeDrawer();
        }
      },
    })
  ).current;
    
  const toggleDrawer = () => {
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

const openDrawer = () => {
  setIsOpen(true);
  Animated.timing(pan, {
    toValue: wp(0), // 展开时移动到 wp(0)
    duration: 500,
    useNativeDriver: false,
  }).start();
};

const closeDrawer = () => {
  setIsOpen(false);
  Animated.timing(pan, {
    toValue: wp(60), // 关闭时回到 wp(100)
    duration: 300,
    useNativeDriver: false,
  }).start();
};

const handleOutsidePress = () => {
    if (isOpen) {
      closeDrawer();
    }
  };

  const componentData = [
    {id:1, componName:'电商带货', componImage:require('../../assets/images/Ele_business.png'), },
    {id:2, componName:'主播中心', componImage:require('../../assets/images/Anc_center.png'), },
    {id:3, componName:'抖音商城', componImage:require('../../assets/images/Tik_Mall.png'), },
    {id:4, componName:'观看历史', componImage:require('../../assets/images/Wat_history.png'), },
    {id:5, componName:'创作中心', componImage:require('../../assets/images/Creat_center.png'), },
    {id:6, componName:'我的钱包', componImage:require('../../assets/images/My_wallet.png'), },
    {id:7, componName:'常访问的人', componImage:require('../../assets/images/Usual_viewer.png'), },
    {id:8, componName:'我的仔仔', componImage:require('../../assets/images/My_pet.png'), },
    {id:9, componName:'我的音乐', componImage:require('../../assets/images/My_music.png'), },
    {id:10, componName:'我的会员', componImage:require('../../assets/images/My_VIP.png'), },
    {id:11, componName:'我的小程序', componImage:require('../../assets/images/My_uniapp.png'), },
    {id:12, componName:'查看更多', componImage:require('../../assets/images/Watch_more.png'), },
  ]

  const renderComponentItem = ({item}) => {
    return (
        <View style={{height:wp(20),margin:hp(1),alignItems:'center'}}>
          <Image source={item.componImage} style={{width:wp(7),height:wp(7)}}/>
          <Text style={{
    color: '#6B6B6B',textAlign:'center'}}>{item.componName}</Text>
        </View>
    )
  }

  return (
    <ScrollView style={[styles.container,{}]}>

      <Animated.View
          style={[
            styles.drawer,
            { transform: [{ translateX: pan }] },
            isOpen ? { width: drawerWidth } : {width:drawerWidth},
          ]}
          {...panResponder.panHandlers}
        >
          <Pressable style={{width:'100%',height:hp(100)}}>
            <View style={{marginLeft:hp(2)}}>
              <Pressable style={{flexDirection:'row',marginTop:hp(1)}}>
                <AntDesign name='shoppingcart' size={hp(2.5)}></AntDesign>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>我的订单</Text>
              </Pressable>
              <View style={{flexDirection:'row',marginTop:hp(3)}}>
                <AntDesign name='wallet' size={hp(2.5)}></AntDesign>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>我的钱包</Text>
              </View>
            </View>

            <View style={{borderBottomWidth:1,borderBottomColor:'#D0D0D0',width:'90%',left:'5%',marginTop:hp(2.5),marginBottom:hp(2.5)}}></View>

            <View style={{ marginLeft:hp(2)}}>
              <View style={{flexDirection:'row',marginTop:hp(0.5)}}>
                <AntDesign name='qrcode' size={hp(2.5)}></AntDesign>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>我的二维码</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:hp(3)}}>
                <FontAwesome name='history' size={hp(2.5)}></FontAwesome>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>观看历史</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:hp(3)}}>
                <MaterialIcons name='watch-later' size={hp(2.5)}></MaterialIcons>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>稍后再看</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:hp(3)}}>
                <AntDesign name='poweroff' size={hp(2)} style={{top:hp(0.25)}}></AntDesign>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>离线模式</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:hp(3)}}>
                <Ionicons name='create' size={hp(2.5)}></Ionicons>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>抖音创作者中心</Text>
              </View>
            </View>

            <View style={{borderBottomWidth:1,borderBottomColor:'#D0D0D0',width:'90%',left:'5%',marginTop:hp(2.5),marginBottom:hp(2.5)}}></View>

            <View style={{ marginLeft:hp(2)}}>
              <View style={{flexDirection:'row',marginTop:hp(0.5)}}>
                <AntDesign name='aliwangwang-o1' size={hp(2.5)}></AntDesign>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>小程序</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:hp(3)}}>
                <AntDesign name='pay-circle-o1' size={hp(2.5)}></AntDesign>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>抖音公益</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:hp(3)}}>
                <AntDesign name='adduser' size={hp(2.5)}></AntDesign>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>青少年模式</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:hp(3)}}>
                <AntDesign name='smileo' size={hp(2.5)}></AntDesign>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>我的客服</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:hp(3)}}>
                <AntDesign name='setting' size={hp(2.5)}></AntDesign>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>设置</Text>
              </View>
            </View>

            <View style={{borderBottomWidth:1,borderBottomColor:'#D0D0D0',width:'90%',left:'5%',marginTop:hp(2.5),marginBottom:hp(2.5)}}></View>
            
            <View style={{ marginLeft:hp(2)}}>
              <View style={{flexDirection:'row',marginTop:hp(0.5)}}>
                <AntDesign name='shoppingcart' size={hp(2.5)}></AntDesign>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>个人消息收集清单</Text>
              </View>
              <View style={{flexDirection:'row',marginTop:hp(3)}}>
                <AntDesign name='shoppingcart' size={hp(2.5)}></AntDesign>
                <Text style={{fontSize:hp(2),marginLeft:wp(2),color:'#000'}}>第三方信息共享清单</Text>
              </View>
            </View>

          </Pressable>
        </Animated.View>

      <Pressable style={{opacity:contOpacity,flex:1}}  onPress={handleOutsidePress}>
        <View style={{position:'absolute',width:'100%',height:100,zIndex:2,flexDirection:'row',paddingTop:10,paddingRight:10,justifyContent:'flex-end'}}>       
            <Image source={require('../../assets/images/mine/viewer.png')} style={{width:30,height:30,right:30}}></Image>
            <Image source={require('../../assets/images/mine/search.png')} style={{width:30,height:30,right:20}}></Image>
            <Pressable onPress={toggleDrawer}>
              <Image source={require('../../assets/images/mine/list.png')} style={{width:30,height:30,right:10}} ></Image>
            </Pressable>  
        </View>


        <ImageBackground source={require('../../assets/images/TopNavBarBG.png')} style={{width:'100%',height:200}}>
          <View style={{paddingTop:80,paddingLeft:20,flexDirection:'row'}}>
            <Image source={require('../../assets/images/wlgcz.jpg')} style={{width:100,height:100,borderRadius:50,borderWidth:2,borderColor:'white'}}></Image>
              <View style={{flexDirection:'column'}}>
                <Text style={{fontSize:hp(2.3),color:'white',left:20,lineHeight:80}}>平凡的coder</Text>
                <Text style={{left:18,top:-20,fontSize:hp(1.5)}}>抖音号：wuai566</Text>
              </View>
          </View>
        </ImageBackground>
        
      </Pressable>


      <View style={{backgroundColor:'white',borderRadius:20,top:-10,flex:1,opacity:contOpacity}} onPress={handleOutsidePress}>
          <View style={{flexDirection:'row'}}>
              <Text style={{left:20,top:10}}><Text style={{color:'#000',fontSize:18,fontWeight:'bold'}}>655</Text><Text>获赞</Text></Text>
              <Text style={{left:40,top:10}}><Text style={{color:'#000',fontSize:18,fontWeight:'bold'}}>63</Text><Text>朋友</Text></Text>
              <Text style={{left:60,top:10}}><Text style={{color:'#000',fontSize:18,fontWeight:'bold'}}>572</Text><Text>关注</Text></Text>
              <Text style={{left:80,top:10}}><Text style={{color:'#000',fontSize:18,fontWeight:'bold'}}>113</Text><Text>粉丝</Text></Text>
          </View>
          <View style={{top:30,left:20}}>
              <Text style={{color:'#000'}}>学无止境，沉淀沉淀</Text>
          </View>
          <View style={{flexDirection:'row',left:20,top:36}}>
              <TouchableOpacity style={{width:40,height:20,backgroundColor:'#ECECEC',borderRadius:1,paddingLeft:3}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#35C2FC'}}>♂</Text>
                    <Text style={{color:'#3C3C3C'}}>男</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'auto',height:'auto',backgroundColor:'#ECECEC',borderRadius:1,paddingLeft:6,marginLeft:8,paddingRight:6}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#3C3C3C'}}>广东·广州</Text>
                  </View>
              </TouchableOpacity>
          </View>

          <View style={{width:screenWidth*0.9,height:90,top:40,left:'5%'}}>
              <FlatList
                data={componentData}
                renderItem={renderComponentItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
          </View>

          <View style={{width:'100%',height:60,marginTop:hp(2),display:'flex',alignItems:'center',justifyContent:"center"}}>
            <View style={{flexDirection:'row',height:40}}>
            <TouchableOpacity style={{width:'45%',height:40,backgroundColor:'#ECECEC',borderRadius:5,marginRight:wp(1),display:'flex',justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('编辑资料')}>
                <Text style={{fontSize:17,color:'#333333',textAlign:'center'}}>编辑资料</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate('添加朋友')} style={{width:'45%',height:40,backgroundColor:'#ECECEC',borderRadius:5,marginLeft:wp(1),display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:17,color:'#333333',textAlign:'center'}}>添加朋友</Text>
            </TouchableOpacity>
            </View>
          </View>
      
      
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
              }
            }}
      >
        <VideoTab.Screen name="作品" component={CreateScreen} />
        <VideoTab.Screen name="橱窗" component={SalesScreen} />
        <VideoTab.Screen name="私密" component={SecretScreen} />
        <VideoTab.Screen name="推荐" component={RecomScreen} />
        <VideoTab.Screen name="收藏" component={StarScreen} />
      </VideoTab.Navigator>
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
  }
});

export default MineScreen;