import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViewer from "./src/components/ImageViewer";
import Button from "./src/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import IconButton from "./src/components/IconButton";
import CircleButton from "./src/components/CircleButton";
import EmojiPicker from "./src/components/EmojiPicker";
import EmojiList from "./src/components/EmojiList";
import EmojiSticker from "./src/components/EmojiSticker";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, steShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      steShowAppOptions(true);
    } else {
      alert("Você não selecionou nenhuma imagem");
    }
  };

  const onReset = () => {
    steShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  
  const onModalClose = () => {
    setIsModalVisible(false);
  };
  
  const onSaveImageAsync = async () => {};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer} >
          <View style={styles.optionsRow} >
            <IconButton icon="refresh" label="Reset" onPress={onReset} />

            <CircleButton onPress={onAddSticker} />

            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Escolher uma foto"
            onPress={pickImageAsync}
          />
          <Button
            label="Use esta foto"
            onPress={() => steShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} >
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292E",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },

  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
