import React from 'react';
import {Btn, Container, Text, showToaster} from 'components';
import {LAYOUT_SPACING, moderateScale} from 'common';
import {View} from 'react-native';
import {goProfile} from 'navigation';

export const Home = () => {
  return (
    <Container
      paddingHorizontal={LAYOUT_SPACING}
      style={{viewStyle: {justifyContent: 'center'}}}>
      <Text title={'Home Screen'} style={{textAlign: 'center'}} />
      <View style={{height: moderateScale(20)}} />
      <Btn text="Go Profile" onPress={() => goProfile()} />
      <View style={{height: moderateScale(20)}} />
      <Btn
        text="Show Toaster"
        onPress={() =>
          showToaster({
            message: 'Welcome to BaseProject!',
            type: 'success',
          })
        }
      />
    </Container>
  );
};
