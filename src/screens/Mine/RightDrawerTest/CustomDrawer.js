import React, { useState, useRef } from 'react';
import { View, PanResponder, Animated, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;

  const openDrawer = () => {
    setIsOpen(true);
    Animated.spring(pan, {
      toValue: { x: wp(80), y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const closeDrawer = () => {
    setIsOpen(false);
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View style={{
      position: 'absolute',
      top: 0,
      left: isOpen ? 0 : -wp(80), // 控制侧边栏的显示和隐藏
      width: wp(80), // 侧边栏占80%的宽度
      height: hp(80),
      backgroundColor: 'green',
      zIndex: 2,
    }}>

      {/* 侧边栏内容 */}
      <Text style={{ marginTop: 50, marginLeft: 20 }}>这是一个侧边栏</Text>
    </Animated.View>
  );
};

export default CustomDrawer;
