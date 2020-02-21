const list$ = require('../src/list.js');


describe('list$', () => {

    it('is function', () => {
        expect(list$).toBeInstanceOf(Function);
    });

    it('clears configuration when ', () => {
        const conf = new Map([[1, 2], [3, 4]]);
        expect(list$(conf)).toEqual({1: 2, 3: 4});
    });


    it('does not throw error on trivial input', () => {

        list$(null);
        list$(void 0);

    });


});
