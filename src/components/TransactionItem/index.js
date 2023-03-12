// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionItem, deleteItem, transactionType} = props
  const {transaction, amount, type, id} = transactionItem

  const filterTransaction = transactionType.find(
    eachList => eachList.optionId === type,
  )

  const onClickDelete = () => {
    deleteItem(id, type, amount)
  }

  return (
    <li className="list-item">
      <p className="style">{transaction}</p>
      <p className="style">Rs {amount}</p>
      <p className="style">{filterTransaction.displayText}</p>
      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
