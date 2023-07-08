import {createSlice} from '@reduxjs/toolkit';
import {I18nManager} from 'react-native';
import i18n from 'locale';

interface InitStateTypes {
  lang?: string | null;
  network?: boolean;
  introSeen?: boolean;
  colorMode: string | null;
  devicePushToken: string | null;
}
const generalSlice = createSlice({
  name: 'general',
  initialState: {
    lang: null,
    network: true,
    introSeen: false,
    colorMode: null,
    devicePushToken: null,
  } as InitStateTypes,
  // reducers actions that change the reducer state
  reducers: {
    setLang(state, action) {
      const {currentLang, restart = false} = action?.payload;
      state.lang = currentLang;
      i18n.locale = currentLang;
      I18nManager.allowRTL(currentLang === 'ar');
      I18nManager.forceRTL(currentLang === 'ar');
      // restart && setTimeout(() => CodePush?.restartApp(), 400);
    },
    setNetwork(state, action) {
      state.network = action.payload;
    },
    setIntroSeen(state) {
      state.introSeen = true;
    },
    setColorMode(state, action) {
      state.colorMode = action.payload;
    },
  },
});

// Export the actions from slice reducer actions
export const {setLang, setNetwork, setIntroSeen, setColorMode} =
  generalSlice.actions;

export default generalSlice.reducer;
