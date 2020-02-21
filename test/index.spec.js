const enver = require('../src/index.js');


describe('enver', () => {

    it('props are functions', () => {

        // noinspection JSCheckFunctionSignatures
        Object.values(enver).forEach(
            prop => expect(prop).toBeInstanceOf(Function)
        );

    });

    it('returns dotenv output on call', () => {

        expect(enver()).toHaveProperty('parsed');

    });


    it('returns default value for missing key', () => {

        const key = 'dummy key';
        const val = 'dummy val';
        expect(enver.get(val, key)).toBe(val);

    });


});
