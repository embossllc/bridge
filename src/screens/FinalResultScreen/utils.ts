import {ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
type FinalResultNavigationProp = DrawerNavigationProp<
  ParamListBase,
  'FinalResult'
>;

export interface FinalResultProp {
  route: any;
  navigation: FinalResultNavigationProp;
}
