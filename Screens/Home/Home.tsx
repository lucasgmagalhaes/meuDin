import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Card from "../../Card/Card";
import { HomeProps } from "./Home.props";

export default function Home(props: HomeProps) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.appName}>MeuDin</Text>
      <View style={styles.container}>
        <Card amount={0} onClick={() => {}} title={"Meu Saldo Atual"} />
        <Card amount={0} onClick={() => {}} title={"Contas a Receber"} />
        <Card amount={0} onClick={() => {}} title={"Contas a Pagar"} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("AddAccount");
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 20,
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 50,
    alignItems: "center",
  },
  appName: {
    fontSize: 22,
  },
  button: {
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: 80,
    height: 80,
    backgroundColor: "#6062f5",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
  buttonText: {
    fontSize: 40,
    color: "#fff",
  },
});
