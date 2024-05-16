import { ImageBackground, StyleSheet, Text, View, Image, ScrollView, Animated} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useState, useEffect } from 'react'

const EditMessage = ({navigation}) => {
    const [slideAnim] = useState(new Animated.Value(wp('100%'))); // 滑动动画
  
    // 左滑进场动画
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

      
  return (
    <Animated.View style={{ width: '100%', height: '100%', transform: [{ translateX: slideAnim }]}}>
        <ScrollView style={{height:'100%',width:'100%'}}>
            <View style={{position:'absolute',width:50,height:50,zIndex:2,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:15,marginTop:15}}>
                <AntDesign name="left" size={30} color={'white'} onPress={() => navigation.goBack()}></AntDesign>
            </View>
            <View style={{position:'absolute',width:50,height:50,zIndex:2,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:15,marginTop:15,borderRadius:50,backgroundColor:'#000',opacity:0.3,zIndex:1}}>
            </View>

            {/* 背景图片 */}
            <View>
            <ImageBackground source={require('../../assets/images/TopNavBarBG.png')} style={{width:'100%',height:250}}>
                <View style={{paddingTop:80,paddingLeft:20,flexDirection:'row'}}>
                </View>
                </ImageBackground>
                
            </View>

            <View style={{backgroundColor:'white',borderRadius:20,top:-10,width:'100%',flex:1,display:'flex',alignItems:'center',height:'auto'}}>
                <Image source={require('../../assets/images/wlgcz.jpg')} style={{width:150,height:150,borderRadius:150,borderWidth:2,borderColor:'white',top:-75}}></Image>
                <View style={{width:150,height:150,borderRadius:150,borderWidth:2,borderColor:'white',top:-225,backgroundColor:'#000',opacity:0.5}}>
                </View>
                
                <AntDesign name='camera' color={'white'} size={45} style={{position:'absolute',top:-40}}></AntDesign>
                
                <Text style={{position:'absolute',top:15,color:'white',fontSize:17}}>更换头像</Text>
            
                <View style={{position:'absolute',flexDirection:'row',right:115}}>
                    <AntDesign name='check' size={20} style={{top:15,right:20}}></AntDesign>
                    <Text style={{position:'absolute',top:15,fontSize:13}}>资料完成度 100%</Text>
                </View>

                <View style={{width:'100%',height:hp(40),top:-220}}>
                    <View style={{width:'100%',height:hp(3),flexDirection:'row',marginTop:20,paddingLeft:15,display:'flex',alignItems:'center'}}>
                        <Text style={{flex:2,color:'gray',fontSize:16}}>名字</Text>
                        <Text style={{flex:5,color:'#000',fontSize:16}}>平凡的coder</Text>
                        <AntDesign name="right" style={{flex:1}} size={15}></AntDesign>
                    </View>

                    <View style={{width:'100%',height:hp(3),flexDirection:'row',marginTop:20,paddingLeft:15,display:'flex',alignItems:'center'}}>
                        <Text style={{flex:2,color:'gray',fontSize:16}}>官方认证</Text>
                        <Text style={{flex:5,color:'#ccc',fontSize:16}}>个人、企业机构的账号认证</Text>
                        <AntDesign name="right" style={{flex:1}} size={15}></AntDesign>
                    </View>

                    <View style={{width:'100%',height:hp(3),flexDirection:'row',marginTop:20,paddingLeft:15,display:'flex',alignItems:'center'}}>
                        <Text style={{flex:2,color:'gray',fontSize:16}}>简介</Text>
                        <Text style={{flex:5,color:'#000',fontSize:16}}>学无止境，沉淀沉淀</Text>
                        <AntDesign name="right" style={{flex:1}} size={15}></AntDesign>
                    </View>

                    <View style={{width:'100%',height:hp(3),flexDirection:'row',marginTop:20,paddingLeft:15,display:'flex',alignItems:'center'}}>
                        <Text style={{flex:2,color:'gray',fontSize:16}}>性别</Text>
                        <Text style={{flex:5,color:'#000',fontSize:16}}>男</Text>
                        <AntDesign name="right" style={{flex:1}} size={15}></AntDesign>
                    </View>

                    <View style={{width:'100%',height:hp(3),flexDirection:'row',marginTop:20,paddingLeft:15,display:'flex',alignItems:'center'}}>
                        <Text style={{flex:2,color:'gray',fontSize:16}}>生日</Text>
                        <Text style={{flex:5,color:'#000',fontSize:16}}>不展示</Text>
                        <AntDesign name="right" style={{flex:1}} size={15}></AntDesign>
                    </View>

                    <View style={{width:'100%',height:hp(3),flexDirection:'row',marginTop:20,paddingLeft:15,display:'flex',alignItems:'center'}}>
                        <Text style={{flex:2,color:'gray',fontSize:16}}>所在地</Text>
                        <Text style={{flex:5,color:'#000',fontSize:16}}>中国 · 广东 · 广州</Text>
                        <AntDesign name="right" style={{flex:1}} size={15}></AntDesign>
                    </View>

                    <View style={{width:'100%',height:hp(3),flexDirection:'row',marginTop:20,paddingLeft:15,display:'flex',alignItems:'center'}}>
                        <Text style={{flex:2,color:'gray',fontSize:16}}>学校</Text>
                        <Text style={{flex:5,color:'#000',fontSize:16}}>广州南方学院</Text>
                        <AntDesign name="right" style={{flex:1}} size={15}></AntDesign>
                    </View>

                    <View style={{width:'100%',height:hp(3),flexDirection:'row',marginTop:20,paddingLeft:15,display:'flex',alignItems:'center'}}>
                        <Text style={{flex:2,color:'gray',fontSize:16}}>抖音号</Text>
                        <Text style={{flex:5,color:'#000',fontSize:16}}>wuai566</Text>
                        <AntDesign name="right" style={{flex:1}} size={15}></AntDesign>
                    </View>

                    <View style={{width:'100%',height:6,backgroundColor:'#F1F1F1',marginTop:15,marginBottom:15}}></View>

                    <View style={{width:'100%',height:hp(3),flexDirection:'row',marginTop:20,paddingLeft:15,display:'flex',alignItems:'center'}}>
                        <Text style={{flex:2,color:'gray',fontSize:16}}>挂件中心</Text>
                        <Text style={{flex:5,color:'#ccc',fontSize:16}}>管理头像挂件</Text>
                        <AntDesign name="right" style={{flex:1}} size={15}></AntDesign>
                    </View>

                    <View style={{width:'100%',height:6,backgroundColor:'#F1F1F1',marginTop:25,marginBottom:15}}></View>

                    <View style={{width:'100%',height:hp(3),flexDirection:'row',marginTop:20,paddingLeft:15,display:'flex',alignItems:'center'}}>
                        <Text style={{flex:2,color:'gray',fontSize:16}}>编辑服务</Text>
                        <Text style={{flex:5,color:'#ccc',fontSize:16}}>商品橱窗、直播动态、抖音···</Text>
                        <AntDesign name="right" style={{flex:1}} size={15}></AntDesign>
                    </View>


                </View>
            </View>

        
        </ScrollView>
    </Animated.View>
  )
}

export default EditMessage

const styles = StyleSheet.create({})