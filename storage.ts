import AsyncStorage from "@react-native-community/async-storage";
import { Bill, BillType } from "./Screens/Screen.props";

class Storage {
  private readonly KEY = "bills";
  async findById(id: string) {
    const bills = await this.findAll();
    if (bills) {
      return bills.find((b) => b.id === id);
    }
  }

  async save(bill: Bill) {
    if (bill) {
      const bills = await this.findAll();
      if (bills) {
        bills.push(bill);
        await this.saveAll(bills);
      }
    }
  }

  async findAll() {
    const itemString = await AsyncStorage.getItem(this.KEY);
    if (itemString) {
      return JSON.parse(itemString) as Bill[];
    }
    return [];
  }

  async saveAll(bills: Bill[]) {
    if (bills) {
      const billsJson = JSON.stringify(bills);
      await AsyncStorage.setItem(this.KEY, billsJson);
    }
  }

  async findByType(billType: BillType) {
    const bills = await this.findAll();
    if (bills) {
      return bills.filter((b) => b.type === billType);
    }
    return [];
  }
}

const storage = new Storage();
export default storage;
