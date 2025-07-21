import {
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
  // TextInput,
  Linking,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import styles from './styles';
import sharedStyles from '../../shared/sharedStyles';
import {FinalResultProp} from './utils';
import PersonalAssistance from '../../component/PersonalAssistance';
import Arrow from 'react-native-vector-icons/Feather';
import moment from 'moment';
const FinalResultScreen = (props: FinalResultProp) => {
  const {navigation} = props;
  let data = JSON.parse(props.route.params.data);
  // const [email, setEmail] = useState('');
  const cashOffer = () => {
    Linking.openURL('https://q.cr/vlifeoffer');
  };
  const drawer = () => {
    navigation.openDrawer();
  };
  const toQuickChecker = () => {
    navigation.navigate('QuickChecker');
  };
  return (
    <View style={sharedStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={sharedStyles.headerContainer}>
          <HeaderComponent
            value="My Free Cash Estimate"
            onPressDrawer={drawer}
          />
        </View>
        <View style={sharedStyles.contentContainer}>
          <View style={styles.quickChekerTop}>
            <View style={styles.textWrapper}>
              <Text style={{...styles.text, ...sharedStyles.textCol}}>
                Potential Offer Range*
              </Text>
            </View>
            <Image
              source={require('../../../assets/images/positive-result-meter.jpg')}
              style={styles.meter}
            />
          </View>
          <View style={styles.highLowPrice}>
            <Text style={styles.priceText}>
              ${data.lowRange.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} to $
              {data.highRange.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </Text>
          </View>
          <View style={styles.highLowPrice}>
            <Text style={styles.highOffer}>Highest Offer Guaranteed**</Text>
          </View>
          <View style={styles.assistantView}>
            <Image
              source={require('../../../assets/images/Check-Cash.png')}
              style={styles.welcomeImage}
            />
          </View>
          <Pressable style={styles.cashEstimate} onPress={cashOffer}>
            <Text style={styles.btnText}>
              Get Cash Offers Now
              <Arrow name="arrow-up-right" size={25} />
            </Text>
          </Pressable>
          {/* <View style={styles.textWrapperAlone}>
            <Text style={{...sharedStyles.textCol, ...styles.goAlone}}>
              <Text style={styles.bold}>Don’t go alone.</Text> As a fiduciary,
              we can help you save time and energy by streamlining your
              application process. We negotiate with the top Providers in the
              industry to get you the highest cash payout guaranteed.
            </Text>
          </View> */}

          <View style={styles.assistantView}>
            <Image
              source={require('../../../assets/images/testimonial.png')}
              style={styles.testimonial}
            />
          </View>
          {/* <View style={styles.freeResources}>
            <Text style={styles.freeResourcesText}>Free Resources</Text>
            <Text style={styles.des}>
              Email this estimate along with a free Life Settlement Seller Kit.
            </Text>
            <View style={styles.sendEmail}>
              <TextInput
                style={styles.emailField}
                placeholderTextColor="#00000099"
                placeholder="Enter Email Address"
                onChangeText={text => setEmail(text)}
              />
              <Pressable style={styles.send}>
                <Text style={styles.sendText}>Send</Text>
              </Pressable>
            </View>
          </View> */}
          <View style={styles.highLowPrice}>
            <Text style={styles.highOffer}>Highest Offer Guaranteed**</Text>
          </View>
          <View style={styles.textWrapperAlone}>
            <Text style={{...sharedStyles.textCol, ...styles.goAlone}}>
              Get more offers. As a broker, it’s our fiduciary duty to get the
              highest offers by comparing top providers using competitive
              bidding. We represent you, not the buyers!
            </Text>
          </View>
          <View style={styles.highestOffer}>
            <Image
              source={require('../../../assets/images/providers2.jpg')}
              style={{...styles.testimonial, ...styles.h200}}
            />
          </View>
          <View style={{...styles.highLowPrice, ...styles.m36}}>
            <Text style={{...styles.highOffer, ...styles.f30}}>Next Steps</Text>
          </View>
          <View style={styles.lsimg}>
            <Image
              source={require('../../../assets/images/LS-Steps.png')}
              style={styles.lsimgmain}
            />
          </View>
          <Pressable style={styles.cashEstimate} onPress={cashOffer}>
            <Text style={styles.btnText}>
              Get Cash Offers Now
              <Arrow name="arrow-up-right" size={25} />
            </Text>
          </Pressable>
          <View style={{...styles.highLowPrice, ...styles.mt47}}>
            <Text style={styles.highOffer}>Why a Price Range?</Text>
          </View>
          <View style={styles.textWrapperAlone}>
            <Text
              style={{
                ...sharedStyles.textCol,
                ...styles.goAlone,
                ...styles.mb16,
              }}>
              Every case is unique and so are the preferences of each buyer. The
              policy characteristics, health and age of the insured determine
              the offers. In order to get a more accurate estimate, additional
              information is required for underwriting. This is true for every
              company (provider or broker). Click the green button to learn
              more.
            </Text>
          </View>
          <PersonalAssistance page="quickcheck" final="final" />
          <Pressable style={styles.checkAnotherPolicy} onPress={toQuickChecker}>
            <Text style={styles.checkAnotherPolicyText}>
              Check Another Policy
            </Text>
          </Pressable>
          <Text style={styles.last}>
            ValuLife and BigSeniorBenfits.com is a subsidary of Bridge Insurance
            Group, LLC (Bridge) a licensed Life/ Viatical Settlement Brokerage.
            Services may not be available in all states. *For illustrative
            purposes only. **Offers may not be guaranteed.
          </Text>
          <Text style={styles.copyright}>
            © {moment().year()} Bridge Insurance Group, LLC.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FinalResultScreen;
