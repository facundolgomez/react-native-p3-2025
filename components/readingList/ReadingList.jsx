import { StyleSheet, Text, View, FlatList } from "react-native";
const ReadingList = ({ readings }) => {
  const renderReadingItem = (itemData) => {
    return <Text style={styles.readingItem}>{itemData.item.text}</Text>;
  };

  return (
    <View>
      <FlatList
        data={readings}
        renderItem={renderReadingItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default ReadingList;

const styles = StyleSheet.create({
  readingItem: {
    margin: 12,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "green",
    color: "white",
  },
});
