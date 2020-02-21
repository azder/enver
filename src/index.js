/** Created by azder on 2020-02-20. */

const dotenv = require('dotenv');

const get = require('./get.js');
const val = require('./val.js');
const list = require('./list.js');

const clear$ = require('./clear.js');
const del$ = require('./del.js');
const set$ = require('./set.js');


const {freeze, assign} = Object;

const ENVIRONMENT = process.env;
const CONFIGURATION = new Map();


const enver$ = freeze(assign(
    (configuration = {}, options = {}) => {

        for (const [key, conf] of Object.entries(configuration)) {
            set$(CONFIGURATION, key, conf);
        }

        return dotenv.config(options);
    },
    {
        get:    get.bind(null, ENVIRONMENT),
        val:    val.bind(null, CONFIGURATION, ENVIRONMENT),
        list:   list.bind(null, CONFIGURATION),
        set$:   set$.bind(null, CONFIGURATION),
        del$:   del$.bind(null, CONFIGURATION),
        clear$: clear$.bind(null, CONFIGURATION),
    }
));


module.exports = enver$;
