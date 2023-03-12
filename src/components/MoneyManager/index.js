import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    inputTitle: '',
    inputAmount: '',
    inputType: 'INCOME',
    transactionsList: [],
    totalIncome: 0,
    totalExpense: 0,
  }

  onChangeTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onChangeType = event => {
    this.setState({inputType: event.target.value})
  }

  onDeleteTransaction = (id, type, amount) => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        eachList => eachList.id !== id,
      ),
    }))

    if (type === 'INCOME') {
      this.setState(prevState => ({
        totalIncome: prevState.totalIncome - JSON.parse(amount),
      }))
    } else {
      this.setState(prevState => ({
        totalExpense: prevState.totalExpense - JSON.parse(amount),
      }))
    }
  }

  onSubmitFields = event => {
    event.preventDefault()
    const {
      inputTitle,
      inputAmount,
      inputType,
      totalIncome,
      totalExpense,
    } = this.state
    // console.log(inputAmount, inputTitle, inputType)
    const transactionDetails = {
      id: v4(),
      transaction: inputTitle,
      amount: inputAmount,
      type: inputType,
    }

    if (inputType === 'INCOME') {
      this.setState({
        totalIncome: totalIncome + JSON.parse(inputAmount),
      })
    } else {
      this.setState({
        totalExpense: totalExpense + JSON.parse(inputAmount),
      })
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, transactionDetails],
      inputTitle: '',
      inputAmount: '',
      inputType: '',
    }))
  }

  render() {
    const {
      inputTitle,
      inputType,
      inputAmount,
      transactionsList,
      totalIncome,
      totalExpense,
    } = this.state
    console.log(totalIncome, totalExpense)
    const totalBalance = totalIncome - totalExpense
    console.log(totalBalance)

    return (
      <div className="main-container">
        <div className="card-container">
          <div className="user-container">
            <h1 className="user">Hi, Richard</h1>
            <p className="greeting">
              Welcome back to your <span className="span">Money Manger</span>
            </p>
          </div>
          <div className="balance-container">
            <MoneyDetails
              key={totalBalance}
              income={totalIncome}
              expenses={totalExpense}
              balance={totalBalance}
            />
          </div>
          <div className="responsive-container">
            <div className="form-container">
              <form
                className="form-fields-container"
                onSubmit={this.onSubmitFields}
              >
                <h1 className="form-heading">Add Transaction</h1>
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  id="title"
                  className="inputEl"
                  placeholder="TITLE"
                  value={inputTitle}
                  onChange={this.onChangeTitle}
                />
                <label className="label" htmlFor="amount">
                  AMOUNT
                </label>
                <br />
                <input
                  type="text"
                  id="amount"
                  className="inputEl"
                  placeholder="Amount"
                  onChange={this.onChangeAmount}
                  value={inputAmount}
                />
                <label className="label" htmlFor="type">
                  TYPE
                </label>
                <br />
                <select
                  className="inputEl"
                  id="type"
                  onChange={this.onChangeType}
                  value={inputType}
                >
                  {transactionTypeOptions.map(eachList => (
                    <option value={eachList.optionId}>
                      {eachList.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <div className="add-transaction-container">
              <div className="transaction-items-container">
                <h1 className="form-heading">History</h1>
                <ul className="transactions-list">
                  <li className="transaction">
                    <div className="title-headers">
                      <p className="title-name">Title</p>
                      <p className="title-name">Amount</p>
                      <p className="title-name">Type</p>
                    </div>
                  </li>
                  {transactionsList.map(eachList => (
                    <TransactionItem
                      key={eachList.id}
                      transactionItem={eachList}
                      transactionType={transactionTypeOptions}
                      deleteItem={this.onDeleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
