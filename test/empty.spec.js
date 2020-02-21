const empty = require('../src/empty.js');


describe('empty', () => {

    it('is function', () => {
        expect(empty).toBeInstanceOf(Function);
    });

    it('returns true for null, undefined and empty string', () => {

        expect(empty(null)).toBe(true);
        expect(empty(void 0)).toBe(true);
        expect(empty('')).toBe(true);

    });


    it('returns false for non-empty strings', () => {

        expect(empty('asdf')).toBe(false);

    });

    it('returns false for actual objects', () => {

        expect(empty({})).toBe(false);
        expect(empty([])).toBe(false);

    });


});
