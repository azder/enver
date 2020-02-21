const get = require('./get.js');


const val = (

    (configuration, environment, key) => {
        const {defaultValue, name} = configuration.get(key) || {};
        return get(environment, defaultValue, name);
    }

);


module.exports = val;
