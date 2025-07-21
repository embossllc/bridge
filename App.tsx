import React, {useEffect} from 'react';
import {LogBox} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
// import {createDrawerNavigator} from '@react-navigation/drawer';

//screens
// import HomeScreen from './src/screens/HomeScreen';
// import QuickCheckerScreen from './src/screens/QuickCheckerScreen';
import AnalyzingScreen from './src/screens/AnalyzingScreen';
// import ResultScreen from './src/screens/ResultScreen';
// import FinalResultScreen from './src/screens/FinalResultScreen';
import DrawerNavigation from './src/navigation/DrawerNavigation';
// import Test from './src/screens/Test';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const App: React.FC = () => {
  useEffect(() => {
    const splashTime = setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 1000);
    return () => {
      clearTimeout(splashTime);
    };
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="QuickChecker"
          component={QuickCheckerScreen}
        />*/}

        {/*
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ResultScreen"
          component={ResultScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="FinalResult"
          component={FinalResultScreen}
        /> */}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Drawer"
          component={DrawerNavigation}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Analyzing"
          component={AnalyzingScreen}
        />
      </Stack.Navigator>
      {/* <Drawer.Navigator initialRouteName="Home" screenOptions={{ drawerPostion:''}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>*/}
    </NavigationContainer>
  );
};

export default App;
