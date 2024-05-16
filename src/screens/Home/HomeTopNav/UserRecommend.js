import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Pressable, Animated, ScrollView, FlatList, Modal, TextInput,Button, PanResponder,  Dimensions, Image,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Video from 'react-native-video';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PagerView from 'react-native-pager-view';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ProfileScreen from './ProfileScreen';
import Feather from 'react-native-vector-icons/Feather'

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../../redux_store/showBottomTabSlice';

  const windowHeight = Dimensions.get('window').height;
  const screenHeight = Dimensions.get('screen').height;
  const { width } = Dimensions.get('window');
  const screenWidth = Dimensions.get('window').width;

const UserRecommend = ({ navigation}) => {
  const [modalVisible, setModalVisible] = useState(false); // 分享弹窗
  const [currentVideoIndex_recom, setCurrentVideoIndex_recom] = useState(0); // 更新当前页
  const videoListRef_recom = useRef(null); // 引用视频
  const [liked, setLiked] = useState(false); // 点赞
  const [collected, setcollected] = useState(false); // 收藏
// 视频数据
  const [videos, setVideos] = useState([
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
  ]);

  // 用户数据
  const userData = [
    { id: 1, AvatarImage: require('../../../assets/images/szlyw.jpeg'), userName:'@山中冷月微' },
    { id: 2,  AvatarImage: require('../../../assets/images/yzw.jpeg'), userName:'@尹子维'},
    { id: 3, AvatarImage: require('../../../assets/images/jh.jpeg'),userName:'@俊鸿'},
    { id: 4, AvatarImage: require('../../../assets/images/cxldb.jpeg'), userName:'@陈翔六点半' },
    { id: 5, AvatarImage: require('../../../assets/images/tcwldy.jpeg'), userName:'@桃厂网络电影'},
    { id: 6, AvatarImage: require('../../../assets/images/szlyw.jpeg'), userName:'@山中冷月微' },
    { id: 7,  AvatarImage: require('../../../assets/images/yzw.jpeg'), userName:'@尹子维'},
    { id: 8, AvatarImage: require('../../../assets/images/jh.jpeg'),userName:'@俊鸿'},
    { id: 9, AvatarImage: require('../../../assets/images/cxldb.jpeg'), userName:'@陈翔六点半' },
    { id: 10, AvatarImage: require('../../../assets/images/tcwldy.jpeg'), userName:'@桃厂网络电影'},
  ];

  // 转发数据
  const shareData = [
    { id: 1, AvatarImage: require('../../../assets/images/home/userRecommend/share.png'), userName:'转发' },
    { id: 2,  AvatarImage: require('../../../assets/images/home/userRecommend/recommend.png'), userName:'推荐给朋友'},
    { id: 3, AvatarImage: require('../../../assets/images/home/userRecommend/link.png'),userName:'复制链接'},
    { id: 4, AvatarImage: require('../../../assets/images/home/userRecommend/camera.png'), userName:'合拍' },
    { id: 5, AvatarImage: require('../../../assets/images/home/userRecommend/hot.png'), userName:'帮上热门'},
    { id: 6, AvatarImage: require('../../../assets/images/home/userRecommend/report.png'), userName:'举报' },
  ];

  // 点击点赞按钮
  const handleLikePress = () => {
    setLiked(!liked);
  };
   
  // 点击收藏按钮
  const handleCollectPress = () => {
    setcollected(!collected)
  }

  // 进入组件或组件销毁时
  useEffect(() => {
    return () => {
    };
  }, []);
  
  // 聚焦时
  useFocusEffect(
    React.useCallback(() => {
      return () => {
      };
    }, [])
  );

  const initialToggleVideo_recom = Array.from({ length: videos.length }, () => ({ isPaused: false }));

  const [VideoPaused, setVideoPaused] = useState(initialToggleVideo_recom);  

  const toggleVideo_Paused = (index) => {  
    setVideoPaused((prevStates) => {  
      const newState = [...prevStates];  
      newState[index].isPaused = !newState[index].isPaused;  
      return newState;  
    });  
  };


// 切换评论区 
  const togglePause_recommend = () => {
    if(!showComment){ // 这里的showComment不是按布尔值来，而是按初始值false，所以!showComment就是true才会关闭评论区
      toggleComment()
      setbottomHeight(8);
    dispatch(decrement())
    }else{
      toggleVideo_Paused(currentVideoIndex_recom)
    }

  };

  // 更新当前页面索引
  const onPageSelected = (event) => {
    setCurrentVideoIndex_recom(event.nativeEvent.position);
  };

const [showComment, setShowComment] = useState(true); // 控制评论区切换
const [commentHeight] = useState(new Animated.Value(0)); // 控制评论区切换动画时评论区的高度

// 维护评论区独立状态

// const initialToggleComment = Array.from({ length: videos.length }, () => ({ isOpen: false }));
// const [CommentOpen, setCommentOpen] = useState(initialToggleComment); 
// const toggleComment_Open = (index) => {  
//   setCommentOpen((prevStates) => {  
//     const newCommentState = [...prevStates];  
//     newCommentState[index].isOpen = !newCommentState[index].isOpen;  
//     return newCommentState;  
//   });
// };


// 评论区切换动画
  const toggleComment = () => {
    Animated.timing(commentHeight, {
      toValue: showComment ? hp(60) : 0, // 控制评论区的高度
      duration: 500, // 动画持续时间
      useNativeDriver: false, // 在 Android 设备上使用 native driver 时可能会出现问题
    }).start();
    setShowComment(!showComment);
    setScrollEnableState(!scrollEnableState)
  };

  // 评论区内容
  const renderItem = ({item}) => (
      <Pressable key={item.id} style={{flexDirection:'column',marginTop:hp(1)}}>
        <View style={{flexDirection:'row',marginLeft:wp(2)}}>
          <Image source={item.CommenterAvatarImg} style={{width:wp(8),height:wp(8),borderRadius:50}}></Image>
            <View style={{flexDirection:'column',marginLeft:wp(2)}}>
              <Text style={{fontSize:hp(1.5),color:'#AFAFAF'}}>{item.commenter}</Text>
              <Text style={{marginTop:hp(0.5)}}>{item.commentText}</Text>
              <View style={{flexDirection:'row',width:wp(85)}}>
                <Text style={{marginTop:hp(0.5),fontSize:hp(1.5),color:'#ccc'}}>3分钟前 · 湖北</Text>
                <Text style={{fontSize:hp(1.5),color:'#777777',marginTop:hp(0.5),marginLeft:wp(2.5)}}>回复</Text>
                <View style={{position:'absolute',right:wp(5),marginTop:hp(0.5),}}>
                  <AntDesign name='hearto' size={wp(3)} color={'gray'}></AntDesign>
                </View>
              </View>
            </View>
        </View>
        {item.replies.map((reply, index) => (
          <View key={reply.id} style={{ marginLeft: wp(10),flexDirection:'row',marginTop:hp(1),marginBottom:hp(1) }}>
            <Image source={reply.AvatarImage} style={{width:wp(6),height:wp(6),borderRadius:50}}></Image>
              <View style={{flexDirection:'column',marginLeft:wp(1)}}>
                <Text style={{fontSize:hp(1.5),color:'#AFAFAF'}}>{reply.replier}</Text>
                <Text style={{marginTop:hp(0.5)}}>{reply.replyText}</Text>
                <View style={{flexDirection:'row',width:wp(80)}}>
                  <Text style={{marginTop:hp(0.5),fontSize:hp(1.5),color:'#ccc'}}>3分钟前 · 湖北</Text>
                  <Text style={{fontSize:hp(1.5),color:'#777777',marginTop:hp(0.5),marginLeft:wp(2.5)}}>回复</Text>
                  <View style={{position:'absolute',right:wp(5),marginTop:hp(0.5),}}>
                    <AntDesign name='hearto' size={wp(3)} color={'gray'}></AntDesign>
                  </View>
              </View>
              
              </View>
          </View>
        ))}
      </Pressable>
  );

  // 转发弹窗列表渲染内容
  const renderTopItem = ({ item }) => (
    <View style={[styles.item,{backgroundColor:'transparent'}]}>
      <Image source={item.AvatarImage} style={styles.image} />
      <Text style={styles.name}>{item.userName}</Text>
    </View>
  );

  // 发表评论功能
  const addComment = () => {
    const comment = {
      id: videos[currentVideoIndex_recom].comments.length + 1,
      commenter: '平凡的coder',
      CommenterAvatarImg: require('../../../assets/images/touxiang.png'),
      commentText: text,
      replies: [],
    };

    const updatedVideos = [...videos];
    updatedVideos[currentVideoIndex_recom].comments.push(comment);
    setText('');
    // Update the state with the new comment
    setVideos(updatedVideos);
  };
  const [text, setText] = useState(''); // 更新文本框文本，用于实时更新
  const dispatch = useDispatch(); // 使用redux的方法
  const [isInputFocused, setIsInputFocused] = useState(false); // 文本框是否聚焦
  const [scrollEnableState,setScrollEnableState] = useState(true) // 控制PagerView全局页面滚动
  const [bottomHeight,setbottomHeight] = useState(hp(8))

  // 文本框聚焦时
  const handleFocus = () => {
    setbottomHeight(0);
    dispatch(increment())
    setIsInputFocused(true);

  };

  // 文本框失焦时
  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <PagerView style={{flex:1}}>
    <PagerView
      style={{ flex: 1, backgroundColor: 'black' }}
      orientation={'vertical'} // 垂直翻页
      scrollEnabled={scrollEnableState}
      initialPage={0} // 初始页面为索引0
      onPageSelected={onPageSelected} // 更新当前页面索引
    >
      {videos.map((el, index) => (
        <PagerView key={el.id} style={{flex:1}} orientation={'horizontal'}>
        <Pressable style={{ backgroundColor: 'black',flex:1 }} onPress={() => {togglePause_recommend()}}>
          <Video
            style={{ flex:1}}
            source={el.uri}
            controls={false} // 是否显示控制条
            fullscreen={false} // 是否全屏
            repeat={true} // 是否重复播放
            resizeMode="contain" // 显示模式：适应容器
            paused={index !== currentVideoIndex_recom || VideoPaused[index].isPaused} // 如果当前视频索引跟索引不匹配就暂停
            ref={videoListRef_recom} // 视频引用
            onLoadStart={() => {
              setCurrentVideoIndex_recom(index);
            }} // 视频开始时更新索引

          />
   
            
    <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // iOS: 64 是导航栏高度
    >
      <Animated.View style={{height:commentHeight,width:'100%',backgroundColor:'white',borderTopLeftRadius:5,borderTopRightRadius:5,bottom:0}}>

        {/* 评论区顶部 */}
        <Pressable style={{width:'100%',flexDirection:'row',display:'flex',justifyContent:'center',alignItems:'center',height:hp(4)}}>
          <Text style={{textAlign:'center',marginTop:hp(1),height:hp(2)}}>{el.comment}条评论</Text>
          <EvilIcons name='close' size={25} style={{left:wp(30),top:hp(1)}} onPress={() => {toggleComment(),setbottomHeight(0);dispatch(decrement())}}></EvilIcons>
        </Pressable>
        
        {/* 评论区内容 */}
        <Pressable style={{height: hp(49), width: '100%', backgroundColor: 'white'}}>
            <FlatList
              style={{}}
              data={el.comments}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              nestedScrollEnabled={true}
            />
        </Pressable>
        
        {/* 文本框 */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="善语结善缘，恶语伤人心"
            value={text}
            onChangeText={setText}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <TouchableOpacity style={styles.sendButton} onPress={() => addComment()}>
            <Text style={styles.sendButtonText}>发送</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

    </KeyboardAvoidingView>

              
          {/* 头像 */}
          <View style={styles.avatarContainer}>
            <Image source={el.AvatarImage} style={styles.avatar} />
          </View>

          {/* 点赞按钮 */}
          <Pressable style={styles.likeContainer} onPress={handleLikePress}>
            <AntDesign name="heart" size={30} color={liked ? '#FF0084' : 'white'} />
            <Text style={styles.like}>{liked?el.like+1:el.like}</Text>
          </Pressable>

          {/* 评论按钮 */}
          <Pressable style={styles.commentContainer} onPress={() => {setbottomHeight(0);
            dispatch(increment()),toggleComment()}}>
            <FontAwesome5 name="comment-dots" size={30} color={'white'} />
            <Text style={styles.comment}>{el.comment}</Text>
          </Pressable>

          {/* 收藏按钮 */}
          <Pressable style={styles.collectContainer} onPress={handleCollectPress}>
            <AntDesign name="star" size={30} color={collected?'yellow':'white'} />
            <Text style={styles.collect}>{collected?el.collect+1:el.collect}</Text>
          </Pressable>

          {/* 转发按钮 */}
          <Pressable style={styles.shareContainer} onPress={() => setModalVisible(true)}>
            <AntDesign name="sharealt" size={30} color={'white'} />
            <Text style={styles.share}>{el.share}</Text>
          </Pressable>

          {/* 暂停时显示暂停图标 */}
          {VideoPaused[index].isPaused && (
            <View style={styles.pauseIconContainer}>
              <AntDesign name="pause" size={70} color="white" />
            </View>
          )}

          {/* 小头像 */}
          <View style={styles.avatarContainer2}>
            <Image source={el.AvatarImage} style={styles.avatar2} />
          </View>

          {/* 用户名以及视频文案 */}
          <View style={{ flex: 1, position: 'absolute', zIndex: 2, left: hp(1.5), justifyContent: 'flex-end', width: '75%', bottom:0}}>
            <Text style={{ fontSize: hp(2), color: 'white', fontWeight: 'bold' }}>
              {el.userName}
            </Text>
            <Text style={{ fontSize: hp(1.8), color: 'white' }}>{el.videoText}</Text>
          </View>
        </Pressable>
        </PagerView>
      ))}
      
      {/* 转发弹窗 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, padding: hp(1.5), width: '100%', height: '35%', alignItems: 'center' }}>
            <Pressable style={{width:'100%',height:hp(4),flexDirection:'row'}}>
              <Text style={{fontSize:hp(2)}}>分享给朋友</Text>
              <EvilIcons name='close' size={25} style={{position:'absolute',right:wp(2),borderRadius:50,backgroundColor:'#ECECEC',borderWidth:2,borderColor:'#ECECEC'}} onPress={() => setModalVisible(!modalVisible)}></EvilIcons>
            </Pressable>
            <View style={{width:'auto',height:100,marginTop:8,marginBottom:0,paddingLeft:4}}>
      <FlatList
        data={userData}
        renderItem={renderTopItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      </View>
      <View style={{width:'auto',height:100,marginTop:8,marginBottom:0,paddingLeft:4}}>
      <FlatList
        data={shareData}
        renderItem={renderTopItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      </View>


          </View>
        </View>
      </Modal>

    </PagerView>
        <ProfileScreen currenIndex={currentVideoIndex_recom} navigation={navigation}/>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    zIndex:4,
  },
  content: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    height:hp(6),
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    paddingHorizontal: wp(2),
    paddingTop:hp(1),
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: hp(5),
    borderColor: 'gray',
    backgroundColor:'#E5E5E5',
    borderRadius:25,
    paddingHorizontal: 10,
  },
  sendButton: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FF2875',
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  avatarContainer: {
    position: 'absolute',
    right: wp(2),
    bottom: hp(38),
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
    bottom: hp(31),
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
    bottom: hp(24),
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
    bottom: hp(17),
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
    bottom: hp(10),
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
    bottom: hp(2),
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
  item: {
    width:wp(18),
    height:wp(18),
    marginLeft:wp(2),
    alignItems:"center",
    justifyContent:'center'
  },
  image: {
    width: wp(12),
    height: wp(12),
    borderRadius: 50,
  },
  name: {
    marginTop: 5,
    textAlign: 'center',
    color: '#000',
    fontSize:hp(1.4)
  },
});

export default UserRecommend;
