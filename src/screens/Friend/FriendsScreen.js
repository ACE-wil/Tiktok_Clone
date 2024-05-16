import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Text, Pressable, Touchable, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BottomNavigation } from 'react-native-paper';
import PagerView from 'react-native-pager-view';


const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FriendsScreen = ({ navigation }) => {
  const [currentVideoIndex_Friends, setCurrentVideoIndex_Friends] = useState(0);
  const videoListRef_Friends = useRef(null);
  const [paused_Friends, setPaused_Friends] = useState(true);
  const [liked, setLiked] = useState(false);

  const handleLikePress = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    return () => {
      // 组件卸载时停止视频播放
      setPaused_Friends(true);
      
      // videoListRef_Friends.current.pause();
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // 页面获取焦点时播放视频
      setPaused_Friends(false);
      return () => {
        // 页面失去焦点时停止视频播放
        setPaused_Friends(true);
      };
    }, [])
  );

  const togglePause_Friends = () => {

    setPaused_Friends(!paused_Friends);
  };

  const videosFriends = [
    { id: 1, uri: require('../../assets/video/demo3.mp4'), AvatarImage: require('../../assets/images/szlyw.jpeg'), like: 1901, comment: 132, collect: 825, share: 425, userName:'@山中冷月微',videoText: '去读博吧,会拥有光明未来的!#读博的日子#研究生#论文',bgcolor:'yellow' },
    { id: 2, uri: require('../../assets/video/demo2.mp4'), AvatarImage: require('../../assets/images/yzw.jpeg'), like: 219, comment: 132, collect: 825, share: 425, userName:'@尹子维',videoText: '彩蛋的他终于承认了…他是恋爱脑……#尹子维徐冬冬和她的日记 #徐冬冬 #心动种草指南',bgcolor:'green'  },
    { id: 3, uri: require('../../assets/video/demo1.mp4'), AvatarImage: require('../../assets/images/jh.jpeg'), like: 3319, comment: 132, collect: 825, share: 425, userName:'@俊鸿',videoText: '方方面我都比你强，你拿什么跟我打?—加Ace3V #Turbo3',bgcolor:'red'  },
    { id: 4, uri: require('../../assets/video/demo4.mp4'), AvatarImage: require('../../assets/images/cxldb.jpeg'), like: 2119, comment: 132, collect: 825, share: 425, userName:'@陈翔六点半',videoText: '对老板贴脸开大，我真不是故意的#职场那些事#走别人的路让别人无路可走',bgcolor:'#000'  },
    { id: 5, uri: require('../../assets/video/demo5.mp4'), AvatarImage: require('../../assets/images/tcwldy.jpeg'), like: 4219, comment: 132, collect: 825, share: 425, userName:'@桃厂网络电影',videoText: '这白月光的杀伤力也太大了吧#城中之城#城中之城人性量心尺#隆妮#于和伟',bgcolor:'#000' },
    // 添加更多视频...
  ];

  return (
    <PagerView
      style={{flex:1,backgroundColor:'black'}}
      orientation={'vertical'}
      scrollEnabled={true}
      initialPage={1}
    >
      {videosFriends.map((el,index) => (
        <Pressable key={el.id} style={{backgroundColor:'black'}} onPress={() => togglePause_Friends()}>
          <Video
            style={{width:'100%',height:'100%'}}
            source={el.uri}
            controls={false}
            fullscreen={false}
            repeat={true}
            resizeMode="contain"
            paused={index !== currentVideoIndex_Friends || paused_Friends}
            ref={videoListRef_Friends}
            onLoadStart={() => {
              setCurrentVideoIndex_Friends(index);
            }}
          >
          </Video>
          <View style={styles.FriendsTopIconContainer1}>
            <AntDesign name="user" size={27} color="white" />
          </View>

          <View style={styles.avatarContainer_top}>
          <Image source={el.AvatarImage} style={styles.avatar_top} />
          <Text style={{color:'white',position:'absolute',left:45,lineHeight:35,fontSize:17}}>1个密友时刻</Text>
          </View>

          <View style={styles.FriendsTopIconContainer2}>
            <AntDesign name="search1" size={27} color="white" />
          </View>
        <View style={styles.avatarContainer}>
          <Image source={el.AvatarImage} style={styles.avatar} />
        </View>
        <Pressable style={styles.likeContainer} onPress={handleLikePress}>
        <AntDesign name="heart" size={30} color={liked ? '#E565D3' : 'white'} />
          <Text style={styles.like}>{el.like}</Text>
        </Pressable>
        <View style={styles.commentContainer}>
          <FontAwesome5 name="comment-dots" size={30} color={'white'} />
          <Text style={styles.comment}>{el.comment}</Text>
        </View>
        <View style={styles.collectContainer}>
          <AntDesign name="star" size={30} color={'white'} />
          <Text style={styles.collect}>{el.collect}</Text>
        </View>
        <View style={styles.shareContainer}>
          <AntDesign name="sharealt" size={30} color={'white'} />
          <Text style={styles.share}>{el.share}</Text>
        </View>
        {paused_Friends  && (
          <View style={styles.pauseIconContainer}>
            <AntDesign name="pause" size={70} color="white" />
          </View>
          
        )}
        <View style={styles.avatarContainer2}>
          <Image source={el.AvatarImage} style={styles.avatar2} />
        </View>

        <View style={{width:wp(75),position:'absolute',zIndex:2,left:0,bottom:0,justifyContent:'flex-end',marginLeft:hp(1.5),paddingBottom:hp(0.5)}}>
            <Text style={{fontSize:hp(2),color:'white',fontWeight:'bold'}}>
              {el.userName}
              </Text>
              <Text style={{fontSize:hp(1.8),color:'white'}}>{el.videoText}</Text>
        </View>

      </Pressable>
      ))}

    </PagerView>
  );
};

