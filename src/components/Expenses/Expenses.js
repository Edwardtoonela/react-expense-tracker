import React, {useState} from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart';
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

        <ExpensesFilter
         selected= {filteredYear}
         onChangeFilter = { filterChangeHandler }
        />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses;
