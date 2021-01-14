import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  messageContainerStyle: {
    alignSelf: 'flex-end',
    marginBottom: 16,
    paddingLeft: 16,
    maxWidth: '65%',
    position: 'relative',
    flexDirection: 'column',
    flexShrink: 0,
  },
  messageWrapperStyle: {
    width: '100%',
    alignSelf: 'flex-end',
  },
  messageInfoWrapperStyle: {
    alignSelf: 'flex-end',
  },
  messageImgWrapper: {
    alignSelf: 'flex-end',
    width: 128,
    height: 128,
    padding: 2,
  },
});