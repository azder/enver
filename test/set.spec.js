const set$ = require('../src/set.js');


describe('set$', () => {

    it('is function', () => {
        expect(set$).toBeInstanceOf(Function);
    });

    it('does not add entries for trivial input', () => {

        const conf = new Map();

        set$(conf, void 0, void 0);
        set$(conf, null, null);
        set$(conf, '', '');

        expect(conf.size).toBe(0);

    });


    it('adds entry for key and returns it when called', () => {

        const conf = new Map();
        const key = 'dummy key';
        const name = 'dummy name';
        const defaultValue = 'dummy default value';

        const actual = set$(conf, key, {name, defaultValue});
        const expected = {name, defaultValue};

        expect(actual).toEqual(expected);
        expect(conf.size).toEqual(1);
        expect(conf.get(key)).toEqual(expected);

    });


    it('parses entry when incomplete', () => {

        const conf = new Map();
        const key = 'dummy key';
        const name = 'dummy name';
        const defaultValue = 'dummy default value';

        expect(set$(conf, name, defaultValue)).toEqual({name, defaultValue});
        expect(set$(conf, key, [name])).toEqual({name});
        expect(set$(conf, key, [void 0, defaultValue])).toEqual({name: key, defaultValue});

    });


});
