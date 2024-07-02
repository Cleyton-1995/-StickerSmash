import { Modal, Text, StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Procurar um sticker</Text>
          <Pressable onPress={onClose} >
            <MaterialIcons name="close" color="#FFFFFF" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

export const styles = StyleSheet.create({
  modalContainer: {
   height: "25%",
   width: "100%",
   backgroundColor: "#25292E",
   borderTopRightRadius: 18,
   borderTopLeftRadius: 18,
   position: "absolute",
   bottom: "0",
  },
  titleContainer: {
   height: "16%",
   backgroundColor: "#464C55",
   borderTopRightRadius: 10,
   borderTopLeftRadius: 10,
   paddingHorizontal: 20,
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-between",
  },
  title: {
   color: "#FFFFFF",
   fontSize: 16,
  },
});
