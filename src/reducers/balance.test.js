import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {

    describe('when intialising', () => {
        const balance = 10;
    
        it('should set the balance', () => {
            const balance = 10;
            expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
            .toEqual(balance);
        });
    
        describe('then re-initialising', () => {
           it('reads the balance from cookies', () => {
               expect(balanceReducer2(undefined, {})).toEqual(balance);
           }); 
        });
        
    });

    it('should deposit into the balance', () => {
        const deposit = 10;
        const initialState = 5;
        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit}))
            .toEqual(initialState + deposit);
    });
    it('should withdraw from the balance', () => {
        const withdraw = 5;
        const initialState = 10;
        expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdraw}))
        .toEqual(initialState  - 5);
    });
});