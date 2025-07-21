import {ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
type ResultScreenNavigationProp = DrawerNavigationProp<
  ParamListBase,
  'ResultScreen'
>;

export interface ResultScreenProp {
  route: any;
  navigation: ResultScreenNavigationProp;
}
