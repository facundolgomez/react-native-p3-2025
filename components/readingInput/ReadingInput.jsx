import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const ReadingInput = ({ onAddReading }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    onAddReading(text);
    setText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputContainer}
        placeholder="ingrese el nombre del libro"
        onChangeText={setText}
        value={text}
      />
      <View style={styles.buttonInput}>
        <Button title="Agregar lectura" onPress={handleAdd} />
      </View>
    </View>
  );
};

export default ReadingInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    marginRight: 8,
    marginVertical: 15,
    padding: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  buttonInput: {
    width: "50%",
    alignSelf: "flex-end",
  },
});
