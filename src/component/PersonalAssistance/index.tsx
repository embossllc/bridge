import {View, Text, Image, Pressable, Linking} from 'react-native';
import React from 'react';
import Arrow from 'react-native-vector-icons/Feather';
import styles from './style';
import sharedStyles from '../../shared/sharedStyles';
interface PersonalAssistanceProp {
  page: string;
  final: string;
}
const PersonalAssistance = (props: PersonalAssistanceProp) => {
  const {page, final} = props;
  const contactBridge = () => {
    Linking.openURL('https://q.cr/vlife');
  };
  // const quickCheckerNegative = () => {
  //   Linking.openURL('https://q.cr/vlifehow');
  // };
  return (
    <View>
      {page === 'quickcheck' ? (
        <>
          <Text style={{...styles.title, ...sharedStyles.textCol}}>
            Get Personal Assistance
          </Text>

          {final === '' ? (
            <Text style={{...styles.PAText, ...sharedStyles.textCol}}>
              Contact a Life Settlement Broker for a Risk-Free Consultation
              Today.
            </Text>
          ) : (
            <Text style={{...styles.PAText, ...sharedStyles.textCol}}>
              Contact a licensed life settlement broker for a free consultation.
            </Text>
          )}
          <View style={styles.assistantView}>
            <Image
              source={require('../../../assets/images/consulting.png')}
              style={styles.welcomeImage}
            />
          </View>
          <Pressable style={styles.contaceBridge} onPress={contactBridge}>
            <Text style={styles.btnText}>
              Contact Bridge
              <Arrow name="arrow-up-right" size={25} />
            </Text>
          </Pressable>
        </>
      ) : (
        <></>
      )}
      {page === 'result' ? (
        <>
          <Text style={{...styles.title, ...sharedStyles.textCol}}>
            Highest Offer Guaranteed
          </Text>
          <Text style={{...styles.PAText, ...sharedStyles.textCol}}>
            Contact a Life Settlement Broker for a Risk-Free Consultation Today.
          </Text>
          <View style={styles.assistantView}>
            <Image
              source={require('../../../assets/images/Check-Cash.png')}
              style={styles.welcomeImage}
            />
          </View>
          <Pressable style={styles.contaceBridge} onPress={contactBridge}>
            <Text style={styles.btnText}>
              Contact Bridge
              <Arrow name="arrow-up-right" size={25} />
            </Text>
          </Pressable>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default PersonalAssistance;
