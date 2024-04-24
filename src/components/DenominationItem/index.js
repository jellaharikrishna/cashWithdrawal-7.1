import './index.css'

const DenominationItem = props => {
  const {withdrawAmount, onDeductAmount} = props
  const {value} = withdrawAmount

  const onWithdrawal = () => {
    onDeductAmount(value)
  }

  return (
    <li>
      <button type="button" className="amount-button" onClick={onWithdrawal}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
