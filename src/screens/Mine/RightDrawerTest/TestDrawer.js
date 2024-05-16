import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Animated } from 'react-native';

class TestDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      commentHeight: new Animated.Value(0),
    };
  }

  toggleCommentSection = () => {
    const { expanded, commentHeight } = this.state;
    const initialValue = expanded ? commentHeight._value : 0;
    const finalValue = expanded ? 0 : 200; // 设置你想要的展开后的高度

    this.setState({ expanded: !expanded });

    Animated.timing(commentHeight, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const { expanded, commentHeight } = this.state;

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <TouchableOpacity onPress={this.toggleCommentSection}>
          <Text>点击这里展开/收起评论</Text>
        </TouchableOpacity>
        <Animated.View style={{ height: commentHeight, overflow: 'hidden' }}>
          {/* 展开后的评论区域 */}
          <TextInput
            placeholder="在这里输入评论"
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 10 }}
            multiline={true}
          />
        </Animated.View>
      </KeyboardAvoidingView>
    );
  }
}

export default TestDrawer;
