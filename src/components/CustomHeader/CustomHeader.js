import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function CustomHeader({ title, onPressBack }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60, backgroundColor: '#fff' }}>
      <TouchableOpacity onPress={onPressBack}>
        <Text style={{ marginLeft: 10 }}>Back</Text>
      </TouchableOpacity>
      <Text style={{ marginLeft: 10 }}>{title}</Text>
    </View>
  );
}

export default CustomHeader;
