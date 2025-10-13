import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese el nombre del libro "
        />
        <View style={styles.buttonInput}>
          <Button title="Agregar lectura" />
        </View>
      </View>
      <View>
        <Text>Lista de lecturas...</Text>
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
});
