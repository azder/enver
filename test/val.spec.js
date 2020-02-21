const val = require('../src/val.js');


describe('val', () => {

    it('is function', () => {
        expect(val).toBeInstanceOf(Function);
    });

    it('returns  undefined for trivial input', () => {

        const conf = new Map();
        const env = {};

        expect(val(conf, env, void 0)).toBe(void 0);
        expect(val(conf, env, null)).toBe(void 0);
        expect(val(conf, env, '')).toBe(void 0);

    });


    it('returns undefined value for missing key', () => {

        const conf = new Map();
        const env = {};
        const key = 'dummy key';

        expect(val(conf, env, key)).toBe();

    });


    it('returns value for found key and present value', () => {

        const key = 'dummy config key';
        const name = 'dummy name';
        const defaultValue = 'dummy default value';
        const value = 'dummy value';

        const conf = new Map([[key, {name, defaultValue}]]);
        const env = {[name]: value};

        expect(val(conf, env, key)).toBe(value);


    });


    it('returns default value for found key and missing value', () => {

        const key = 'dummy config key';
        const name = 'dummy name';
        const defaultValue = 'dummy default value';

        const conf = new Map([[key, {name, defaultValue}]]);
        const env = {[name]: ''};

        expect(val(conf, env, key)).toBe(defaultValue);


    });

});
