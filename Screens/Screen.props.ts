import { NavigationContext, NavigationProp } from "@react-navigation/native";
import { NavigationStackProp } from "react-navigation-stack";

export interface ScreenProps {
  navigation: NavigationProp<any>;
}

export interface Bill {
  id: string;
  type: BillType;
  value: number;
  date: string;
  description: string;
}

export enum BillType {
  CONTAS_ATUAIS = 1,
  CONTAS_RECEBER = 2,
  CONTAS_PAGAR = 3,
}
