import {ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
type HomeNavigationProps = DrawerNavigationProp<ParamListBase, 'Home'>;

export interface HomeProps {
  route: any;
  navigation: HomeNavigationProps;
}
