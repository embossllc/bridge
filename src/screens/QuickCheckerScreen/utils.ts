import {ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
type QuickCheckerNavigationProp = DrawerNavigationProp<
  ParamListBase,
  'QuickChecker'
>;

export interface QuickCheckerProp {
  route: any;
  navigation: QuickCheckerNavigationProp;
}
