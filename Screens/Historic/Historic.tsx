import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { formatMoney } from "../../moneyFormatter";
import { HistoricProps } from "./historic.props";

export default function Historic(props: HistoricProps) {
  props = props.route.params;
  return (
    <View style={styles.container}>
      <FlatList
        style={{ alignSelf: "stretch", padding: 20 }}
        data={props.bills}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              props.navigation.navigate("AddAccount", { id: item.id });
            }}
          >
            <Text>{item.description}</Text>
            <Text>{formatMoney(item.value)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  item: {
    padding: 20,
    elevation: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "#fdfdfd",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 2,
    flex: 1,
    marginVertical: 10,
  },
});
