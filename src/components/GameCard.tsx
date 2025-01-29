import { StyleSheet, View, Text } from 'react-native';
import colors from '../constants/colors';
import Button from './Button';

interface GameCardProps {
  title: string;
  description: string;
  onPlay: () => void;
}

export default function GameCard({ title, description, onPlay }: GameCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button title="今すぐ遊ぶ" onPress={onPlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.primary,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
    marginBottom: 15,
  },
});