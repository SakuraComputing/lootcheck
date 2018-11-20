import React from 'react'
import { connect } from 'react-redux';

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

    render() {
        return (
            <div>
                <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
                <br />
                <input className="input-wallet" onChange={this.updateBalance}/>
            </div>
        )
    }
}
export default connect(state => { return { balance: state } }, null)(Wallet);
