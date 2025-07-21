import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
interface FinalResultStyle {
  quickChekerTop: ViewStyle;
  plr: ViewStyle;
  meter: ImageStyle;
  textWrapper: TextStyle;
  text: TextStyle;
  highLowPrice: ViewStyle;
  priceText: TextStyle;
  m36: ViewStyle;
  highOffer: TextStyle;
  assistantView: ViewStyle;
  welcomeImage: ImageStyle;
  cashEstimate: ViewStyle;
  btnText: TextStyle;
  textWrapperAlone: ViewStyle;
  goAlone: TextStyle;
  bold: TextStyle;
  testimonial: ImageStyle;
  freeResources: ViewStyle;
  freeResourcesText: TextStyle;
  des: TextStyle;
  sendEmail: ViewStyle;
  emailField: ViewStyle;
  send: ViewStyle;
  sendText: TextStyle;
  checkAnotherPolicy: ViewStyle;
  checkAnotherPolicyText: TextStyle;
  last: TextStyle;
  copyright: TextStyle;
  f30: TextStyle;
  lsimg: ViewStyle;
  lsimgmain: ImageStyle;
  mt47: ViewStyle;
  mb16: TextStyle;
  highestOffer: ViewStyle;
  h200: ImageStyle;
}
const styles = StyleSheet.create<FinalResultStyle>({
  quickChekerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  lsimgmain: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  mt47: {
    marginTop: 47,
  },
  lsimg: {
    width: '100%',
  },
  m36: {
    marginTop: 36,
  },
  plr: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  meter: {
    resizeMode: 'contain',
    width: '25%',
    height: 60,
  },
  textWrapper: {
    width: '75%',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    color: '#000000',
  },
  highLowPrice: {width: '100%'},
  priceText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 53,
    color: '#00946A',
  },
  highOffer: {
    color: '#000000',
    fontFamily: 'Roboto-Bold',
    fontSize: 27,
  },
  f30: {
    fontSize: 30,
  },
  mb16: {marginBottom: 16},
  assistantView: {
    flexDirection: 'column',
  },
  highestOffer: {
    marginTop: 15,
    width: '100%',
  },
  welcomeImage: {
    width: '100%',
    resizeMode: 'contain',
    height: 300,
  },
  cashEstimate: {
    backgroundColor: '#00946A',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: '#FFFFFF',
  },
  textWrapperAlone: {
    marginTop: 10,
  },
  goAlone: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
    color: '#525252',
  },
  bold: {
    fontWeight: 'bold',
  },
  testimonial: {
    width: '100%',
    resizeMode: 'contain',
    height: 160,
  },
  h200: {
    height: 200,
  },
  freeResources: {width: '100%', marginBottom: 80},
  freeResourcesText: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: '#000',
    marginBottom: 12,
  },
  des: {
    fontSize: 22,
    fontFamily: 'Roboto-Regular',
    color: '#525252',
    marginBottom: 21,
  },
  sendEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emailField: {
    borderWidth: 1,
    borderColor: '#00946A',
    borderRadius: 4,
    width: '65%',
    height: 50,
    color: '#000000',
    paddingLeft: 16,
  },
  send: {
    backgroundColor: '#000',
    width: '30%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  sendText: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#ffffff',
  },
  checkAnotherPolicy: {
    backgroundColor: '#ffffff',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    borderColor: '#707070',
    borderWidth: 1,
  },
  checkAnotherPolicyText: {
    color: '#040026',
    fontFamily: 'Roboto-Regluar',
    fontSize: 22,
  },
  last: {
    color: '#848484',
    fontFamily: 'Roboto-Regular',
    marginTop: 50,
    marginBottom: 50,
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
