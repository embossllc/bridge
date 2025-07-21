import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface HomeStyle {
  welcomeImageWrapper: ViewStyle;
  assistantView: ViewStyle;
  welcomeImage: ImageStyle;
  newPolicyWrapper: ViewStyle;
  newPolicy: TextStyle;
  bellowContextWrapper: ViewStyle;
  checkboxImgWrapper: ViewStyle;
  checkboxImg: ImageStyle;
  cashEstimate: ViewStyle;
  btnText: TextStyle;
  readTime: ViewStyle;
  readTimeText: TextStyle;
  lifeSettlement: ViewStyle;
  title: TextStyle;
  info: TextStyle;
  PAText: TextStyle;
  contaceBridge: ViewStyle;
  benefits: TextStyle;
  copyright: TextStyle;
}

const styles = StyleSheet.create<HomeStyle>({
  welcomeImageWrapper: {
    bottom: 65,
  },
  assistantView: {
    flexDirection: 'column',
  },
  welcomeImage: {
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    height: 300,
  },
  newPolicyWrapper: {
    // paddingLeft: 8,
    // paddingRight: 8,
  },
  newPolicy: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  bellowContextWrapper: {
    bottom: 70,
    marginLeft: 15,
    marginRight: 15,
  },
  checkboxImgWrapper: {
    marginBottom: 13,
    marginTop: 13,
  },
  checkboxImg: {
    width: '100%',
    //resizeMode: 'contain',
    alignSelf: 'flex-start',
    height: 50,
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
  readTime: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11,
    marginBottom: 51,
  },
  readTimeText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  lifeSettlement: {
    marginBottom: 27,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    marginBottom: 12,
  },
  info: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
    color: '#525252',
  },
  PAText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
    marginBottom: 12,
    color: '#525252',
  },
  contaceBridge: {
    backgroundColor: '#000000',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 38,
  },
  benefits: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#848484',
    marginTop: 44,

    marginBottom: 50,
  },
  copyright: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
  },
});

export default styles;
