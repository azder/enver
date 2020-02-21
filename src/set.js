const empty = require('./empty.js');


const isArray = Array.isArray;


const set$ = (

    (configuration, key, entry) => {

        let name, defaultValue;
        if (isArray(entry)) {
            name = entry[0];
            defaultValue = entry[1];
        } else if (entry && entry.name) {
            name = entry.name;
            defaultValue = entry.defaultValue;
        } else {
            name = key;
            defaultValue = entry;
        }

        name = empty(name) ? key : String(name);

        if (!empty(name)) {
            configuration.set(key, {name, defaultValue});
            return configuration.get(key);
        }

    }

);


module.exports = set$;
