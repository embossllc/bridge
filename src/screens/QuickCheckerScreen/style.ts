import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
interface QuickCheckerStyle {
  quickChekerTop: ViewStyle;
  plr: ViewStyle;
  meter: ImageStyle;
  textWrapper: TextStyle;
  text: TextStyle;
  feldsWrapper: ViewStyle;
  required: TextStyle;
  start: TextStyle;
  fieldLabel: TextStyle;
  fieldWrapper: ViewStyle;
  field: ViewStyle;
  fieldIssue: ViewStyle;

  labelWrapper: ViewStyle;
  detailsWrapper: ViewStyle;
  cashEstimate: ViewStyle;
  btnText: TextStyle;
  orText: TextStyle;
  copyright: TextStyle;
  dob: ViewStyle;
  dateText: TextStyle;
  pickerZIndex1: ViewStyle;
  pickerZIndex0: ViewStyle;
  bubbleText: TextStyle;
  redCol: TextStyle;
}
const styles = StyleSheet.create<QuickCheckerStyle>({
  quickChekerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  pickerZIndex1: {
    zIndex: 1,
  },
  pickerZIndex0: {
    zIndex: 0,
  },
  plr: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  meter: {
    resizeMode: 'contain',
    width: '30%',
    height: 60,
  },
  textWrapper: {
    width: '70%',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
    color: '#525252',
  },
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
  },
  field: {
    borderWidth: 1,
    borderColor: '#00946A',
    borderRadius: 4,
    paddingLeft: 16,
    fontFamily: 'Roboto-Regular',
    height: 56,
    color: '#000000',
    fontSize: 16,
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
  redCol: {
    color: 'red',
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsWrapper: {
    backgroundColor: '#00946A',
    width: 23,
    height: 23,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  orText: {
    color: '#838383',
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 22,
    marginBottom: 20,
  },
  copyright: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 25,
  },
  dob: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {color: '#00000099'},
  bubbleText: {
    color: '#ffffff',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
export default styles;
