import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('should render correctly', () => {
        expect(app).toMatchSnapshot();
    })
    it('should contain a wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });
    it('should contain a connected loot component', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true);
    });
    it('should contain a lin to the coindesk price page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price/bitcoin')
    });
});