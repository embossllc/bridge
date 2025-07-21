import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
interface AnalyzingStyle {
  analyzeContainer: ViewStyle;
  analyzing: TextStyle;
}
const styles = StyleSheet.create<AnalyzingStyle>({
  analyzeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1EEE9',
  },
  analyzing: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    marginBottom: 30,
    color: '#000000',
  },
});
export default styles;
