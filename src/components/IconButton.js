import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

export default function  IconButton({ icon, label,  onPress }) {
  return (
      <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color="#FFFFFF" />
        <Text style={styles.iconButtonLabel} >{label}</Text>
      </Pressable>
  );
}

export const styles = StyleSheet.create({
  iconButtonContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  iconButtonLabel: {
    marginTop: 12,
    backgroundColor: "#FFFFFF",
  },
});
