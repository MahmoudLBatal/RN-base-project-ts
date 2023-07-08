import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {CommonStyle, moderateScale, fontSize, ColorsInterface} from 'common';
import {Text} from 'components';
import {useColors} from 'hooks';

interface Props {
  text: string;
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  loaderColor?: string;
  disable?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  secondStyle?: boolean;
  transparent?: boolean;
}
export const Btn = ({
  text,
  textStyle,
  btnStyle,
  loading = false,
  loaderColor,
  disable = false,
  containerStyle,
  secondStyle,
  transparent = false,
  ...props
}: Props) => {
  const colors = useColors();
  return (
    <View style={containerStyle}>
      {disable ? (
        <View style={[styles(colors).ownStyle, styles().disableBtn, btnStyle]}>
          <Text style={[styles(colors).btnS, textStyle]} title={text} />
        </View>
      ) : loading ? (
        <TouchableOpacity style={{...CommonStyle.shadow}}>
          <View
            style={[
              styles(colors).ownStyle,
              secondStyle && styles(colors).secondStyle,
              btnStyle,
              transparent && {backgroundColor: 'transparent'},
            ]}>
            <ActivityIndicator
              size={moderateScale(22)}
              color={loaderColor || secondStyle ? colors.black : colors.white}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <View>
          <TouchableOpacity
            style={[
              {...CommonStyle.shadow},
              styles(colors).ownStyle,
              secondStyle && styles(colors).secondStyle,
              btnStyle,
              transparent && {backgroundColor: 'transparent'},
            ]}
            activeOpacity={0.85}
            {...props}>
            <Text
              style={[
                styles(colors).btnS,
                secondStyle && styles(colors).secondText,
                textStyle,
                transparent && {color: colors.black2},
              ]}
              title={text}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = (colors?: ColorsInterface) =>
  StyleSheet.create({
    ownStyle: {
      backgroundColor: colors?.main,
      borderRadius: moderateScale(57 / 2),
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: moderateScale(13),
      width: '100%',
      alignSelf: 'center',
      minHeight: moderateScale(57),
      maxHeight: moderateScale(65),
      overflow: 'hidden',
    },
    btnS: {
      color: colors?.white,
      fontSize: fontSize(15),
    },
    disableBtn: {
      opacity: 0.5,
    },
    secondStyle: {
      backgroundColor: colors?.white,
      borderWidth: 1,
      borderColor: colors?.main,
    },
    secondText: {
      color: colors?.main,
    },
  });
