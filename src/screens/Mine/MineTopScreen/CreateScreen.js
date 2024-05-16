import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text, Dimensions, ScrollView, Pressable } from 'react-native';
import { Video } from 'react-native-video';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const screenWidth = Dimensions.get('window').width

const videos = [
  { id: 1, videoUrl: require('../../../assets/video/demo1.mp4'), AvatarImage: require('../../../assets/images/szlyw.jpeg'), like: 1901, comment: 132, collect: 825, share: 425, userName:'@山中冷月微',videoText: '去读博吧,会拥有光明未来的!#读博的日子#研究生#论文',thumbnail:require('../../../assets/images/demo1_preview.png') },
    { id: 2, videoUrl: require('../../../assets/video/demo2.mp4'), AvatarImage: require('../../../assets/images/yzw.jpeg'), like: 219, comment: 132, collect: 825, share: 425, userName:'@尹子维',videoText: '彩蛋的他终于承认了…他是恋爱脑……#尹子维徐冬冬和她的日记 #徐冬冬 #心动种草指南',thumbnail:require('../../../assets/images/demo2_preview.png') },
    { id: 3, videoUrl: require('../../../assets/video/demo1.mp4'), AvatarImage: require('../../../assets/images/jh.jpeg'), like: 3319, comment: 132, collect: 825, share: 425, userName:'@俊鸿',videoText: '方方面我都比你强，你拿什么跟我打?—加Ace3V #Turbo3' ,thumbnail:require('../../../assets/images/demo3_preview.png')},
    { id: 4, videoUrl: require('../../../assets/video/demo4.mp4'), AvatarImage: require('../../../assets/images/cxldb.jpeg'), like: 2119, comment: 132, collect: 825, share: 425, userName:'@陈翔六点半',videoText: '对老板贴脸开大，我真不是故意的#职场那些事#走别人的路让别人无路可走',thumbnail:require('../../../assets/images/demo4_preview.png') },
    { id: 5, videoUrl: require('../../../assets/video/demo5.mp4'), AvatarImage: require('../../../assets/images/tcwldy.jpeg'), like: 4219, comment: 132, collect: 825, share: 425, userName:'@桃厂网络电影',videoText: '这白月光的杀伤力也太大了吧#城中之城#城中之城人性量心尺#隆妮#于和伟',thumbnail:require('../../../assets/images/demo5_preview.png' )},
    { id: 6, videoUrl: require('../../../assets/video/demo3.mp4'), AvatarImage: require('../../../assets/images/szlyw.jpeg'), like: 1901, comment: 132, collect: 825, share: 425, userName:'@山中冷月微',videoText: '去读博吧,会拥有光明未来的!#读博的日子#研究生#论文',thumbnail:require('../../../assets/images/demo1_preview.png') },
    { id: 7, videoUrl: require('../../../assets/video/demo2.mp4'), AvatarImage: require('../../../assets/images/yzw.jpeg'), like: 219, comment: 132, collect: 825, share: 425, userName:'@尹子维',videoText: '彩蛋的他终于承认了…他是恋爱脑……#尹子维徐冬冬和她的日记 #徐冬冬 #心动种草指南',thumbnail:require('../../../assets/images/demo2_preview.png') },
    { id: 8, videoUrl: require('../../../assets/video/demo1.mp4'), AvatarImage: require('../../../assets/images/jh.jpeg'), like: 3319, comment: 132, collect: 825, share: 425, userName:'@俊鸿',videoText: '方方面我都比你强，你拿什么跟我打?—加Ace3V #Turbo3' ,thumbnail:require('../../../assets/images/demo3_preview.png')},
    { id: 9, videoUrl: require('../../../assets/video/demo4.mp4'), AvatarImage: require('../../../assets/images/cxldb.jpeg'), like: 2119, comment: 132, collect: 825, share: 425, userName:'@陈翔六点半',videoText: '对老板贴脸开大，我真不是故意的#职场那些事#走别人的路让别人无路可走',thumbnail:require('../../../assets/images/demo4_preview.png') },
    { id: 10, videoUrl: require('../../../assets/video/demo5.mp4'), AvatarImage: require('../../../assets/images/tcwldy.jpeg'), like: 4219, comment: 132, collect: 825, share: 425, userName:'@桃厂网络电影',videoText: '这白月光的杀伤力也太大了吧#城中之城#城中之城人性量心尺#隆妮#于和伟',thumbnail:require('../../../assets/images/demo5_preview.png' )},
  // Add more video objects as needed
];

const CreateScreen = ({navigation, currenIndex}) => {

  const renderVideoPreview = ({ item }) => (
    <Pressable style={{width:'33%',margin:1}}  onPress={() => navigation.navigate('作品视频', { videoId: item.id })}>
      <Image source={item.thumbnail } style={{height:200,width:'100%'}}/>
    </Pressable>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={{width:'100%',height:'auto'}}>
      <FlatList
        data={videos}
        renderItem={renderVideoPreview}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        horizontal={false}
        style={{marginTop:6,marginVertical:20}}
      />   
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>暂时没有更多了</Text>
      </View>
    </ScrollView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  footer: {
    position: 'relative',
  },
  footerText: {
    fontSize: 16,
    textAlign:'center',
    color: '#999',
  },
});
