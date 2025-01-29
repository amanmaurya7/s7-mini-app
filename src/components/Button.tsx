import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../constants/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'filled' | 'outlined';
}

export default function Button({ title, onPress, variant = 'filled' }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        variant === 'outlined' && styles.buttonOutlined
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.buttonText,
        variant === 'outlined' && styles.buttonTextOutlined
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonOutlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextOutlined: {
    color: colors.primary,
  },
});