import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Video from 'react-native-video';
import { Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PagerView from 'react-native-pager-view';
import { Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/core';


const windowHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;

const CreateVideoList = ({ navigation }) => {
  const [currentVideoIndex_recom, setCurrentVideoIndex_recom] = useState(0);
  const videoListRef_recom = useRef(null);
  const [paused_recom, setPaused_recom] = useState(true);
  const [liked, setLiked] = useState(false);
  const [initialPage, setInitialPage] = useState(0);
  const [key, setKey] = useState(null);
  const handleLikePress = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    return () => {
      setPaused_recom(true);
        setKey(null)
    };
  }, []);

  useEffect(() => {
    setInitialPage(videoId - 1); // 监听 videoId 的变化并更新 initialPage
  }, [videoId]);


  useFocusEffect(
    React.useCallback(() => {
      setPaused_recom(false);
      setKey(Date.now().toString());
      return () => {
        setPaused_recom(true);
        setKey(null)
      };
    }, [])
  );

  const videos = [
    { id: 1, uri: require('../../../assets/video/demo3.mp4'), AvatarImage: require('../../../assets/images/szlyw.jpeg'), like: 1901, comment: 132, collect: 825, share: 425, userName:'@山中冷月微',videoText: '去读博吧,会拥有光明未来的!#读博的日子#研究生#论文',bgcolor:'#000' },
    { id: 2, uri: require('../../../assets/video/demo2.mp4'), AvatarImage: require('../../../assets/images/yzw.jpeg'), like: 219, comment: 132, collect: 825, share: 425, userName:'@尹子维',videoText: '彩蛋的他终于承认了…他是恋爱脑……#尹子维徐冬冬和她的日记 #徐冬冬 #心动种草指南',bgcolor:'#000' },
    { id: 3, uri: require('../../../assets/video/demo1.mp4'), AvatarImage: require('../../../assets/images/jh.jpeg'), like: 3319, comment: 132, collect: 825, share: 425, userName:'@俊鸿',videoText: '方方面我都比你强，你拿什么跟我打?—加Ace3V #Turbo3',bgcolor:'#000' },
    { id: 4, uri: require('../../../assets/video/demo4.mp4'), AvatarImage: require('../../../assets/images/cxldb.jpeg'), like: 2119, comment: 132, collect: 825, share: 425, userName:'@陈翔六点半',videoText: '对老板贴脸开大，我真不是故意的#职场那些事#走别人的路让别人无路可走',bgcolor:'#000' },
    { id: 5, uri: require('../../../assets/video/demo5.mp4'), AvatarImage: require('../../../assets/images/tcwldy.jpeg'), like: 4219, comment: 132, collect: 825, share: 425, userName:'@桃厂网络电影',videoText: '这白月光的杀伤力也太大了吧#城中之城#城中之城人性量心尺#隆妮#于和伟',bgcolor:'#000' },
    // 添加更多视频...
  ];

  const togglePause_recommend = () => {
    setPaused_recom(!paused_recom);
    console.log(videoId)
  };
  const onPageSelected = (event) => {
    setCurrentVideoIndex_recom(event.nativeEvent.position);
  };

  const route = useRoute();
  const { videoId } = route.params;
  const video = videos.find((item) => item.id === videoId);

  return (
    <PagerView
      style={{ flex: 1, backgroundColor: 'black' }}
      orientation={'vertical'}
      scrollEnabled={true}
      initialPage={videoId-1}
      onPageSelected={onPageSelected}
      key={key}
    >
      {videos.map((el, index) => (
        <Pressable key={el.id} style={{ backgroundColor: 'black' }} onPress={() => togglePause_recommend()}>
          <Video
            style={{ width: '100%', height: '100%' }}
            source={el.uri}
            controls={false}
            fullscreen={false}
            repeat={true}
            resizeMode="contain"
            paused={index !== currentVideoIndex_recom || paused_recom}
            ref={videoListRef_recom}
            onLoadStart={() => {
              setCurrentVideoIndex_recom(index);
            }}
          />
            <View style={{position:'absolute',left:wp(5),top:hp(3)}}>
            <AntDesign name="left" size={wp(5)} style={{}} color={'white'} onPress={() => navigation.goBack()}></AntDesign>
            </View>

            <View style={{position:'absolute',right:wp(5),top:hp(3)}}>
            <AntDesign name="search1" size={wp(5)} style={{}} color={'white'} onPress={() => navigation.navigate('搜索')}></AntDesign>
            </View>


          <View style={styles.avatarContainer}>
            <Image source={el.AvatarImage} style={styles.avatar} />
          </View>

          <Pressable style={styles.likeContainer} onPress={handleLikePress}>
            <AntDesign name="heart" size={30} color={liked ? '#FF0084' : 'white'} />
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

          {paused_recom && (
            <View style={styles.pauseIconContainer}>
              <AntDesign name="pause" size={70} color="white" />
            </View>
          )}

          <View style={styles.avatarContainer2}>
            <Image source={el.AvatarImage} style={styles.avatar2} />
          </View>

          <View style={{ flex: 1, position: 'absolute', zIndex: 2, left: hp(1.5), justifyContent: 'flex-end', width: '75%', bottom: hp(8) }}>
            <Text style={{ fontSize: hp(2), color: 'white', fontWeight: 'bold' }}>
              {el.userName}
            </Text>
            <Text style={{ fontSize: hp(1.8), color: 'white' }}>{el.videoText}</Text>
          </View>
          <View style={{height:hp(8),width:'100%',backgroundColor:'#000',position:'absolute',bottom:0}}>
            <Text style={{color:'#ccc',fontSize:hp(2),left:hp(2),top:hp(3)}}>1.1w浏览</Text>
            <Pressable style={{width:wp(20),height:hp(4),backgroundColor:'#4B4B4B',borderRadius:25,display:'flex',justifyContent:'center',alignItems:'center',right:wp(5),position:'absolute',top:hp(2)}}>
                <Text style={{color:'white'}}>公开可见</Text>
            </Pressable>
          </View>
        </Pressable>
      ))}
      
    </PagerView>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    position: 'absolute',
    right: wp(2),
    bottom: hp(46),
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
    bottom: hp(39),
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
    bottom: hp(32),
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
    bottom: hp(18),
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
    bottom: hp(25),
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
    left: '42%',
    top: '42%',
  },
  avatarContainer2: {
    position: 'absolute',
    right: wp(3),
    bottom: hp(10),
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
});

export default CreateVideoList;
