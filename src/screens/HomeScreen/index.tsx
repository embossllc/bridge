import {View, Image, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import HeaderComponent from '../../component/HeaderComponent';

import sharedStyles from '../../shared/sharedStyles';
import {HomeProps} from './utils';
import styles from './styles';
// import Arrow from 'react-native-vector-icons/Feather';
import PersonalAssistance from '../../component/PersonalAssistance';
import FooterYear from '../../component/FooterYear';
//import styles from './style';
const HomeScreen = (props: HomeProps) => {
  const {navigation} = props;

  const toQuicker = () => navigation.navigate('QuickChecker');
  const drawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={sharedStyles.container}>
      {/* <ScrollView contentContainerStyle={sharedStyles.container}> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <HeaderComponent
          value="How Much Is Your Life Insurance Really Worth?"
          onPressDrawer={drawer}
        />

        <View style={sharedStyles.contentWrapper}>
          <View style={styles.welcomeImageWrapper}>
            <Image
              source={require('../../../assets/images/Welcome-img.png')}
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.bellowContextWrapper}>
            <View style={styles.newPolicyWrapper}>
              <Text style={{...sharedStyles.textCol, ...styles.newPolicy}}>
                Quickly Qualify & Appraise Any Policy For The Highest Cash
                Offers Now!
              </Text>
            </View>
            <View style={styles.checkboxImgWrapper}>
              <Image
                source={require('../../../assets/images/valulife-checklist.png')}
                style={styles.checkboxImg}
              />
            </View>
            <Pressable style={styles.cashEstimate} onPress={toQuicker}>
              <Text style={styles.btnText}>Get A Free Cash Estimate</Text>
            </Pressable>
            <View style={styles.readTime}>
              <Text style={{...sharedStyles.textCol, ...styles.readTimeText}}>
                3-5 min
              </Text>
            </View>
            <View style={styles.lifeSettlement}>
              <Text style={{...styles.title, ...sharedStyles.textCol}}>
                What’s a Life Settlement?
              </Text>
              <Text style={styles.info}>
                A life settlement is the sale of an existing life insurance
                policy to an investment group (called Providers). The proceeds
                of the sale are typically higher than the cash surrender value
                but less than the Death Benefit. This includes; Term, Whole and
                Universal Life policies. Life Settlements are a safe, federally
                regulated alternative to lapsing, surrendering or exchanging
                one’s policy.
              </Text>
              <Text style={styles.info}>
                A Viatical Settlement is similar in nature but reserved for
                people with a critical or chronic illness of any age.
              </Text>
              <Text style={styles.info}>
                Talk to your tax professional for any additional benefits.
              </Text>
              <Text style={{...styles.title, ...sharedStyles.textCol}}>
                Why Consider It?
              </Text>
              <Text style={styles.info}>
                Seniors need money more than ever. Life insurance often becomes
                a financial burden or no longer needed. Meanwhile, life
                insurance carriers reap all the benefits. Selling a life
                insurance policy on the secondary market can help fund
                retirement, pay bills, and save legacies while still leaving a
                nest-egg for your beneficiaries.
              </Text>
              <Text style={{...styles.title, ...sharedStyles.textCol}}>
                Provider vs Broker
              </Text>
              <Text style={styles.info}>
                Providers are licensed, third-party buyers of life insurance
                with no fiduciary duty to the client.
              </Text>
              <Text style={styles.info}>
                A Broker is a licensed fiduciary on behalf of the client.
                Brokers earn a commission of the sale only if the seller accepts
                an offer.
              </Text>
              <Text style={styles.info}>
                Brokers help facilitate the underwriting, title and transaction
                on behalf of the seller and buyer.
              </Text>
              <Text style={styles.info}>
                Brokers can save clients time and energy by streamlining the
                application process while negotiating with multiple Providers to
                obtain the highest offer.
              </Text>
              {/* <Text style={{...styles.title, ...sharedStyles.textCol}}>
                Get Personal Assistance
              </Text>
              <Text style={{...styles.PAText, ...sharedStyles.textCol}}>
                Contact a Life Settlement Broker for a Risk-Free Consultation
                Today.
              </Text> */}
              <PersonalAssistance page="quickcheck" final="" />
              <Text style={{...styles.title, ...sharedStyles.textCol}}>
                About Us
              </Text>
              <Text style={styles.info}>
                ValuLife is a free quoting app powered by Bridge Insurance
                Group, LLC, an unbiased, unaffiliated, non-captive, non-company
                owned, independent and licensed, life & viatical settlement
                broker.
              </Text>
              <Text style={styles.benefits}>
                ValuLife and BigSeniorBenfits.com is a subsidiary of Bridge
                Insurance Group, LLC (Bridge) a licensed Life/Viatical
                Settlement Brokerage. Services may not be available in all
                states. Some state regulations interchange “viatical settlement”
                and “life settlement” to describe all transactions, regardless
                of the health of the insured, involving the sale of an existing
                life insurance policy to a third party. There is no guarantee
                that every user will receive an offer. ValuLife and ValuLifePro
                are tools intended to assist Bridge in the evaluation and
                qualification of life insurance policies. Policy Appraisal and
                any and all related estimates shall be used for illustrative
                purposes only. No representation or warranty, expressed or
                implied, is made as to the accuracy, reliability or completeness
                of the results of the estimates or any assumption on which any
                conclusion is based. By using this app you agree with our terms
                of service and may be contacted by Bridge. Please refer to
                https://AskBridge.com for more information. Offers and sale are
                not guaranteed. For illustrative purposes only.
              </Text>
              <FooterYear />
              <Text style={styles.copyright}>All rights reserved.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* </ScrollView> */}
    </View>
  );
};

export default HomeScreen;
