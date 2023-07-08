import React, {useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {fonts, IS_IOS, COLORS, moderateScale, scale, Lotties} from 'common';
import {Text} from '../Text';
import {Lottie} from '../Lottie';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ColorTheme} from 'react-native-flash-message';
import {MessageComponentProps} from 'react-native-flash-message';

const ColorThemeValues = {
  success: '#5cb85c',
  info: '#5bc0de',
  warning: '#f0ad4e',
  danger: '#d9534f',
};

export const Toaster = ({statusBarHeight = true, ...props}) => {
  const insents = useSafeAreaInsets();
  const customToaster = useCallback((values: MessageComponentProps) => {
    const {message, titleStyle, textStyle} = values;

    return (
      <View
        style={{
          backgroundColor:
            message?.type == 'danger'
              ? ColorThemeValues?.danger
              : ColorThemeValues?.success,
          padding: scale(10),
          paddingTop: IS_IOS
            ? insents.top + scale(10)
            : !statusBarHeight
            ? 0
            : scale(10),
        }}>
        <View style={styles.row}>
          <Lottie
            source={
              message?.type == 'danger' ? Lotties.failed : Lotties.succeed
            }
            style={styles.lottie}
            loop={false}
          />
          {message?.message ? (
            <Text style={titleStyle} title={message?.message} />
          ) : null}
        </View>
        {message?.description && (
          <Text style={textStyle} title={message?.description} />
        )}
      </View>
    );
  }, []);
  return useMemo(() => {
    return (
      <FlashMessage
        position={'top'}
        titleStyle={styles.titleStyle}
        textStyle={styles.descriptionStyle}
        statusBarHeight={insents.top}
        MessageComponent={customToaster}
        {...props}
      />
    );
  }, [props]);
};

interface showProps {
  message: string;
  description?: string;
  type?: keyof ColorTheme;
  duration?: number;
}
export const showToaster = ({
  message,
  description,
  type = 'danger',
  duration = 3000,
}: showProps) =>
  showMessage({
    message: message,
    description: description,
    type: type,
    duration,
  });

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(14),
    color: COLORS.white,
    flex: 1,
    flexWrap: 'wrap',
  },
  descriptionStyle: {
    fontFamily: fonts.regular,
    alignSelf: 'flex-start',
    fontSize: moderateScale(13),
    color: COLORS.white,
  },
  lottie: {
    width: moderateScale(50),
    height: moderateScale(50),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
