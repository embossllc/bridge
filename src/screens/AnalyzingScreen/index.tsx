import {View, Text, StatusBar, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import sharedStyles from '../../shared/sharedStyles';
import {AnalyzingProp} from './utils';
import {useIsFocused} from '@react-navigation/native';
import useSendMails from '../../hooks/useSendMails';
interface Data {
  policyAmount: number;
  policyType: string;
  dob: string;
  policyOwnerName: string;
  healthStatus: string;
  gender: string;
  relationship: string;
  email: string;
  phone: string;
  stateofResident: string;
  carrier: string;
  zipCode: string;
  policyRenewalDate: string;
  conversionDate: string;
  premiumAmount: string;
  cashValue: string;
  policyClasuses: string;
  lowRange: string;
  highRange: string;
}

const AnalyzingSceen = (props: AnalyzingProp) => {
  const {navigation} = props;
  const isFocused = useIsFocused();
  const {sendMail} = useSendMails();
  let data: Data = JSON.parse(props.route.params.data);
  //Calculate Age
  const calAge = (dob: any) => {
    var diffMs = Date.now() - dob.getTime();
    var ageDt = new Date(diffMs);

    return Math.abs(ageDt.getUTCFullYear() - 1970);
  };
  let splitedDate: any = data.dob.split('/'); //split DOB
  let age: any = calAge(
    new Date(splitedDate[2], splitedDate[0], splitedDate[1]),
  );
  const checkResult = () => {
    if (props.route.params.form2 === undefined) {
      if (
        data.healthStatus === 'Critically Unhealthy' ||
        data.healthStatus === 'Very Unhealthy'
      ) {
        let stepOneData: any = {
          step: '1',
          policy_amount: data.policyAmount,
          policy_type: data.policyType,
          dob: data.dob,
          health_status: data.healthStatus,
          first_name: data.policyOwnerName,
          gender: data.gender,
          relationship: data.relationship,
          email: data.email,
          phone: data.phone,
        };

        sendMail(stepOneData);
        setTimeout(() => {
          navigation.navigate('ResultScreen', {
            result: 1,
            data: JSON.stringify(data),
          });
        }, 2000);
        return;
      }
      if (data.policyAmount >= 100000 && age >= 65) {
        let stepOneData: any = {
          step: '1',
          policy_amount: data.policyAmount,
          policy_type: data.policyType,
          dob: data.dob,
          health_status: data.healthStatus,
          first_name: data.policyOwnerName,
          gender: data.gender,
          relationship: data.relationship,
          email: data.email,
          phone: data.phone,
        };

        sendMail(stepOneData);
        setTimeout(() => {
          navigation.navigate('ResultScreen', {
            result: 1,
            data: JSON.stringify(data),
          });
        }, 2000);
      } else {
        setTimeout(() => {
          navigation.navigate('ResultScreen', {
            result: -1,
            data: JSON.stringify(data),
          });
        }, 2000);
      }

      return;
    }
    if (props.route.params.form2 !== undefined) {
      let lowRange = data.policyAmount * 0.2;
      let highRange = data.policyAmount * 0.8;

      data = {
        ...data,
        lowRange: String(Number(lowRange)),
        highRange: String(Number(highRange)),
      };
      let finalStepData: any = {
        step: '2',
        policy_amount: data.policyAmount,
        policy_type: data.policyType,
        dob: data.dob,
        health_status: data.healthStatus,
        first_name: data.policyOwnerName,
        gender: data.gender,
        relationship: data.relationship,
        email: data.email,
        phone: data.phone,
        state_of_residence: data.stateofResident,
        zip_code: data.zipCode,
        carrier: data.carrier,
        policy_renewal_date: data.policyRenewalDate,
        conversion_date: data.conversionDate,
        premium_amount: data.premiumAmount,
        total_cash_value: data.cashValue,
        policy_clause: data.policyClasuses,
      };

      sendMail(finalStepData);
      setTimeout(() => {
        navigation.navigate('FinalResult', {data: JSON.stringify(data)});
      }, 2000);
    }
  };
  useEffect(() => {
    checkResult();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);
  return (
    <View style={styles.analyzeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F1EEE9" />
      <Text style={{...sharedStyles.textCol, ...styles.analyzing}}>
        Analyzing...
      </Text>
      <ActivityIndicator size={94} color="#00946A" />
    </View>
  );
};

export default AnalyzingSceen;
