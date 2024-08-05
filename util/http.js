import axios from 'axios';

const ROOT_URL = 'https://react-nactive-test-default-rtdb.firebaseio.com'
const expenseSegment = '/expenses.json'

export function storeExpense(expenseData) {
  axios.post(
    ROOT_URL + expenseSegment,
    expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(
    ROOT_URL + expenseSegment
  )

  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    }
    expenses.push(expenseObj);
  }
  return expenses;
}