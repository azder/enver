const list = (

    configuration => (

        configuration && configuration.entries
            ? Object.fromEntries(configuration.entries() || [])
            : {}

    )

);

module.exports = list;
