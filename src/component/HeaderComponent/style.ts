import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface HeaderStyle {
  headerContainer: ViewStyle;
  logo: ImageStyle;
  menuBtn: ViewStyle;
  header: ViewStyle;
  notHome: ViewStyle;
  headerTextWrapper: ViewStyle;
  headerText: TextStyle;
  italicBold: TextStyle;
}

const styles = StyleSheet.create<HeaderStyle>({
  headerContainer: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F1EEE9',
  },
  logo: {
    width: '100%',
  },
  notHome: {
    paddingTop: 22,
    paddingBottom: 22,
  },
  menuBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    paddingLeft: 0,
    paddingRight: 0,
  },
  headerTextWrapper: {
    marginTop: 20,
    marginBottom: 50,
    width: '100%',
  },
  headerText: {
    fontSize: 28,
    color: '#000000',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  italicBold: {
    fontFamily: 'Roboto-BoldItalic',
  },
});

export default styles;
