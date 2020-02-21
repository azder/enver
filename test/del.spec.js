const del = require('../src/del.js');


describe('del', () => {

    it('is function', () => {
        expect(del).toBeInstanceOf(Function);
    });

    it('returns false for trivial input', () => {

        const conf = new Map([[1, 2], [3, 4]]);

        expect(del(conf, void 0)).toBe(false);
        expect(del(conf, null)).toBe(false);

    });


    it('returns false value for missing key', () => {

        const conf = new Map([[1, 2], [3, 4]]);
        const key = 'dummy key';

        expect(del(conf, key)).toBe(false);

    });


    it('returns true for found key', () => {

        const conf = new Map([[1, 2], [3, 4]]);
        const key = 1;

        expect(del(conf, key)).toBe(true);

    });


});
