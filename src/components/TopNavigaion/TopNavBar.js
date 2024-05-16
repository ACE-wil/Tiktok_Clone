import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserCity from '../../screens/Home/HomeTopNav/UserCity';
import UserFollow from '../../screens/Home/HomeTopNav/UserFollow';
import UserRecommend from '../../screens/Home/HomeTopNav/UserRecommend';
import TheMall from '../../screens/Home/HomeTopNav/TheMall';
import GroupBuying from '../../screens/Home/HomeTopNav/GroupBuying';
import Online from '../../screens/Home/HomeTopNav/Online';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator();

function TopNavBar(){
  return (
    <View style={{ flexDirection: 'row' ,height:hp(50)}}> 
        <Tab.Navigator style={{flex:1}} initialRouteName="推荐" screenOptions={{
          scrollEnabled: true,
          tabBarStyle: { backgroundColor: 'transparent' },
        }}>
          <Tab.Screen name="推荐" component={UserRecommend} />
          <Tab.Screen name="关注" component={UserFollow} />
          <Tab.Screen name="商城" component={TheMall} />
          <Tab.Screen name="团购" component={GroupBuying} />
          <Tab.Screen name="直播" component={Online} />
          <Tab.Screen name="城市" component={UserCity} />
        </Tab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  BtnSearch: {

  },
  iconButton: {
    marginHorizontal: 5, // 添加一些水平间距
  }
})

export default TopNavBar;