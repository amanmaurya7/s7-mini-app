import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import colors from "../constants/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "filled" | "outlined";
  Icon?: React.ComponentType;
}

export default function Button({
  title,
  onPress,
  variant = "filled",
  Icon,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "outlined" && styles.buttonOutlined]}
      onPress={onPress}
    >
      {Icon && <Icon />}
      <View style={{ flex: 1 }}>
        <Text
          style={[
            styles.buttonText,
            variant === "outlined" && styles.buttonTextOutlined,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonOutlined: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
    flexDirection: "row",
    width: "100%",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
    width: "100%",
    textAlign: "center",
  },
  buttonTextOutlined: {
    color: colors.primary,
  },
});
