import React from 'react';
import {Btn, Container, Text} from 'components';
import {LAYOUT_SPACING, moderateScale} from 'common';
import {View} from 'react-native';
import {goPopTop} from 'navigation';

export const Profile = () => {
  return (
    <Container
      paddingHorizontal={LAYOUT_SPACING}
      style={{viewStyle: {justifyContent: 'center'}}}>
      <Text title={'Profile Screen'} style={{textAlign: 'center'}} />
      <View style={{height: moderateScale(20)}} />
      <Btn text="Go Back" onPress={() => goPopTop()} />
    </Container>
  );
};
