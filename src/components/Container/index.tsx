import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
  StyleProp,
  ScrollViewProps,
  ViewProps,
} from 'react-native';
import {scale} from 'common';
import {Spinner} from '../Spinner';
import {NoInternet} from './NoInternet';
import {useAppSelector, useColors} from 'hooks';

interface Props {
  children?: ViewProps['children'];
  scrollEnabled?: boolean;
  keyboardShouldPersistTaps?: ScrollViewProps['keyboardShouldPersistTaps'];
  loading?: boolean;
  header?: boolean;
  style?: {
    viewStyle?: StyleProp<ViewStyle>;
    scollViewStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
  };
  spinner?: JSX.Element;
  paddingHorizontal?: number;
  loadingContent?: any;
  keyboardOffset?: number;
  isWithKeyboardAvoiding?: boolean;
  footer?: JSX.Element;
}

export const Container = ({
  children,
  scrollEnabled = false,
  keyboardShouldPersistTaps,
  loading = false,
  style,
  spinner,
  paddingHorizontal,
  loadingContent,
  keyboardOffset,
  isWithKeyboardAvoiding = true,
  footer,
}: Props) => {
  const colors = useColors();
  const {network} = useAppSelector(state => state.general);
  const renderContent = () => {
    return (
      <KeyboardAvoidingView
        enabled={isWithKeyboardAvoiding}
        style={{
          flex: 1,
          backgroundColor: colors.appBg,
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={
          keyboardOffset ? keyboardOffset : Platform.OS === 'ios' ? 20 : 0
        }>
        {scrollEnabled ? (
          <ScrollView
            style={style?.scollViewStyle}
            keyboardShouldPersistTaps={keyboardShouldPersistTaps}
            contentContainerStyle={[
              style?.contentContainerStyle,
              {
                paddingHorizontal:
                  paddingHorizontal && scale(paddingHorizontal),
              },
            ]}
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        ) : (
          <View
            style={[
              styles.Container,
              {backgroundColor: colors.appBg},
              style?.viewStyle,
              {
                paddingHorizontal:
                  paddingHorizontal && scale(paddingHorizontal),
              },
            ]}>
            {children}
          </View>
        )}
        {footer}
      </KeyboardAvoidingView>
    );
  };

  const renderLoading = ({spinner}: any) => {
    return loadingContent ? (
      <View style={{flex: 1, backgroundColor: colors.white}}>
        {loadingContent}
      </View>
    ) : spinner ? (
      <View
        style={{
          paddingHorizontal: paddingHorizontal && scale(paddingHorizontal),
        }}>
        {spinner}
      </View>
    ) : (
      <Spinner mode="full" />
    );
  };
  const renderNoNetwork = () => {
    return (
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <NoInternet />
      </View>
    );
  };

  return !network ? (
    renderNoNetwork()
  ) : loading ? (
    renderLoading({spinner})
  ) : (
    <SafeAreaView style={{flex: 1}}>{renderContent()}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
  },
  Container: {
    flex: 1,
    flexGrow: 1,
  },
});
