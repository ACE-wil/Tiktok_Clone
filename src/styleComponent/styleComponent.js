import React from 'react';  
import { View, StyleSheet, LinearGradient } from 'react-native';  
  

// 渐变背景色组件
const MyGradientComponent = () => {  
  return (  
    <LinearGradient  
      start={{ x: 0, y: 1 }} // 渐变起点，从左下角开始  
      end={{ x: 1, y: 0 }} // 渐变终点，到右上角结束  
      colors={[  
        '#d5f6ff', '#d7f3ff',' #deeeff', '#e8e9ff', '#f4e4ff'
      ]}  
      style={styles.gradientContainer}  
    >  
      {/* 在这里放置内容 */}  
    </LinearGradient>  
  );  
};  
  
const styles = StyleSheet.create({  
  gradientContainer: {  
    flex: 1, // 填充整个父容器  
    justifyContent: 'center',  
    alignItems: 'center',  
  },  
});  
  
export default MyGradientComponent;