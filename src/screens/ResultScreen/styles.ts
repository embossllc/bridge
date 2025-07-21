import {StyleSheet, TextStyle, ViewStyle, ImageStyle} from 'react-native';
interface ResultScreenStyle {
  ImageWrapper: ViewStyle;
  negMeter: ImageStyle;
  resultDescription: ViewStyle;
  resultText: TextStyle;
  cashEstimate: ViewStyle;
  btnText: TextStyle;
  checkAnotherPolicy: ViewStyle;
  checkAnotherPolicyText: TextStyle;
  or: TextStyle;
  getPricing: TextStyle;
  lastStep: TextStyle;
  finalStep: TextStyle;
  mt15: ViewStyle;
  mb15: ViewStyle;
  feldsWrapper: ViewStyle;
  required: TextStyle;
  start: TextStyle;
  fieldLabel: TextStyle;
  fieldWrapper: ViewStyle;
  field: ViewStyle;
  fieldIssue: ViewStyle;
  labelWrapper: ViewStyle;
  dob: ViewStyle;
  dateText: TextStyle;
  checkBoxContainer: ViewStyle;
  checkBoxText: TextStyle;
  copyright: TextStyle;
  redCol: TextStyle;
  mb12: ViewStyle;
}
const styles = StyleSheet.create<ResultScreenStyle>({
  mb12: {
    marginBottom: 15,
  },
  ImageWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  redCol: {
    color: 'red',
  },
  negMeter: {
    resizeMode: 'contain',
    width: '50%',
    height: 120,
  },
  resultDescription: {
    width: '100%',
  },
  resultText: {
    color: '#00946A',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 27,
  },
  cashEstimate: {
    backgroundColor: '#00946A',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 22,
  },
  btnText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: '#FFFFFF',
  },
  checkAnotherPolicy: {
    backgroundColor: '#ffffff',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 0,
    borderColor: '#707070',
    borderWidth: 1,
    marginBottom: 69,
  },
  checkAnotherPolicyText: {
    color: '#040026',
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
  },
  fieldIssue: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    paddingLeft: 16,
    fontFamily: 'Roboto-Regular',
    height: 56,
    color: '#000000',
    fontSize: 16,
  },
  or: {
    textAlign: 'center',
    marginTop: 20,
    color: '#838383',
    fontSize: 22,
    fontFamily: 'Roboto-Regular',
  },
  getPricing: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    color: '#000000',
  },
  lastStep: {
    color: '#C30000',
  },
  finalStep: {
    color: '#525252',
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
  },
  mt15: {marginTop: 15},
  mb15: {marginBottom: 15},
  feldsWrapper: {
    width: '100%',
  },
  required: {
    color: '#6F6F6F',
    textAlign: 'right',
    marginTop: 21,
    marginBottom: 21,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    letterSpacing: 0.15,
  },
  start: {
    color: '#C30000',
  },
  fieldLabel: {
    fontFamily: 'Roboto-Bold',
    color: '#000000',
    fontSize: 18,
    marginBottom: 12,
  },
  fieldWrapper: {
    width: '100%',
    marginTop: 12,
    // marginBottom: 23,
  },
  field: {
    borderWidth: 1,
    borderColor: '#00946A',
    borderRadius: 4,
    paddingLeft: 16,
    fontFamily: 'Roboto-Regular',
    height: 56,
    color: '#000000',
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dob: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {color: '#00000099'},
  checkBoxContainer: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  checkBoxText: {
    color: '#00000099',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  copyright: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 25,
  },
});
export default styles;
