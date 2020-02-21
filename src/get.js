const empty = require('./empty.js');


const get = (

    (env, defaultValue, name) => {

        const currentValue = env[name];

        return empty(currentValue) ? defaultValue : currentValue;

    }

);


module.exports = get;
