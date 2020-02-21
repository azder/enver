# Enver

A wrapper for the dotenv package
that can return defaults when values are missing.


    const enver$ = require('../src/index.js');
    const {list, val, get, set$, del$} = enver$;

    // for bulk configuration
    enver$({
        port:  ['PORT', 4000],
        DEBUG: false,
        env:   ['NODE_ENV', 'dev']
    });

    console.log(val('port'), val('env'));   // 4000 prod
    console.log(get('nope', 'yep'));        // nope
    console.log(set$('nope', 'nope'));      // { name: 'nope', defaultValue: 'nope' }
    console.log(del$('nope'));              // true


    console.log(list()); // prints:

    // {
    //     port: { name: 'PORT', defaultValue: 4000 },
    //     DEBUG: { name: 'DEBUG', defaultValue: false },
    //     env: { name: 'NODE_ENV', defaultValue: 'dev' }
    // }

