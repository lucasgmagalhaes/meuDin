import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardProps } from "./Card.props";

export default function Card(props: CardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{formatAmount(props.amount)}</Text>
      </View>
    </TouchableOpacity>
  );

  function formatAmount(amount: number) {
    if (amount) {
      return `R$ ${amount.toFixed(2)}`;
    }
    return "R$ 0.00";
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 5,
    backgroundColor: "#fdfdfd",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 20,
    borderRadius: 4, 
    alignSelf: "stretch",
    marginVertical: 10,
  },
  titleContainer: {
    padding: 15,
    backgroundColor: "rgba(69,123,157,0.2)",
  },
  amountContainer: {
    padding: 15,
    alignItems: "flex-end",
  },
  titleText: {
    fontSize: 16,
  },
  amountText: {
      fontSize: 20
  }
});