const styles = StyleSheet.create({
  FriendsTopIconContainer1: {
    position: 'absolute',
    top: hp(1),
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(10),
    height: wp(10),
    left: wp(3),
  },
  FriendsTopIconContainer2: {
    position: 'absolute',
    top: hp(1),
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(10),
    height: wp(10),
    right: wp(3),
  },
  avatarContainer: {
    position: 'absolute',
    right: wp(2),
    bottom:hp(38),
    zIndex: 2,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'white',
  },
  avatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: 50,
  },
  likeContainer: {
    position: 'absolute',
    bottom:hp(31),
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(10),
    height: wp(10),
    right: wp(3),
  },
  like: {
    color: 'white',
  },
  commentContainer: {
    position: 'absolute',
    bottom:hp(24),
    zIndex: 2,
    justifyContent: 'center',
    width: wp(10),
    height: wp(10),
    right: wp(3),
    alignItems: 'center',
  },
  comment: {
    color: 'white',
  },
  collectContainer: {
    position: 'absolute',
    bottom:hp(17),
    zIndex: 2,
    justifyContent: 'center',
    width: wp(10),
    height: wp(10),
    right: wp(3),
    alignItems: 'center',
  },
  collect: {
    color: 'white',
  },
  shareContainer: {
    position: 'absolute',
    bottom:hp(10),
    zIndex: 2,
    justifyContent: 'center',
    width: wp(10),
    height: wp(10),
    right: wp(3),
    alignItems: 'center',
  },
  share: {
    color: 'white',
  },
  pauseIconContainer: {
    position: 'absolute',
    opacity: 0.6,
    zIndex: 2,
    left: '43%',
    top: '42%',
  },
  avatarContainer2: {
    position: 'absolute',
    right: wp(3),
    bottom:hp(2),
    zIndex: 2,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'white',
  },
  avatar2: {
    width: wp(9),
    height: wp(9),
    borderRadius: 50,
  },
  avatarContainer_top: {
    position:'absolute',
    left:'38%',
    top:'2%',
    flexDirection:'row',
    zIndex:2
  },
  avatar_top:{
    width:35,
    height:35,
    borderRadius:50
  }
 
});

export default FriendsScreen;
