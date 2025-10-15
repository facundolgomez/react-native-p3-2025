import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [text, setText] = useState("");
  const [readings, setReadings] = useState([]);
  const handleReadingInput = (enteredText) => {
    setText(enteredText);
  };
  const handleAddReading = () => {
    setReadings((prevReadings) => [...prevReadings, text]);
  };

  const mappedReadings = readings.map((reading) => {
    return (
      <Text style={styles.readingItem} key={reading}>
        {" "}
        {reading}
      </Text>
    );
  });
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese el nombre del libro "
          onChangeText={handleReadingInput}
        />
        <View style={styles.buttonInput}>
          <Button title="Agregar lectura" onPress={handleAddReading} />
        </View>
      </View>
      <View>
        <Text>Lista de lecturas...</Text>
      </View>
      <View>
        <ScrollView>{mappedReadings}</ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
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
  readingItem: {
    margin: 12,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "green",
    color: "white",
  },
});
