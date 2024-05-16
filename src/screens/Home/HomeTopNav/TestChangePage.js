import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Pressable, Animated, ScrollView, FlatList, Modal, TextInput,PanResponder,  Dimensions, Image } from 'react-native';
import Video from 'react-native-video';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PagerView from 'react-native-pager-view';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ProfileScreen from './ProfileScreen';
import Feather from 'react-native-vector-icons/Feather'
const windowHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;
const { width } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;

const TestChange = ({ navigation }) => {
  const [currentVideoIndex_recom, setCurrentVideoIndex_recom] = useState(0);
  const videoListRef_recom = useRef(null);
  const [paused_recom, setPaused_recom] = useState(false);
  const [liked, setLiked] = useState(false);
  const [ visible,setVisible] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const translateX = useRef(new Animated.Value(screenWidth)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        console.log('手势移动中');
        Animated.event([null, { dx: translateX }])(event, gestureState);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dx < -wp(50)) {
          // 如果拖拽超过一半就全部显示
          console.log('超过一半了')
          Animated.timing(translateX, {
            toValue: -wp(100),
            duration: 300,
            useNativeDriver: false,
          }).start();
        } else {
          // 不到一半就弹回去
          console.log('没超过一半')
          Animated.timing(translateX, {
            toValue: wp(0),
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;
  useEffect(() => {
    return () => {
      setPaused_recom(true);
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setPaused_recom(false);
      return () => {
        setPaused_recom(true);
      };
    }, [])
  );

  const videos = [
    { id: 1, uri: require('../../../assets/video/demo3.mp4'), AvatarImage: require('../../../assets/images/szlyw.jpeg'), like: 1901, comment: 132, collect: 825, share: 425, userName:'@山中冷月微',videoText: '去读博吧,会拥有光明未来的!#读博的日子#研究生#论文',bgcolor:'#000',comments: [
      { id: 1, commenter: '冒冒虫', CommenterAvatarImg:require('../../../assets/images/user/mmc.jpeg'),commentText: '姐姐好可爱呀',replies: [
        { id: 1, replier: 'MangeL.',AvatarImage:require('../../../assets/images/user/MangeL.jpeg'), replyText: '博士都这样 那我呢 哭了' },
        { id: 2, replier: '儿大有福ᴶᵃʸ',AvatarImage:require('../../../assets/images/user/edyf.jpeg'), replyText: '给我100 我情绪稳定 我不会哭[比心]' },
        // 添加更多回复...
      ] },
      { id: 2, commenter: '甜瓜瓜甜', CommenterAvatarImg:require('../../../assets/images/user/tggt.jpeg'), commentText: '姐姐好可爱呀哈哈哈',replies: [
        { id: 1, replier: 'MangeL.',AvatarImage:require('../../../assets/images/user/MangeL.jpeg'), replyText: '博士都这样 那我呢 哭了' },
        { id: 2, replier: '儿大有福ᴶᵃʸ',AvatarImage:require('../../../assets/images/user/edyf.jpeg'), replyText: '好了，已经开E了' },
        // 添加更多回复...
      ] },
      { id: 3, commenter: '甜瓜瓜不甜', CommenterAvatarImg:require('../../../assets/images/user/tggt.jpeg'), commentText: '姐姐好可爱呀哈哈哈',replies: [
        { id: 1, replier: 'MangeL.',AvatarImage:require('../../../assets/images/user/MangeL.jpeg'), replyText: '博士都这样 那我呢 哭了' },
        { id: 2, replier: '儿大有福ᴶᵃʸ',AvatarImage:require('../../../assets/images/user/edyf.jpeg'), replyText: '好了，已经开E了' },
        // 添加更多回复...
      ] },
      // 添加更多评论...
    ]  },
    
    { id: 2, uri: require('../../../assets/video/demo2.mp4'), AvatarImage: require('../../../assets/images/yzw.jpeg'), like: 219, comment: 132, collect: 825, share: 425, userName:'@尹子维',videoText: '彩蛋的他终于承认了…他是恋爱脑……#尹子维徐冬冬和她的日记 #徐冬冬 #心动种草指南',bgcolor:'#000',comments: [
      { id: 1, commenter: '落 俗', CommenterAvatarImg:require('../../../assets/images/szlyw.jpeg'),commentText: '姐姐好可爱呀',replies: [
        { id: 1, replier: '@用户2',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第一个回复' },
        { id: 2, replier: '@用户3',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第二个回复' },
        // 添加更多回复...
      ] },
      { id: 2, commenter: '落ds 俗', commentText: '姐姐好可爱呀',replies: [
        { id: 1, replier: '@用户2',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第一个回复' },
        { id: 2, replier: '@用户3',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第二个回复' },
        // 添加更多回复...
      ] },
      // 添加更多评论...
    ]  },
    
    { id: 3, uri: require('../../../assets/video/demo1.mp4'), AvatarImage: require('../../../assets/images/jh.jpeg'), like: 3319, comment: 132, collect: 825, share: 425, userName:'@俊鸿',videoText: '方方面我都比你强，你拿什么跟我打?—加Ace3V #Turbo3',bgcolor:'#000',comments: [
      { id: 1, commenter: '落 俗', CommenterAvatarImg:require('../../../assets/images/szlyw.jpeg'),commentText: '姐姐好可爱呀',replies: [
        { id: 1, replier: '@用户2',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第一个回复' },
        { id: 2, replier: '@用户3',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第二个回复' },
        // 添加更多回复...
      ] },
      { id: 2, commenter: '落ds 俗', commentText: '姐姐好可爱呀',replies: [
        { id: 1, replier: '@用户2',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第一个回复' },
        { id: 2, replier: '@用户3',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第二个回复' },
        // 添加更多回复...
      ] },
      // 添加更多评论...
    ]  },
    
    { id: 4, uri: require('../../../assets/video/demo4.mp4'), AvatarImage: require('../../../assets/images/cxldb.jpeg'), like: 2119, comment: 132, collect: 825, share: 425, userName:'@陈翔六点半',videoText: '对老板贴脸开大，我真不是故意的#职场那些事#走别人的路让别人无路可走',bgcolor:'#000',comments: [
      { id: 1, commenter: '落 俗', CommenterAvatarImg:require('../../../assets/images/szlyw.jpeg'),commentText: '姐姐好可爱呀',replies: [
        { id: 1, replier: '山中冷月微',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第一个回复' },
        { id: 2, replier: '俊鸿',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第二个回复' },
        // 添加更多回复...
      ] },
      { id: 2, commenter: 'AE86翻车员', commentText: '是这样的啦，习惯就好了',replies: [
        { id: 1, replier: '@用户2',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第一个回复' },
        { id: 2, replier: '@用户3',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第二个回复' },
        // 添加更多回复...
      ] },
      // 添加更多评论...
    ] },
    
    { id: 5, uri: require('../../../assets/video/demo5.mp4'), AvatarImage: require('../../../assets/images/tcwldy.jpeg'), like: 4219, comment: 132, collect: 825, share: 425, userName:'@桃厂网络电影',videoText: '这白月光的杀伤力也太大了吧#城中之城#城中之城人性量心尺#隆妮#于和伟',bgcolor:'#000',comments: [
      { id: 1, commenter: '落 俗', CommenterAvatarImg:require('../../../assets/images/szlyw.jpeg'),commentText: '姐姐好可爱呀',replies: [
        { id: 1, replier: '@用户2',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第一个回复' },
        { id: 2, replier: '@用户3',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第二个回复' },
        // 添加更多回复...
      ] },
      { id: 2, commenter: '落ds 俗', commentText: '姐姐好可爱呀',replies: [
        { id: 1, replier: '@用户2',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第一个回复' },
        { id: 2, replier: '@用户3',AvatarImage:require('../../../assets/images/szlyw.jpeg'), replyText: '这是第二个回复' },
        // 添加更多回复...
      ] },
      // 添加更多评论...
    ] },
    // 添加更多视频...
  ];


  const onPageSelected = (event) => {
    setCurrentVideoIndex_recom(event.nativeEvent.position);
  };


  return (
    <PagerView
      style={{ flex: 1, backgroundColor: 'black' }}
      orientation={'vertical'}
      scrollEnabled={true}
      initialPage={0}
      onPageSelected={onPageSelected}
    >
      {videos.map((el, index) => (
          
        <Pressable key={el.id} style={{ backgroundColor: 'black',flex:1 }}>
          <Video
          {...panResponder.panHandlers}
            style={{ flex:1 }}
            source={el.uri}
            controls={false}
            fullscreen={false}
            repeat={true}
            resizeMode="contain"
            ref={videoListRef_recom}
            onLoadStart={() => {
              setCurrentVideoIndex_recom(index);
            }}
          />

<Animated.View
            style={[
              styles.profileContainer,
              {
                transform: [{ translateX: translateX }],
              },
            ]}
            
          >
            <Text>d大家好的设计交底扫</Text>

          </Animated.View>

        </Pressable>
      ))}
    </PagerView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: wp(100), // 将初始位置设置为屏幕内部
    width: wp(100),
    backgroundColor: 'white',
  },
});

export default TestChange;
