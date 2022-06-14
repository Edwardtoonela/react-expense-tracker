import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import './Expenses.css';

/*
function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((obj) => {
        return (
          <ExpenseItem title={obj.title} amount={obj.amount} date={obj.date} />
        );
      })}
    </div>
  );
}
*/
function Expenses(props) {

  const [filteredYear, setFilteredYear]= useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">

        <ExpensesFilter selected= {filteredYear} onChangeFilter = { filterChangeHandler } />

        {filteredExpenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title= {expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

      </Card>
    </div>
  )
}

export default Expenses;
