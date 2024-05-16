import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const CityHot = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
    <View style={{ padding: hp(1.8) }}>
    
          <LinearGradient colors={['#D5F6FF', '#F4E4FF']} style={{flexDirection:'row',borderRadius:5,paddingVertical:hp(1.2)}}>
              <Entypo name="align-top" size={wp(4)} style={{marginLeft:wp(1.5)}} color={'#099DFF'}></Entypo>
              <Text style={{fontSize:hp(2),marginLeft:wp(1.5),color:"#202020"}}>听习近平分享自己的读书故事</Text>
          </LinearGradient>

          <LinearGradient colors={['#ffd93b', '#ffffff']} start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} style={{flexDirection:'row',borderRadius:5,paddingVertical:hp(1),marginTop:hp(2)}}>
              <MaterialCommunityIcons name="numeric-1-circle" size={wp(4.5)} style={{marginLeft:wp(1.5)}} color={'#FF9900'}></MaterialCommunityIcons>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingRight:wp(1.8)}}>
                  <Text style={{fontSize:hp(2),marginLeft:wp(1.5),color:"#202020"}}>掘金大逆转绝杀湖人</Text>
                  <Text styles={{}}>1129.5万</Text>
              </View>
          </LinearGradient>

          <LinearGradient colors={['#ffd93b', '#ffffff']} start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} style={{flexDirection:'row',borderRadius:5,paddingVertical:hp(1),marginTop:hp(2)}}>
              <MaterialCommunityIcons name="numeric-2-circle" size={wp(4.5)} style={{marginLeft:wp(1.5)}} color={'#ccc'}></MaterialCommunityIcons>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingRight:wp(1.8)}}>
                  <Text style={{fontSize:hp(2),marginLeft:wp(1.5),color:"#202020"}}>黄金创近两年最大跌幅</Text>
                  <Text styles={{}}>1057.8万</Text>
              </View>
          </LinearGradient>

          <LinearGradient colors={['#ffd93b', '#ffffff']} start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} style={{flexDirection:'row',borderRadius:5,paddingVertical:hp(1),marginTop:hp(2)}}>
              <MaterialCommunityIcons name="numeric-3-box" size={wp(4.5)} style={{marginLeft:wp(1.5)}} color={'#FAB880'}></MaterialCommunityIcons>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingRight:wp(1.8)}}>
                  <Text style={{fontSize:hp(2),marginLeft:wp(1.5),color:"#202020"}}>我国发明专利产业化率达…</Text>
                  <Text styles={{}}>1005.6万</Text>
              </View>
          </LinearGradient>

          <View style={{flexDirection:'row',borderRadius:5,paddingVertical:hp(1),marginTop:hp(1)}}>
              <FontAwesome6 name="4" size={wp(4)} style={{marginLeft:wp(1.5)}} color={'#FF9900'}></FontAwesome6>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingRight:wp(1.5)}}>
                  <Text style={{fontSize:hp(2),marginLeft:10,color:"#202020"}}>李闽轩 北电艺考</Text>
                  <Text styles={{}}>1005.4万</Text>
              </View>
          </View>

          <View style={{flexDirection:'row',borderRadius:5,paddingVertical:hp(1),marginTop:hp(1)}}>
              <FontAwesome6 name="5" size={wp(4)} style={{marginLeft:wp(1.5)}} color={'#FF9900'}></FontAwesome6>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingRight:wp(1.5)}}>
                  <Text style={{fontSize:hp(2),marginLeft:wp(1.5),color:"#202020"}}>人民海军75周年舰艇开放日</Text>
                  <Text styles={{}}>932.4万</Text>
              </View>
          </View>

          <View style={{flexDirection:'row',borderRadius:5,paddingVertical:hp(1),marginTop:hp(1)}}>
              <FontAwesome6 name="6" size={wp(4)} style={{marginLeft:wp(1.5)}} color={'#FF9900'}></FontAwesome6>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingRight:wp(1.5)}}>
                  <Text style={{fontSize:hp(2),marginLeft:wp(1.5),color:"#202020"}}>一人推荐一个五一好去处</Text>
                  <Text styles={{}}>910.6万</Text>
              </View>
          </View>

          <View style={{flexDirection:'row',borderRadius:5,paddingVertical:hp(1),marginTop:hp(1)}}>
              <FontAwesome6 name="6" size={wp(4)} style={{marginLeft:wp(1.5)}} color={'#FF9900'}></FontAwesome6>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingRight:wp(1.5)}}>
                  <Text style={{fontSize:hp(2),marginLeft:wp(1.5),color:"#202020"}}>听习近平分享自己的读书故事</Text>
                  <Text styles={{}}>809.6万</Text>
              </View>
          </View>

          <View style={{flexDirection:'row',borderRadius:5,paddingVertical:hp(1),marginTop:hp(1),marginBottom:hp(2)}}>
              <FontAwesome6 name="7" size={wp(4)} style={{marginLeft:wp(1.5)}} color={'#FF9900'}></FontAwesome6>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingRight:wp(1.5)}}>
                  <Text style={{fontSize:hp(2),marginLeft:wp(1.5),color:"#202020"}}>常州副市长有多接地气</Text>
                  <Text styles={{}}>709.5万</Text>
              </View>
          </View>

          
    </View>
 
  </ScrollView>
  )
}

export default CityHot

const styles = StyleSheet.create({})