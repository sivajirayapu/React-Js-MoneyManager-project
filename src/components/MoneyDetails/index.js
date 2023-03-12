// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance = 0, income, expenses} = props
  console.log(balance, income, expenses)

  return (
    <ul className="ulEl">
      <li className="list-item-balances balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="text-container">
          <p className="title-heading">Your Balance</p>
          <p data-testid="balanceAmount" className="amount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="list-item-balances income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="text-container">
          <p className="title-heading">Your Income</p>
          <p data-testid="incomeAmount" className="amount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="list-item-balances expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div className="text-container">
          <p className="title-heading">Your Expenses</p>
          <p data-testid="expensesAmount" className="amount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
