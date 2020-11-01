import { NavigationScreenProp } from "react-navigation";
import { Bill } from "../Screen.props";

export interface HistoricProps {
  bills: Bill[];
  route: Route;
  navigation: NavigationScreenProp<any, any>;
}

export interface Route {
  params: any;
}
