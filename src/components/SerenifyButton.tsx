import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import COLORS from '../utils/COLORS';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';

interface SerenifyButtonProps {
  children?: React.ReactNode;
  secondary?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void; // Add the onPress prop here
}

const SerenifyButton: React.FC<SerenifyButtonProps> = ({ children, secondary, style, onPress }) => {
  let backgroundColor = COLORS.PRIMARY_COLOR;
  if (secondary) backgroundColor = COLORS.SECONDARY_COLOR;

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress} // Add the onPress handler here
      style={[
        styles.button,
        { backgroundColor },
        style
      ]}
    >
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default SerenifyButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    margin: 10,
    height: 60,
    width: SCREEN_WIDTH * 0.40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.TEXT_COLOR,
    fontSize: 20,
    fontWeight: '500',
  },
});
