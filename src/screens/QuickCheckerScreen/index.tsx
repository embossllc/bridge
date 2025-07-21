import {
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import sharedStyles from '../../shared/sharedStyles';
import {QuickCheckerProp} from './utils';
import styles from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import PersonalAssistance from '../../component/PersonalAssistance';
import {
  Values,
  Types,
  HealthStatus,
  Gender,
  Relationship,
} from '../../config/DropdownValues';
import FooterYear from '../../component/FooterYear';
import {TextInputMask} from 'react-native-masked-text';

const QuickCheckerScreen = (props: QuickCheckerProp) => {
  const {navigation} = props;
  const scrollViewRef = useRef<ScrollView>(null);
  //open dropdown menu
  const [openType, setOpenType] = useState<boolean>(false);
  const [openHeathStatus, setOpenHealthStatus] = useState<boolean>(false);
  const [openGender, setOpenGender] = useState<boolean>(false);
  const [openRelationship, setOpenRelationship] = useState<boolean>(false);

  //fields value variables
  const [policyAmount, setPolicyAmount] = useState<string>('');
  const [policyType, setPolicyType] = useState<any>('');
  const [dob, setDob] = useState<string>('');
  const [healthStatus, setHealthStatus] = useState<any>('');
  const [policyOwnerName, setPolicyOwnerName] = useState<string>('');
  const [gender, setGender] = useState<any>('');
  const [relationship, setRelationship] = useState<any>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const [policyAmountCheck, setPolicyAmountCheck] = useState<boolean>(false);
  const [policyTypeCheck, setPolicyTypeCheck] = useState<boolean>(false);
  const [dobCheck, setDobCheck] = useState<boolean>(false);
  const [healthStatusCheck, setHealthStatusCheck] = useState<boolean>(false);
  const [policyOwnerNameCheck, setPolicyOwnerNameCheck] =
    useState<boolean>(false);
  const [relationshipCheck, setRelationshipCheck] = useState<boolean>(false);
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [emailCheckValid, setEmailCheckValid] = useState<boolean>(false);
  const [phoneValid, setPhonValid] = useState<boolean>(false);

  //dropdown values
  const [typeValues, setTypeValues] = useState<Values[]>(Types);
  const [healthStatusValues, setHealthStatusValues] =
    useState<Values[]>(HealthStatus);
  const [genderValues, setGenderValues] = useState<Values[]>(Gender);
  const [relationshipValues, setRelationshipValues] =
    useState<Values[]>(Relationship);

  const toAnalyzer = () => {
    if (policyAmount === '') {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
      }, 1);
      setPolicyAmountCheck(true);
      return;
    }
    setPolicyAmountCheck(false);

    if (policyType === '') {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
      }, 1);
      setPolicyTypeCheck(true);
      return;
    }
    setPolicyTypeCheck(false);
    if (dob === '') {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
      }, 1);
      setDobCheck(true);
      return;
    }
    setDobCheck(false);

    if (healthStatus === '') {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          x: 0,
          y: 389.3333435058594,
          animated: true,
        });
      }, 1);
      setHealthStatusCheck(true);
      return;
    }
    setHealthStatusCheck(false);

    if (policyOwnerName === '') {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          x: 0,
          y: 389.3333435058594,
          animated: true,
        });
      }, 1);
      setPolicyOwnerNameCheck(true);
      return;
    }
    setPolicyOwnerNameCheck(false);

    if (relationship === '') {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          x: 0,
          y: 701.8181762695312,
          animated: true,
        });
      }, 1);
      setRelationshipCheck(true);
      return;
    }
    setRelationshipCheck(false);

    const isEmail = validateEmail(email);
    if (email === '') {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({
          x: 0,
          y: 806.1818237304688,
          animated: true,
        });
      }, 1);
      setEmailCheck(true);
      return;
    }
    setEmailCheck(false);

    if (!isEmail) {
      setEmailCheckValid(true);
      return;
    }
    setEmailCheckValid(false);

    if (phone !== '') {
      if (phone.length !== 10) {
        setPhonValid(true);
        return;
      }
    }
    setPhonValid(false);

    let data = {
      policyAmount: policyAmount.replace('$', '').replace(/,/g, ''),
      policyType: policyType,
      dob: dob,
      policyOwnerName: policyOwnerName,
      healthStatus: healthStatus,
      email: email,
      phone: phone,
      gender: gender,
      relationship: relationship,
    };
    navigation.navigate('Analyzing', {data: JSON.stringify(data)});
  };
  const drawer = () => {
    navigation.openDrawer();
  };
  const validateEmail = (emailAdress: string) => {
    let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <View style={sharedStyles.container}>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={sharedStyles.headerContainer}>
          <HeaderComponent value="Quick Checker" onPressDrawer={drawer} />
        </View>

        <View style={sharedStyles.contentWrapper}>
          <View style={styles.plr}>
            <View style={styles.quickChekerTop}>
              <Image
                source={require('../../../assets/images/positive-result-meter.jpg')}
                style={styles.meter}
              />
              <View style={styles.textWrapper}>
                <Text style={{...styles.text, ...sharedStyles.textCol}}>
                  Check to see if the policyowner qualifies.
                </Text>
              </View>
            </View>
            <View style={styles.fieldWrapper}>
              <Text style={styles.required}>
                <Text style={styles.start}>*</Text> = Field Required.
              </Text>
              <View style={styles.fieldWrapper}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.fieldLabel}>
                    <Text style={styles.start}>*</Text>Enter Policy Amount
                  </Text>
                  <Pressable
                    style={styles.detailsWrapper}
                    onPress={() => {
                      Alert.alert(
                        '',
                        'This is the Face Amount also called Death Benefit of the policy',
                      );
                    }}>
                    <Text style={styles.bubbleText}>?</Text>
                  </Pressable>
                </View>

                <TextInputMask
                  type={'money'}
                  value={policyAmount}
                  onChangeText={text => {
                    setPolicyAmount(text);
                  }}
                  placeholderTextColor="#00000099"
                  placeholder="Ex: $500,000"
                  options={{
                    precision: 0,
                    separator: ',',
                    delimiter: ',',
                    unit: '$',
                    suffixUnit: '',
                  }}
                  style={!policyAmountCheck ? styles.field : styles.fieldIssue}
                />
                {policyAmountCheck ? (
                  <Text style={styles.redCol}>
                    Please complete policy amount
                  </Text>
                ) : (
                  <></>
                )}
              </View>
              {/* <View style={styles.fieldWrapper}> */}
              <View style={{...styles.labelWrapper, ...styles.fieldWrapper}}>
                <Text style={styles.fieldLabel}>
                  <Text style={styles.start}>*</Text>Enter Policy Type
                </Text>
              </View>
              <DropDownPicker
                zIndex={1000}
                open={openType}
                value={policyType}
                items={typeValues}
                setOpen={setOpenType}
                setValue={setPolicyType}
                setItems={setTypeValues}
                style={!policyTypeCheck ? styles.field : styles.fieldIssue}
                listMode="SCROLLVIEW"
                dropDownDirection="TOP"
              />
              {policyTypeCheck ? (
                <Text style={styles.redCol}>Please complete policy type</Text>
              ) : (
                <></>
              )}
              {/* </View> */}
              <View style={styles.fieldWrapper}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.fieldLabel}>
                    <Text style={styles.start}>*</Text>Enter Date of Birth
                  </Text>
                </View>
                <TextInputMask
                  type={'datetime'}
                  options={{
                    format: 'MM/DD/YYYY',
                  }}
                  placeholderTextColor="#00000099"
                  placeholder="MM/DD/YYYY"
                  value={dob}
                  style={!dobCheck ? styles.field : styles.fieldIssue}
                  onChangeText={text => {
                    setDob(text);
                  }}
                />
                {dobCheck ? (
                  <Text style={styles.redCol}>
                    Please complete date of birth
                  </Text>
                ) : (
                  <></>
                )}
              </View>
              {/* <View style={styles.fieldWrapper}> */}
              <View style={{...styles.labelWrapper, ...styles.fieldWrapper}}>
                <Text style={styles.fieldLabel}>
                  <Text style={styles.start}>*</Text>Select Health Status
                </Text>
              </View>
              <DropDownPicker
                zIndex={1000}
                open={openHeathStatus}
                value={healthStatus}
                items={healthStatusValues}
                setOpen={setOpenHealthStatus}
                setValue={setHealthStatus}
                setItems={setHealthStatusValues}
                style={!healthStatusCheck ? styles.field : styles.fieldIssue}
                listMode="SCROLLVIEW"
                dropDownDirection="TOP"
              />
              {healthStatusCheck ? (
                <Text style={styles.redCol}>Please complete health status</Text>
              ) : (
                <></>
              )}
              {/* </View> */}
              <View style={styles.fieldWrapper}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.fieldLabel}>
                    <Text style={styles.start}>*</Text>Policyowner’s First Name
                  </Text>
                </View>
                <TextInput
                  style={
                    !policyOwnerNameCheck ? styles.field : styles.fieldIssue
                  }
                  placeholderTextColor="#00000099"
                  placeholder="Policy Owner Name"
                  onChangeText={text => setPolicyOwnerName(text)}
                />
                {policyOwnerNameCheck ? (
                  <Text style={styles.redCol}>
                    Please complete policy owner name
                  </Text>
                ) : (
                  <></>
                )}
              </View>
              {/* <View style={styles.fieldWrapper}> */}
              <View style={{...styles.labelWrapper, ...styles.fieldWrapper}}>
                <Text style={styles.fieldLabel}>Select Gender (Optional)</Text>
              </View>
              <DropDownPicker
                zIndex={1000}
                open={openGender}
                value={gender}
                items={genderValues}
                setOpen={setOpenGender}
                setValue={setGender}
                setItems={setGenderValues}
                style={styles.field}
                listMode="SCROLLVIEW"
                dropDownDirection="TOP"
              />
              {/* </View> */}
              {/* <View style={styles.fieldWrapper}> */}
              <View style={{...styles.labelWrapper, ...styles.fieldWrapper}}>
                <Text style={styles.fieldLabel}>
                  <Text style={styles.start}>*</Text>My Relationship Is…
                </Text>
              </View>
              <DropDownPicker
                zIndex={1000}
                open={openRelationship}
                value={relationship}
                items={relationshipValues}
                setOpen={setOpenRelationship}
                setValue={setRelationship}
                setItems={setRelationshipValues}
                style={!relationshipCheck ? styles.field : styles.fieldIssue}
                listMode="SCROLLVIEW"
              />
              {relationshipCheck ? (
                <Text style={styles.redCol}>Please complete relationship</Text>
              ) : (
                <></>
              )}
              {/* </View> */}
              <View style={styles.fieldWrapper}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.fieldLabel}>
                    <Text style={styles.start}>*</Text>My Email is…
                  </Text>
                </View>
                <TextInput
                  style={
                    !emailCheck && !emailCheckValid
                      ? styles.field
                      : styles.fieldIssue
                  }
                  placeholderTextColor="#00000099"
                  placeholder="Email"
                  onChangeText={text => setEmail(text)}
                />
                {emailCheck || emailCheckValid ? (
                  <Text style={styles.redCol}>Please complete email</Text>
                ) : (
                  <></>
                )}
              </View>
              <View style={styles.fieldWrapper}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.fieldLabel}>
                    My Phone Number is… (Optional)
                  </Text>
                </View>
                <TextInput
                  style={!phoneValid ? styles.field : styles.fieldIssue}
                  placeholderTextColor="#00000099"
                  placeholder="(###) ###-####"
                  keyboardType="numeric"
                  value={phone}
                  onChangeText={text => {
                    if (text.length <= 10) {
                      setPhone(text);
                    }
                  }}
                />
                {phoneValid ? (
                  <Text style={styles.redCol}>
                    Phone number should be 10 dijits long
                  </Text>
                ) : (
                  <></>
                )}
                {/* <TextInputMask
                  style={styles.field}
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }}
                  placeholderTextColor="#00000099"
                  placeholder="(###) ###-####"
                  onChangeText={text => setPhone(text)}
                /> */}
              </View>
              <Pressable style={styles.cashEstimate} onPress={toAnalyzer}>
                <Text style={styles.btnText}>Check My Policy Now</Text>
              </Pressable>
            </View>
            <Text style={styles.orText}>OR</Text>
            <PersonalAssistance page="quickcheck" final="" />
            <FooterYear />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default QuickCheckerScreen;
