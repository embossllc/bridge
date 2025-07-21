import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
interface PersonalAssistanceStyle {
  assistantView: ViewStyle;
  welcomeImage: ImageStyle;
  contaceBridge: ViewStyle;
  btnText: TextStyle;
  title: TextStyle;
  PAText: TextStyle;
}
const styles = StyleSheet.create<PersonalAssistanceStyle>({
  assistantView: {
    flexDirection: 'column',
  },
  welcomeImage: {
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    height: 300,
  },
  contaceBridge: {
    backgroundColor: '#000000',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 25,
  },
  btnText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: '#FFFFFF',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 27,
    marginBottom: 12,
  },
  PAText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    marginBottom: 12,
    lineHeight: 25,
    color: '#525252',
  },
});
export default styles;
