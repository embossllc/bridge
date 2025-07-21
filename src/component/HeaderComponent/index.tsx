import React, {useCallback, useState} from 'react';
import {Pressable, View, Text} from 'react-native';

import {Header} from 'react-native-elements';
import styles from './style';
import Menu from 'react-native-vector-icons/Feather';
import {Logo} from '../../config/svg';

interface HeaderProps {
  value: string;
  onPressDrawer: () => void;
}
const HeaderComponent = (props: HeaderProps) => {
  const [value] = useState(props.value);
  const {onPressDrawer} = props;
  const LeftComponent = useCallback(() => {
    return (
      // <Image source={require('../../../assets/images/ValueLife-Logo.png')} />
      <Logo height={50} width={200} />
    );
  }, []);
  const RightComponent = useCallback(() => {
    return (
      <Pressable style={styles.menuBtn} onPress={onPressDrawer}>
        <Menu size={20} name="menu" color="#9098A7" />
      </Pressable>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.headerContainer}>
      <Header
        statusBarProps={{barStyle: 'dark-content'}}
        barStyle="dark-content"
        placement="left"
        backgroundColor="#F1EEE9"
        leftComponent={LeftComponent()}
        rightComponent={RightComponent()}
        containerStyle={styles.header}
      />
      <View
        style={
          value === 'How Much Is Your Life Insurance Really Worth?'
            ? styles.headerTextWrapper
            : styles.notHome
        }>
        {value === 'How Much Is Your Life Insurance Really Worth?' ? (
          <Text style={styles.headerText}>
            Discover The Hidden Value Of Your Life Insurance
            {/* <Text style={styles.italicBold}>Really</Text> Worth? */}
          </Text>
        ) : (
          <Text style={styles.headerText}>{value}</Text>
        )}
      </View>
    </View>
  );
};

export default HeaderComponent;
