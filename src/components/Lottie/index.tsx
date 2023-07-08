import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale, Lotties} from 'common';
import LottieView, {AnimatedLottieViewProps} from 'lottie-react-native';

interface Props {
  source?: AnimatedLottieViewProps['source'];
  style?: AnimatedLottieViewProps['style'];
  loop?: AnimatedLottieViewProps['loop'];
}

export const Lottie = ({source, style, ...props}: Props) => {
  return (
    <LottieView
      autoPlay={true}
      source={source || Lotties.noInternet}
      loop
      style={[styles.lottie, style]}
      autoSize={false}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: moderateScale(24),
    height: '100%',
  },
});
