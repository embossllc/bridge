import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type AnalyzingNavigationProp = NativeStackNavigationProp<
  ParamListBase,
  'Analyzing'
>;

export interface AnalyzingProp {
  route: any;
  navigation: AnalyzingNavigationProp;
}
