const get = require('../src/get.js');


describe('get', () => {

    it('is function', () => {
        expect(get).toBeInstanceOf(Function);
    });

    it('returns default value for trivial key', () => {

        const env = {};

        expect(get(env, void 0, void 0)).toBe(void 0);
        expect(get(env, null, null)).toBe(null);
        expect(get(env, '', '')).toBe('');

    });

    it('returns default value for missing value', () => {

        const env = {};
        const key = 'dummy key';
        const val = 'dummy val';

        expect(get(env, val, key)).toBe(val);

    });

    it('returns value for given key', () => {

        const key = 'dummy key';
        const val = 'dummy val';
        const env = {
            [key]: val
        };

        expect(get(env, null, key)).toBe(val);

    });


});
