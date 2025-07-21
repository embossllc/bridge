import {Text, StyleSheet} from 'react-native';
import React from 'react';
import moment from 'moment';

const FooterYear = () => {
  return (
    <Text style={styles.copyright}>
      © {moment().year()} Bridge Insurance Group, LLC.
    </Text>
  );
};
const styles = StyleSheet.create({
  copyright: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
  },
});
export default FooterYear;
