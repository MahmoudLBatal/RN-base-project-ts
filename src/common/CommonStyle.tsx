import {Platform} from 'react-native';

export const CommonStyle = {
  shadow: {
    shadowColor:
      Platform.OS == 'ios' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.33)',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.58,
    shadowRadius: 10,
    ...Platform.select({
      ios: {
        elevation: 1,
      },
      android: {
        elevation: 3,
        shadowColor: 'rgba(0, 0, 0, 0.33)',
      },
    }),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};
