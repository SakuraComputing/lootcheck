import React from 'react';
import { shallow  } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
    const props = { balance: 20 }
    const wallet = shallow(<Wallet {...props}/>);

    it('should render correctly', () => {
        expect(wallet).toMatchSnapshot();
    });
    it('should display the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20')
    });
    it('should an input to deposit or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when the user types into the wallet input', () => {
        const userBalance = '25';
        beforeEach(() => {
            wallet.find('.input-wallet').simulate('change', 
                { target: { value: userBalance }}
            )   
        });
        it('should update the local wallet balance in `state` and it converts that to a number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });
    });
});