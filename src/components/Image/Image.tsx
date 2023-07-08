import React from 'react';
import {ImageStyle, PixelRatio, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ImageProps} from './types';
import {Images} from 'common';

export function Image({uri, priority, ...props}: ImageProps) {
  const source = uri ? {uri, priority} : Images.default;
  const style = getStyle(props);

  return (
    <FastImage
      {...props}
      source={source}
      // @ts-expect-error `FastImage` react-native types not compatible with react native shipped types
      style={style}
    />
  );
}

function getStyle({size, circle, style: overrideStyle}: ImageProps) {
  const sizeStyle: ImageStyle = size
    ? {
        width: size,
        aspectRatio: 1,
        borderRadius: circle
          ? PixelRatio.roundToNearestPixel(Math.floor(size / 2))
          : 0,
      }
    : {};

  return StyleSheet.flatten([sizeStyle, overrideStyle]);
}
