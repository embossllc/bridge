import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
interface sharedStyleTypes {
  container: ViewStyle;
  textCol: TextStyle;
  textColNew: TextStyle;
  headerContainer: ViewStyle;
  contentWrapper: ViewStyle;
  contentContainer: ViewStyle;
}
const sharedStyles = StyleSheet.create<sharedStyleTypes>({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    //paddingBottom: 24,
  },
  textCol: {
    color: '#000000',
  },
  textColNew: {
    color: '#525252',
  },
  headerContainer: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F1EEE9',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default sharedStyles;
