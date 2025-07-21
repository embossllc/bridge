import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Linking, Pressable, Text, View, StyleSheet} from 'react-native';
const CustomDrawer = (props: any) => {
  const {navigation} = props;
  const closeDrawer = () => {
    navigation.closeDrawer();
  };
  const resourses = () => {
    Linking.openURL('https://q.cr/vlifeforms');
  };
  const financial = () => {
    Linking.openURL('https://q.cr/vlifeadvisors');
  };
  return (
    <DrawerContentScrollView style={styles.main}>
      <View style={styles.drawerWrapper}>
        <Pressable onPress={closeDrawer}>
          <Text style={styles.close}>X</Text>
        </Pressable>
        <View style={styles.content}>
          <View style={styles.drawerContent}>
            <Text style={styles.consumer}>Consumer</Text>
            <Pressable style={styles.resourses} onPress={resourses}>
              <Text style={styles.text}>Resources & Forms↗</Text>
            </Pressable>
          </View>
          <View style={styles.drawerContent}>
            <Text style={styles.consumer}>Professionals</Text>
            <Pressable style={styles.resourses} onPress={financial}>
              <Text style={styles.text}>Financial Advisors↗</Text>
            </Pressable>
          </View>
          <View style={styles.drawerContent}>
            <View style={styles.proWrapper}>
              <Text style={styles.comingSoon}>Coming Soon</Text>
              <Text style={styles.consumer}>
                Valu
                <Text style={styles.lifePro}>LifePro</Text>
              </Text>
            </View>
            <Pressable style={styles.resourses}>
              <Text style={styles.textPro}>Realtime Offers</Text>
              <Text style={styles.textPro}>Bulk Policy Upload</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/* <Text style={styles.copytext}>© 2022 Bridge Insurance Group, LLC.</Text> */}
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  drawerWrapper: {
    flex: 1,
    marginTop: 19,
    alignItems: 'flex-end',
    marginRight: 23,
  },
  close: {
    color: '#000000',
    fontSize: 30,
    fontFamily: 'Roboto-Regular',
  },
  content: {
    marginTop: 76,
    justifyContent: 'center',
  },
  drawerContent: {
    //width: '100%',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  consumer: {
    color: '#000000',
    fontFamily: 'Roboto-Bold',
    fontSize: 29,
    textDecorationLine: 'underline',
  },
  resourses: {
    alignItems: 'flex-end',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 25,
    color: '#000000',
  },
  lifePro: {
    fontFamily: 'Roboto-Regular',
  },
  proWrapper: {
    flexDirection: 'row',
  },
  comingSoon: {
    fontSize: 8,
    marginRight: 8,
    backgroundColor: '#00946A',
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: -10,
    alignSelf: 'center',
    borderRadius: 10,
    color: '#ffffff',
    fontFamily: 'Roboto-Bold',
  },
  copyright: {
    alignItems: 'center',
    //  height: 60,
    position: 'relative',
    top: 5,
    // left: 15,
    width: '100%',
  },
  copytext: {
    marginTop: 260,
    textAlign: 'center',
    color: '#000000',
  },
  textPro: {
    color: '#8D8D8D',
    fontFamily: 'Roboto-Regular',
    fontSize: 25,
  },
});
export default CustomDrawer;
