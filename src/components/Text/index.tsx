import React from 'react';
import {
  StyleSheet,
  Text as TextRN,
  TextProps,
  TextStyle,
  StyleProp,
} from 'react-native';
import {fonts, fontSize as defaultFontSize, ColorType} from 'common';
import {useColors} from 'hooks';

type FontWeight = 'bold' | 'normal';
export interface Props extends TextProps {
  title?: string;
  baseEnthusiasmLevel?: number;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  fontSize?: number;
  fontWeight?: FontWeight;
  color?: ColorType;
}

export const Text = ({
  title,
  style,
  numberOfLines,
  fontSize,
  fontWeight = 'normal',
  color,
  ...props
}: Props) => {
  const colors = useColors();
  const styles = StyleSheet.create({
    text: {
      fontSize: fontSize ? defaultFontSize(fontSize) : defaultFontSize(15),
      color: color ? colors[color] : colors.black,
      fontFamily: fontWeight === 'bold' ? fonts.bold : fonts.regular,
      textAlign: 'left',
    },
  });
  return (
    <TextRN
      style={[styles.text, style]}
      numberOfLines={numberOfLines || 100}
      {...props}>
      {title}
    </TextRN>
  );
};
