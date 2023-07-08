module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          components: ['./src/components/index'],
          hooks: ['./src/hooks/index'],
          common: ['./src/common/index'],
          navigation: ['./src/navigation/index'],
          locale: ['./src/locale/index'],
          store: ['./src/store/index'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
