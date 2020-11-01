import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Card from "../../Card/Card";
import storage from "../../storage";
import { Bill, BillType } from "../Screen.props";
import { HomeProps } from "./Home.props";

export default function Home(props: HomeProps) {
  const [bills, setBills] = useState<Bill[]>([]);

  useEffect(() => {
    storage.findAll().then((values) => {
      setBills(values);
    });
  });

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.appName}>MeuDin</Text>
      <View style={styles.container}>
        <Card
          amount={calcAmount(filterByType(BillType.CONTAS_ATUAIS))}
          onClick={() => {
            navigateToHistoric(BillType.CONTAS_ATUAIS);
          }}
          title={"Meu Saldo Atual"}
        />
        <Card
          amount={calcAmount(filterByType(BillType.CONTAS_RECEBER))}
          onClick={() => {
            navigateToHistoric(BillType.CONTAS_RECEBER);
          }}
          title={"Contas a Receber"}
        />
        <Card
          amount={calcAmount(filterByType(BillType.CONTAS_PAGAR))}
          onClick={() => {
            navigateToHistoric(BillType.CONTAS_PAGAR);
          }}
          title={"Contas a Pagar"}
        />
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

  function navigateToHistoric(billType: BillType) {
    const _bills = filterByType(billType);
    props.navigation.navigate("historic", {
      bills: _bills,
    });
  }

  function filterByType(type: BillType) {
    return bills.filter((b) => b.type === type);
  }

  function calcAmount(bills: Bill[]) {
    return bills.reduce((b1, b2) => b1 + b2.value, 0);
  }
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
