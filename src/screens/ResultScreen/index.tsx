import {
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Linking,
} from 'react-native';
import React, {useRef, useState} from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import styles from './styles';
import sharedStyles from '../../shared/sharedStyles';
import {ResultScreenProp} from './utils';
import PersonalAssistance from '../../component/PersonalAssistance';
import moment from 'moment';
import {Values, States, Carrier} from '../../config/DropdownValues';
import Arrow from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import {CheckBox} from 'react-native-elements';
import {TextInputMask} from 'react-native-masked-text';
interface Data {
  policyAmount: number;
  policyType: string;
  dob: string;
  policyOwnerName: string;
  healthStatus: string;
  email: string;
  phone: string;
  gender: string;
  relationship: string;
}

const ResultScreen = (props: ResultScreenProp) => {
  const {navigation} = props;
  const ref = useRef<ScrollView>(null);
  let result = props.route.params.result;
  let dataForm1: Data = JSON.parse(props.route.params.data);
  const [stateCheck, setStateCheck] = useState<boolean>(false);
  const [zipCodeCheck, setZipCodeCheck] = useState<boolean>(false);
  //open dropdown menu
  const [openStateofResident, setOpenStateofResident] =
    useState<boolean>(false);
  const [openCarrier, setOpenCarrier] = useState<boolean>(false);

  //fields value variables
  const [stateofResident, setStateofResident] = useState<any>('');
  const [carrier, setCarrier] = useState<any>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [policyRenewalDate, setPolicyRenewalDate] = useState<string>('');
  const [conversionDate, setConversionDate] = useState<string>('');
  const [premiumAmount, setPremiumAmount] = useState<string>('');
  const [cashValue, setCashValue] = useState<string>('');
  const [policyClasuses, setPolicyClasuses] = useState<any[]>([]);
  const [finalPolicyClasuses, setFinalPolicyClasuses] = useState<any>('');

  //dropdown values
  const [stateofResidentValues, setStateofResidentValues] =
    useState<Values[]>(States);
  const [carrierValues, setCarrierValues] = useState<Values[]>(Carrier);

  //checkbox
  const [clauses, setClauses] = useState<any>([
    {label: 'No Lapse Guarantee', isChecked: false},
    {label: 'Accelerated Death Benefits (ADB)', isChecked: false},
    {label: 'Survivorship Policy', isChecked: false},
    {label: 'Trust Owned', isChecked: false},
    {label: 'Keyman Policy', isChecked: false},
  ]);
  const handleCheck = (item: any, index: any) => {
    let temp: any = clauses;
    temp[index].isChecked = !temp[index].isChecked;
    setClauses([...temp]);
    let tempPolicy = policyClasuses;
    if (tempPolicy.indexOf(item.label) === -1) {
      tempPolicy.push(item.label);
    } else {
      tempPolicy.splice(tempPolicy.indexOf(item.label), 1);
    }
    setPolicyClasuses([...tempPolicy]);
    setFinalPolicyClasuses(tempPolicy.join(','));
  };
  const toQuickChecker = () => {
    navigation.navigate('QuickChecker');
  };
  const toAnalyzer = () => {
    if (stateofResident === '') {
      setTimeout(() => {
        ref.current?.scrollTo({x: 0, y: 0, animated: true});
      }, 1);
      setStateCheck(true);
      return;
    }
    setStateCheck(false);
    if (zipCode === '' || zipCode.length !== 5) {
      setTimeout(() => {
        ref.current?.scrollTo({x: 0, y: 0, animated: true});
      }, 1);
      setZipCodeCheck(true);
      return;
    }
    setZipCodeCheck(false);
    let data = {
      ...dataForm1,
      stateofResident: stateofResident,
      carrier: carrier,
      zipCode: zipCode,
      policyRenewalDate: policyRenewalDate,
      conversionDate: conversionDate,
      premiumAmount: premiumAmount.replace('$', '').replace(/,/g, ''),
      cashValue: cashValue.replace('$', '').replace(/,/g, ''),
      policyClasuses: finalPolicyClasuses,
    };
    //  console.log(data);
    navigation.navigate('Analyzing', {
      data: JSON.stringify(data),
      form2: 'form2',
    });
  };
  const watchHelper = () => {
    Linking.openURL('https://q.cr/vlifehow');
  };
  const drawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={sharedStyles.container}>
      <ScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={sharedStyles.headerContainer}>
          <HeaderComponent
            value="Quick Checker Result"
            onPressDrawer={drawer}
          />
        </View>
        <View style={sharedStyles.contentContainer}>
          {result === -1 ? (
            <>
              <View style={styles.ImageWrapper}>
                <Image
                  source={require('../../../assets/images/negative-result-meter.jpg')}
                  style={styles.negMeter}
                />
              </View>
              <View style={styles.resultDescription}>
                <Text style={styles.resultText}>
                  There are not enough selling indicators for this policy but
                  that can change!
                </Text>
              </View>
              <Pressable style={styles.cashEstimate} onPress={watchHelper}>
                <Text style={styles.btnText}>
                  Watch Helper Video
                  <Arrow name="arrow-up-right" size={25} />
                </Text>
              </Pressable>
              <Text style={styles.or}>OR</Text>
              <Pressable
                style={styles.checkAnotherPolicy}
                onPress={toQuickChecker}>
                <Text style={styles.checkAnotherPolicyText}>
                  Check Another Policy
                </Text>
              </Pressable>
              <Text
                style={{
                  ...styles.copyright,
                  ...styles.mt15,
                  ...styles.mb15,
                }}>
                © {moment().year()} Bridge Insurance Group, LLC.
              </Text>
            </>
          ) : (
            <></>
          )}
          {result === 1 ? (
            <>
              <View style={styles.ImageWrapper}>
                <Image
                  source={require('../../../assets/images/positive-result-meter.jpg')}
                  style={styles.negMeter}
                />
              </View>
              <View style={styles.resultDescription}>
                <Text style={styles.resultText}>
                  Success! Positive selling indicators for this policy.
                </Text>
              </View>
              <View
                style={{
                  ...styles.resultDescription,
                  ...styles.mt15,
                  ...styles.mb15,
                }}>
                <Text style={styles.getPricing}>
                  Get Pricing - <Text style={styles.lastStep}>LAST STEP!</Text>
                </Text>
              </View>
              <View style={styles.resultDescription}>
                <Text style={styles.finalStep}>
                  Complete the final step to get your free cash estimate now.
                </Text>
              </View>
              <View style={styles.feldsWrapper}>
                {/* <View style={styles.fieldWrapper}> */}
                <View style={{...styles.labelWrapper, ...styles.fieldWrapper}}>
                  <Text style={styles.fieldLabel}>
                    <Text style={styles.start}>*</Text>Select State of Residence
                  </Text>
                </View>
                <DropDownPicker
                  open={openStateofResident}
                  value={stateofResident}
                  items={stateofResidentValues}
                  searchable={true}
                  searchTextInputProps={{
                    placeholder: 'Seach state of residence',
                  }}
                  setOpen={setOpenStateofResident}
                  setValue={setStateofResident}
                  setItems={setStateofResidentValues}
                  style={!stateCheck ? styles.field : styles.fieldIssue}
                  listMode="SCROLLVIEW"
                  dropDownDirection="TOP"
                />
                {stateCheck ? (
                  <Text style={styles.redCol}>
                    Please complete state of residence
                  </Text>
                ) : (
                  <></>
                )}
                {/* </View> */}
                <View style={styles.fieldWrapper}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.fieldLabel}>
                      <Text style={styles.start}>*</Text>Enter ZIP Code
                    </Text>
                  </View>
                  <TextInput
                    style={!zipCodeCheck ? styles.field : styles.fieldIssue}
                    placeholderTextColor="#00000099"
                    placeholder="#####"
                    keyboardType="numeric"
                    value={zipCode}
                    onChangeText={text => {
                      if (text.length <= 5) {
                        setZipCode(text);
                      }
                    }}
                  />
                  {zipCodeCheck ? (
                    <Text style={styles.redCol}>Please complete zipcode</Text>
                  ) : (
                    <></>
                  )}
                </View>
                {/* <View style={styles.fieldWrapper}> */}
                <View style={{...styles.labelWrapper, ...styles.fieldWrapper}}>
                  <Text style={styles.fieldLabel}>
                    Select Carrier (Optional)
                  </Text>
                </View>
                <DropDownPicker
                  scrollViewProps={{
                    decelerationRate: 'fast',
                  }}
                  listMode="SCROLLVIEW"
                  searchable={true}
                  searchTextInputProps={{
                    placeholder: 'Seach carrier...',
                  }}
                  open={openCarrier}
                  value={carrier}
                  items={carrierValues}
                  setOpen={setOpenCarrier}
                  setValue={setCarrier}
                  setItems={setCarrierValues}
                  style={styles.field}
                  // dropDownDirection="TOP"
                />
                {/* </View> */}
                <View style={styles.fieldWrapper}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.fieldLabel}>
                      Enter Policy Renewal Date (Optional)
                    </Text>
                  </View>
                  <TextInputMask
                    type={'datetime'}
                    options={{
                      format: 'MM/DD/YYYY',
                    }}
                    placeholderTextColor="#00000099"
                    placeholder="MM/DD/YYYY"
                    value={policyRenewalDate}
                    style={styles.field}
                    onChangeText={text => {
                      setPolicyRenewalDate(text);
                    }}
                  />
                </View>
                <View style={styles.fieldWrapper}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.fieldLabel}>
                      Enter Conversion Date (Optional)
                    </Text>
                  </View>
                  <TextInputMask
                    type={'datetime'}
                    options={{
                      format: 'MM/DD/YYYY',
                    }}
                    placeholderTextColor="#00000099"
                    placeholder="MM/DD/YYYY"
                    value={conversionDate}
                    style={styles.field}
                    onChangeText={text => {
                      setConversionDate(text);
                    }}
                  />
                </View>
                <View style={styles.fieldWrapper}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.fieldLabel}>
                      Enter Premium Amount (Optional)
                    </Text>
                  </View>
                  <TextInputMask
                    type={'money'}
                    value={premiumAmount}
                    onChangeText={text => {
                      setPremiumAmount(text);
                    }}
                    placeholderTextColor="#00000099"
                    placeholder="Ex: $2,000"
                    options={{
                      precision: 0,
                      separator: ',',
                      delimiter: ',',
                      unit: '$',
                      suffixUnit: '',
                    }}
                    style={styles.field}
                  />
                </View>
                <View style={styles.fieldWrapper}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.fieldLabel}>
                      Enter Total Cash Value (Optional)
                    </Text>
                  </View>
                  <TextInputMask
                    type={'money'}
                    value={cashValue}
                    onChangeText={text => {
                      setCashValue(text);
                    }}
                    placeholderTextColor="#00000099"
                    placeholder="Ex: $245,000"
                    options={{
                      precision: 0,
                      separator: ',',
                      delimiter: ',',
                      unit: '$',
                      suffixUnit: '',
                    }}
                    style={styles.field}
                  />
                </View>
                <View style={styles.fieldWrapper}>
                  <View style={styles.labelWrapper}>
                    <Text style={styles.fieldLabel}>
                      Policy Clauses - Check applicable (Optional)
                    </Text>
                  </View>
                  {clauses.map((item: any, index: any) => {
                    return (
                      <CheckBox
                        title={item.label}
                        uncheckedColor="#00946A"
                        checkedColor="#00946A"
                        checked={item.isChecked}
                        onPress={() => {
                          handleCheck(item, index);
                        }}
                        containerStyle={styles.checkBoxContainer}
                        textStyle={styles.checkBoxText}
                      />
                    );
                  })}
                  <Pressable
                    style={{...styles.cashEstimate, ...styles.mb12}}
                    onPress={toAnalyzer}>
                    <Text style={styles.btnText}>
                      Get My Free Cash Estimate
                    </Text>
                  </Pressable>
                </View>
                <PersonalAssistance page="result" final="" />
                <Pressable
                  style={styles.checkAnotherPolicy}
                  onPress={toQuickChecker}>
                  <Text style={styles.checkAnotherPolicyText}>Start Over</Text>
                </Pressable>
                <Text
                  style={{...styles.copyright, ...styles.mt15, ...styles.mb15}}>
                  © {moment().year()} Bridge Insurance Group, LLC.
                </Text>
              </View>
            </>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ResultScreen;
