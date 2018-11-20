import React from 'react'
import { connect } from 'react-redux';
import { deposit } from '../actions/balance';

export class Wallet extends React.Component {

    constructor() {
        super();

        this.state = {
            balance: undefined
        };
    }

    updateBalance = event => {
        this.setState({
            balance: parseInt(event.target.value)
        })
    }

    deposit = () => this.props.deposit(this.state.balance);

    render() {
        return (
            <div>
                <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
                <br />
                <input className="input-wallet" onChange={this.updateBalance}/>
                <button className="btn-deposit" onClick={this.deposit}>Deposit</button>
            </div>
        )
    }
}
export default connect(state => { return { balance: state } }, { deposit }, null)(Wallet);
