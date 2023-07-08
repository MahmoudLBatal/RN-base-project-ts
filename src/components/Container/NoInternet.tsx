import React from 'react';
import {StyleSheet, View} from 'react-native';
import {fonts, moderateScale, Lotties, fontSize, ColorsInterface} from 'common';
import {Text} from '../Text';
import {t} from 'locale';
import {useColors} from 'hooks';
import {Lottie} from '../Lottie';

export const NoInternet = () => {
  const colors = useColors();
  return (
    <View style={styles(colors).container}>
      <View
        style={{height: moderateScale(300), marginTop: moderateScale(-100)}}>
        <Lottie source={Lotties.noInternet} style={styles(colors).lottie} />
      </View>
      <Text title={t('noInternet')} style={styles(colors).text} />
    </View>
  );
};

const styles = (colors: ColorsInterface) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexGrow: 1,
      backgroundColor: colors.white,
    },
    text: {
      fontSize: fontSize(17),
      color: colors.blackLight,
      textAlign: 'center',
      width: '80%',
      alignSelf: 'center',
      marginTop: moderateScale(27),
      fontFamily: fonts.bold,
    },
    lottie: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: colors?.white,
    },
  });
