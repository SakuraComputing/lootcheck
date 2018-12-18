import rootReducer from './index';

describe('rootReducer', () => {
    it('should initialise the default state', () => {
        expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
    });
});