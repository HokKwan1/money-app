import { FlatList, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
  return (
    // <ExpenseItem description={itemData.item.description} amount={itemData.item.amount} date={itemData.item.date}/>
    <ExpenseItem {...itemData.item}/>
  )
}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
}

export default ExpensesList;