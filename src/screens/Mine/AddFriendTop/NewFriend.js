import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { IconButton } from 'react-native-paper'
import Evillcons from 'react-native-vector-icons/EvilIcons'

const NewFriend = () => {
  return (
    <View style={{flex:1}}>
        

        <ScrollView style={{width:'100%',height:hp(100),top:-hp(2)}}>
                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:wp(2.5),flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/szlyw.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:hp(1)}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>山中冷月微</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有2个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:wp(2.5),borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/yzw.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>尹子维</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有1个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:15,borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/jh.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>俊鸿</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有2个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:15,borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/cxldb.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>陈翔六点半</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有3个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:15,borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/tcwldy.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>桃子网络电影</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有5个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:15,borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/wlgcz.jpg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>是个锤子撒</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有2个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:15,borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/szlyw.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>山中冷月微</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有2个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:15,borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/yzw.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>尹子维</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有1个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:15,borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/jh.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>俊鸿</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有2个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:15,borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/cxldb.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>陈翔六点半</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有3个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:15,borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:15,flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/tcwldy.jpeg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>桃子网络电影</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有5个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:15,borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>

                <View style={{width:'100%',height:hp(12),display:'flex',alignItems:'center',paddingLeft:wp(2.5),flexDirection:'row',borderTopColor:'#ccc',borderWidth:1,borderBottomColor:'#ccc',marginBottom:hp(6)}}>
                    <View>
                        <Image style={{width:hp(8),height:hp(8),borderRadius:50}} source={require('../../../assets/images/wlgcz.jpg')}></Image>
                    </View>
                    <View style={{flex:1,marginLeft:10}}>
                        <Text style={{fontSize:hp(1.8),color:'#000'}}>是个锤子撒</Text>
                        <Text style={{marginTop:hp(1),color:'gray'}}>有2个共同朋友</Text>
                    </View>
                    <View style={{width:wp(20),height:wp(8),backgroundColor:'#FF2875',display:'flex',justifyContent:'center',alignItems:'center',marginHorizontal:hp(1.5),borderRadius:5}}>
                        <Text style={{color:'white'}}>回关</Text>
                    </View>
                    <View style={{marginRight:15}}>
                        <Evillcons name='close' size={hp(3.5)}></Evillcons>
                    </View>
                </View>
        </ScrollView>

    </View>
  )
}

export default NewFriend

const styles = StyleSheet.create({})