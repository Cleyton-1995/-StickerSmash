import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViewer from "./src/components/ImageViewer";
import Button from "./src/components/Button";
import { launchImageLibraryAsync } from "expo-image-picker";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const pickIamgeAsync = async () => {
    let result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert("Você não selecionou nenhuma imagem");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>

      <View>
        <Button theme="primary" label="Escolher uma foto" />
        <Button label="Use esta foto" />
      </View>
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
});
