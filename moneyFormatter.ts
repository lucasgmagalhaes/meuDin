export function formatMoney(amount: number) {
    if (amount) {
      return `R$ ${amount.toFixed(2)}`;
    }
    return "R$ 0.00";
  }