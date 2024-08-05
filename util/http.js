import axios from 'axios';

const rootURL = 'https://react-nactive-test-default-rtdb.firebaseio.com'
const expenseSegment = '/expenses.json'

export function storeExpense(expenseData) {
  axios.post(
    rootURL + expenseSegment,
    expenseData);
}