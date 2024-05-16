import { StyleSheet, Text, View, ScrollView,Animated } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TextInput, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useState, useEffect } from 'react'
import BrandHot from './HotContent/BrandHot'
import CityHot from './HotContent/CityHot'
import TiktokHot from './HotContent/TiktokHot'
import CreativeInspiration from './HotContent/CreativeInspiration'
import GroupBuyHot from './HotContent/GroupBuyHot'


const SearchScreen = ({navigation}) => {
    const [value, onChangeText] = React.useState('深圳天气');
    const [activeTab, setActiveTab] = useState(0);
    const [slideAnim] = useState(new Animated.Value(hp('100%')));

    useEffect(() => {
      slideIn();
    }, []);
  
    const slideIn = () => {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    const renderTabContent = () => {
      switch (activeTab) {
        case 0:
          return <TiktokHot />;
        case 1:
          return <CityHot />;
        case 2:
          return <CreativeInspiration />;
        case 3:
          return <GroupBuyHot />;
        case 4:
          return <BrandHot />;
        default:
          return null;
      }
    };
  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }] }]}>
        <View style={{marginTop:hp(1.5),marginLeft:hp(1.5),flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <AntDesign name="left" size={wp(5)} style={{right:wp(1.5)}} onPress={() => navigation.goBack()}></AntDesign>
            <View style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Ionicons name='search' size={wp(5)} color={'#8D8D8D'} style={{position:'absolute',left:wp(3.5),zIndex:2}}></Ionicons>
                <TextInput
                    style={{ height: hp(4), width:wp(75),marginLeft:wp(1.5),paddingVertical:hp(0.8),paddingLeft:wp(9),paddingRight:wp(9),backgroundColor:'#E0E0E0',fontSize:hp(1.8) }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    />
                <AntDesign name='camera' size={wp(5)} style={{position:'absolute',right:wp(2),}}></AntDesign>
            </View>
    <Text style={{fontSize:hp(2),marginLeft:hp(1.5),color:'#E3457B'}}>搜索</Text>
      </View>

      <View style={{width:'100%',height:'auto'}}>
            <View style={{flexDirection:'row',marginLeft:wp(2.5),marginTop:hp(1.2),justifyContent: 'space-between',}}>
                <Text style={{fontSize:hp(1.8)}}>历史记录</Text>
                <View style={{right:hp(1.8),flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Text>展开</Text>
                    <AntDesign name="down" size={wp(5)}></AntDesign>
                    <Text style={{paddingHorizontal:hp(2),color:'#D4D4D4'}}>|</Text>
                    <AntDesign name="delete" size={wp(4)}></AntDesign>
                </View>
                
            </View>

        <View style={{width:'100%',height:'auto',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'black'}}>云南大学滇池学院...</Text></View>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'black'}}>前端</Text></View>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'black'}}>集梦116 直播间</Text></View>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'black'}}>集梦116</Text></View>
        </View>
      </View>

    <View style={{width:'96%',left:"2%",borderWidth:0.3,borderColor:'#D7D7D7',marginTop:hp(3),marginBottom:hp(1)}}></View>

    <View style={{width:'100%',height:'auto'}}>
            <View style={{flexDirection:'row',marginLeft:wp(2.5),marginTop:hp(2),justifyContent: 'space-between',}}>
                <Text style={{fontSize:hp(1.8)}}>猜你想搜</Text>
                <View style={{right:wp(2.5),flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{right:wp(0.4)}}>换一换</Text>
                    <EvilIcons name="refresh" size={25}></EvilIcons>
                </View>
            </View>

        <View style={{width:'100%',height:'auto',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'#E3457B'}}>深圳天气</Text></View>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'#E3457B'}}>为什么广东最近这···</Text></View>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'black',flexWrap:'nowrap'}} numberOfLines={1} ellipsizeMode="tail">古茗团购</Text></View>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'black',flexWrap:'nowrap'}} numberOfLines={1} ellipsizeMode="tail">瑞幸咖啡</Text></View>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'black',flexWrap:'nowrap'}} numberOfLines={1} ellipsizeMode="tail">塔斯汀</Text></View>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'black',flexWrap:'nowrap'}} numberOfLines={1} ellipsizeMode="tail">李晨Angelababy</Text></View>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'black',flexWrap:'nowrap'}} numberOfLines={1} ellipsizeMode="tail">集梦会长宣布解散···</Text></View>
            <View style={{width:'50%',paddingLeft:wp(2),marginTop:hp(2)}}><Text style={{fontSize:hp(2),color:'black',flexWrap:'nowrap'}} numberOfLines={1} ellipsizeMode="tail">主播小团团被捕</Text></View>
        </View>

        <View style={{width:'96%',left:"2%",borderWidth:0.3,borderColor:'#D7D7D7',marginTop:hp(3),marginBottom:hp(2)}}></View>

        <View style={{width:'100%',height:hp(60),paddingBottom:hp(12)}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: hp(1) }}>
        <TouchableOpacity onPress={() => setActiveTab(0)} style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent'}}>
          <Text style={{ color:activeTab === 0 ? "#000" : "gray",fontSize:hp(2)}}>抖音热榜</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(1)} style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent' }}>
          <Text style={{ color:activeTab === 1 ? "#000" : "gray",fontSize:hp(2)}}>广州榜</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(2)} style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent' }}>
          <Text style={{ color:activeTab === 2 ? "#000" : "gray",fontSize:hp(2)}}>创作灵感</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(3)} style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent'  }}>
          <Text style={{ color:activeTab === 3 ? "#000" : "gray",fontSize:hp(2)}}>团购榜</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(4)} style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent'}}>
          <Text style={{ color:activeTab === 4 ? "#000" : "gray",fontSize:hp(2)}}>品牌榜</Text>
        </TouchableOpacity>
      </View>
      {renderTabContent()}
      </View>
        
      </View>


    </Animated.View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})