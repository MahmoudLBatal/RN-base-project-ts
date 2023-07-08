import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  ActivityIndicatorProps,
} from 'react-native';
import {COLORS, width, height, moderateScale} from 'common';
import {useColors} from 'hooks';

const SIZES = {SMALL: 'small', LARGE: 'large'};

interface Props {
  size?: ActivityIndicatorProps['size'];
  color?: ActivityIndicatorProps['color'];
  mode?: 'normal' | 'full' | 'overlay';
}

export const Mode = {normal: 'normal', full: 'full', overlay: 'overlay'};

export const Spinner = ({size, color, mode}: Props) => {
  const colors = useColors();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors?.white,
    },
    container_full_stretch: {
      flexGrow: 1,
      backgroundColor: colors?.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container_overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width,
      height,
      backgroundColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      backgroundColor: colors.white,
      zIndex: 100,
    },
  });
  let containerStyle = styles.container;
  switch (mode) {
    case Mode.full:
      containerStyle = styles.container_full_stretch;
      break;
    case Mode.overlay:
      containerStyle = styles.container_overlay;
      break;
  }
  return (
    <View style={containerStyle}>
      <ActivityIndicator
        size={size}
        color={color}
        style={[
          styles.wrapper,
          {
            borderRadius:
              size == SIZES.SMALL ? moderateScale(10) : moderateScale(20),
          },
        ]}
      />
    </View>
  );
};

Spinner.defaultProps = {
  color: COLORS.main,
  size: 'large',
  mode: Mode.normal,
};
