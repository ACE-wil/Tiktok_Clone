import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const TabContent = ({ content }) => (
  <ScrollView style={{ flex: 1 }}>
    <View style={{ padding: 20 }}>
      <Text>{content}</Text>
      {/* 更多内容 */}
    </View>
  </ScrollView>
);

const TheMall = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <TabContent content="这是第一个标签页的内容" />;
      case 1:
        return <TabContent content="这是第二个标签页的内容" />;
      case 2:
        return <TabContent content="这是第三个标签页的内容" />;
      case 3:
        return <TabContent content="这是第四个标签页的内容" />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10 }}>
        <TouchableOpacity onPress={() => setActiveTab(0)} style={{ flex: 1, alignItems: 'center', backgroundColor: activeTab === 0 ? 'lightgray' : 'transparent' }}>
          <Text>标签页1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(1)} style={{ flex: 1, alignItems: 'center', backgroundColor: activeTab === 1 ? 'lightgray' : 'transparent' }}>
          <Text>标签页2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(2)} style={{ flex: 1, alignItems: 'center', backgroundColor: activeTab === 2 ? 'lightgray' : 'transparent' }}>
          <Text>标签页3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab(3)} style={{ flex: 1, alignItems: 'center', backgroundColor: activeTab === 3 ? 'lightgray' : 'transparent' }}>
          <Text>标签页4</Text>
        </TouchableOpacity>
      </View>
      {renderTabContent()}
    </View>
  );
};

export default TheMall;
