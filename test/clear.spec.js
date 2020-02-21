const clear$ = require('../src/clear.js');


describe('clear$', () => {

    it('is function', () => {
        expect(clear$).toBeInstanceOf(Function);
    });

    it('clears configuration', () => {

        const conf = new Map([[1, 2], [3, 4]]);

        clear$(conf);

        expect(conf.size).toBe(0);

    });


    it('does not throw error on trivial input', () => {

        clear$(null);
        clear$(void 0);

    });


});
