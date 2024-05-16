import { StyleSheet, Text, View , useRef,TouchableOpacity, SafeAreaView } from 'react-native'
import { useCameraDevice,useCameraPermission } from 'react-native-vision-camera';
import { RNCamera } from 'react-native-camera'
import React,{ useState } from 'react'

const VideoScreen = () => {
  const device = useCameraDevice('back')
  const { hasPermission } = useCameraPermission()
  if (!hasPermission) return <View><Text>你好</Text></View>
  if (device == null) return <View><Text>你好</Text></View>
  return (
    <RNCamera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  )
}

export default VideoScreen

const styles = StyleSheet.create({})