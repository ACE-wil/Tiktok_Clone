import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { IconButton } from 'react-native-paper'
import Evillcons from 'react-native-vector-icons/EvilIcons'

const AddNewFriend = () => {
  return (
    <View style={{flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <View style={{position:'absolute',left:wp(5),top:hp(1.2),zIndex:2}}>
                <AntDesign name="search1" size={wp(5)}></AntDesign>
            </View>
            <TextInput placeholder='搜索用户名/抖音号' style={{
                    width: "95%",
                    backgroundColor:'#DEDEDE',
                    borderRadius: 10,
                    paddingVertical: 10,
                    paddingLeft:50,
                    fontSize:17
                    }}/>
            <View style={{position:'absolute',right:wp(5),top:hp(1.2),zIndex:2}}>
                <MaterialCommunityIcons name="line-scan" size={wp(5)}></MaterialCommunityIcons>
            </View>
        </View>

        <ScrollView style={{width:'100%',height:wp(20),flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{width:wp(18),height:wp(18),marginVertical:hp(1),marginLeft:wp(1.5),display:'flex',justifyContent:'center',alignItems:'center',shadowColor: '#000',shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
                <Image style={{width:wp(8),height:wp(8)}} source={require('../../../assets/images/mine/friend/keys.png')}></Image>
                <Text style={{marginTop:hp(1)}}>分享加朋友</Text>
            </View>

            <View style={{width:wp(18),height:wp(18),marginVertical:hp(1),marginLeft:wp(1.5),display:'flex',justifyContent:'center',alignItems:'center',shadowColor: '#000',shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
            <Image style={{width:wp(8),height:wp(8)}} source={require('../../../assets/images/mine/friend/contact.png')}></Image>
                <Text style={{marginTop:hp(1)}}>通讯录</Text>
            </View>

            <View style={{width:wp(18),height:wp(18),marginVertical:hp(1),marginLeft:wp(1.5),display:'flex',justifyContent:'center',alignItems:'center',shadowColor: '#000',shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
            <Image style={{width:wp(8),height:wp(8)}} source={require('../../../assets/images/mine/friend/Tiktok.png')}></Image>
                <Text style={{marginTop:hp(1)}}>抖音号</Text>
            </View>

            <View style={{width:wp(18),height:wp(18),marginVertical:hp(1),marginLeft:wp(1.5),display:'flex',justifyContent:'center',alignItems:'center',shadowColor: '#000',shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
            <Image style={{width:wp(8),height:wp(8)}} source={require('../../../assets/images/mine/friend/scans.png')}></Image>
                <Text style={{marginTop:hp(1)}}>扫一扫</Text>
            </View>

            <View style={{width:wp(18),height:wp(18),marginVertical:hp(1),marginLeft:wp(1.5),display:'flex',justifyContent:'center',alignItems:'center',shadowColor: '#000',shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
            <Image style={{width:wp(8),height:wp(8)}} source={require('../../../assets/images/mine/friend/二维码.png')}></Image>
                <Text style={{marginTop:hp(1)}}>二维码</Text>
            </View>

            <View style={{width:wp(18),height:wp(18),marginVertical:hp(1),marginLeft:wp(1.5),marginRight:wp(1.5),display:'flex',justifyContent:'center',alignItems:'center',shadowColor: '#000',shadowOffset: {width: 0,height: 2},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
            <Image style={{width:wp(8),height:wp(8)}} source={require('../../../assets/images/mine/friend/face.png')}></Image>
                <Text style={{marginTop:hp(1)}}>面对面</Text>
            </View>
        </ScrollView>

        <View style={{width:'100%',height:hp(70),top:-hp(10)}}>
                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:wp(2.5),flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/szlyw.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:wp(1.5)}}>
                        <Text style={{fontSize:hp(2),color:'#000'}}>山中冷月微</Text>
                        <Text style={{marginTop:8,color:'gray'}}>有2个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:hp(1.5),borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:wp(2.5)}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/yzw.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:wp(1.5)}}>
                        <Text style={{fontSize:hp(2),color:'#000'}}>尹子维</Text>
                        <Text style={{marginTop:8,color:'gray'}}>有1个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:hp(1.5),borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:wp(2.5)}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/jh.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:wp(1.5)}}>
                        <Text style={{fontSize:hp(2),color:'#000'}}>俊鸿</Text>
                        <Text style={{marginTop:8,color:'gray'}}>有2个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:hp(1.5),borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:wp(2.5)}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/cxldb.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:wp(1.5)}}>
                        <Text style={{fontSize:hp(2),color:'#000'}}>陈翔六点半</Text>
                        <Text style={{marginTop:8,color:'gray'}}>有3个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:hp(1.5),borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:wp(2.5)}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/tcwldy.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:wp(1.5)}}>
                        <Text style={{fontSize:hp(2),color:'#000'}}>桃子网络电影</Text>
                        <Text style={{marginTop:8,color:'gray'}}>有5个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:hp(1.5),borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:wp(2.5)}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/wlgcz.jpg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:wp(1.5)}}>
                        <Text style={{fontSize:hp(2),color:'#000'}}>是个锤子撒</Text>
                        <Text style={{marginTop:8,color:'gray'}}>有2个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:hp(1.5),borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:wp(2.5)}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>
        </View>

    </View>
  )
}

export default AddNewFriend

const styles = StyleSheet.create({})