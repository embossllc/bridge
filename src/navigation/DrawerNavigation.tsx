import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
//screens
import HomeScreen from '../screens/HomeScreen';
import QuickCheckerScreen from '../screens/QuickCheckerScreen';
// import AnalyzingScreen from '../screens/AnalyzingScreen';
import ResultScreen from '../screens/ResultScreen';
import FinalResultScreen from '../screens/FinalResultScreen';
import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: {backgroundColor: '#F1EEE9', width: '85%'},
      }}
      drawerContent={(props: any) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{
          drawerItemStyle: {display: 'none'},
        }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          drawerItemStyle: {display: 'none'},
        }}
        name="QuickChecker"
        component={QuickCheckerScreen}
      />
      {/* <Drawer.Screen name="Analyzing" component={AnalyzingScreen} /> */}
      <Drawer.Screen
        options={{
          drawerItemStyle: {display: 'none'},
        }}
        name="ResultScreen"
        component={ResultScreen}
      />
      <Drawer.Screen
        options={{
          drawerItemStyle: {display: 'none'},
        }}
        name="FinalResult"
        component={FinalResultScreen}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
