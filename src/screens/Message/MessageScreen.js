import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text, Pressable } from 'react-native';
import Video from 'react-native-video';
import { Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useFocusEffect } from '@react-navigation/native';


const MessageScreen = ({ navigation }) => {
  const userData = [
    { id: 1, AvatarImage: require('../../assets/images/szlyw.jpeg'), userName:'@山中冷月微' },
    { id: 2,  AvatarImage: require('../../assets/images/yzw.jpeg'), userName:'@尹子维'},
    { id: 3, AvatarImage: require('../../assets/images/jh.jpeg'),userName:'@俊鸿'},
    { id: 4, AvatarImage: require('../../assets/images/cxldb.jpeg'), userName:'@陈翔六点半' },
    { id: 5, AvatarImage: require('../../assets/images/tcwldy.jpeg'), userName:'@桃厂网络电影'},
    { id: 6, AvatarImage: require('../../assets/images/szlyw.jpeg'), userName:'@山中冷月微' },
    { id: 7,  AvatarImage: require('../../assets/images/yzw.jpeg'), userName:'@尹子维'},
    { id: 8, AvatarImage: require('../../assets/images/jh.jpeg'),userName:'@俊鸿'},
    { id: 9, AvatarImage: require('../../assets/images/cxldb.jpeg'), userName:'@陈翔六点半' },
    { id: 10, AvatarImage: require('../../assets/images/tcwldy.jpeg'), userName:'@桃厂网络电影'},
  ];

  const renderTopItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.AvatarImage} style={styles.image} />
      <Text style={styles.name}>{item.userName}</Text>
    </View>
  );

  
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',width:'100%',height:60}}>
        <View style={styles.MessageTopIconContainer1}>
            <AntDesign name="pluscircleo" size={27} color="#000" />
        </View>

        <View style={{position:'absolute',width:'8%',left:'46%',top:12}}>
          <Image source={require('../../assets/images/camera.png')} style={{width:40,height:40}}></Image>
        </View>

        <View style={styles.MessageTopIconContainer2}>
            <AntDesign name="search1" size={27} color="#000" />
        </View>
      </View>
      
      <View style={{width:'auto',height:150,marginTop:8,marginBottom:0,paddingLeft:4}}>
      <FlatList
        data={userData}
        renderItem={renderTopItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      </View>
      
      <View style={{width:'100%',height:90,marginTop:-30,padding:10,flexDirection:'row',}}>
          <Image source={require('../../assets/images/friend.png')} style={{width:70,height:70,}}></Image>
          <View style={{flex:1,flexDirection:'column',paddingTop:12,left:10}}>
              <Text style={{color:'#000',fontSize:16}}>新朋友</Text>
              <Text style={{fontSize:13,marginTop:4}}>没有新消息</Text>
              <AntDesign name="right" size={15} color={"#707070"} style={{position:'absolute',right:20,top:'46%'}}/>
          </View>
      </View>

      <View style={{width:'100%',height:90,marginTop:2,padding:10,flexDirection:'row',}}>
          <Image source={require('../../assets/images/interact.png')} style={{width:64,height:64,left:2}}></Image>
          <View style={{flex:1,flexDirection:'column',paddingTop:10,left:14}}>
              <Text style={{color:'#000',fontSize:16}}>互动消息</Text>
              <Text style={{fontSize:13,marginTop:4}}>1.1.1 赞了你的评论</Text>
              <AntDesign name="right" size={15} color={"#707070"} style={{position:'absolute',right:24,top:'46%'}}/>
          </View>
      </View>

      <View style={{width:'100%',height:90,marginTop:2,padding:10,flexDirection:'row',}}>
          <Image source={require('../../assets/images/shopping.png')} style={{width:72,height:72,left:-2}}></Image>
          <View style={{flex:1,flexDirection:'column',paddingTop:12,left:6}}>
              <Text style={{color:'#000',fontSize:16}}>购物消息</Text>
              <Text style={{fontSize:13,marginTop:4}}>BUV官方旗舰店回复</Text>
              <AntDesign name="right" size={15} color={"#707070"} style={{position:'absolute',right:16,top:'46%'}}/>
          </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MessageTopIconContainer1: {
    position:'absolute',
    top: 5,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    left: '2%',
  },
  MessageTopIconContainer2: {
    position:'absolute',
    top: 5,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    right: '2%'
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  item: {
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  name: {
    marginTop: 5,
    textAlign: 'center',
    color: '#000'
  },
});

export default MessageScreen;
