import { StyleSheet } from 'react-native';
import { color_main, color_blue } from './variables';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color_main,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    icon: {
        padding : 10,
        backgroundColor : color_blue,
        borderRadius : 50
    }
  });