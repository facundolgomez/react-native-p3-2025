import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";
import ReadingInput from "./components/readingInput/ReadingInput";
import ReadingList from "./components/readingList/ReadingList";
export default function App() {
  const [readings, setReadings] = useState([]);

  const handleAddReading = (text) => {
    setReadings((prevReadings) => [
      ...prevReadings,
      { id: Math.random().toString(), text },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <ReadingInput onAddReading={handleAddReading} />
      <View>
        <Text style={styles.title}>Lista de lecturas...</Text>
      </View>
      <ReadingList readings={readings} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
  },
  title: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
