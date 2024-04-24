import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDeductAmount = value => {
    const {amount} = this.state
    if (amount > 0 && amount > value) {
      this.setState(prevAmount => ({amount: prevAmount.amount - value}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="withdrawal-container">
          <div className="name-card">
            <p className="name-icon">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-card">
            <p className="balance">Your Balance</p>
            <div className="rupees-card">
              <p className="amount">{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdrawal-card">
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="Denomination-card">
              {denominationsList.map(eachAmt => (
                <DenominationItem
                  withdrawAmount={eachAmt}
                  key={eachAmt.id}
                  onDeductAmount={this.onDeductAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
