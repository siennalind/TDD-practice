function greet (name) {
    if (!name) {
        return 'Hello, my friend.'
    } else if (typeof(name) === 'string' && name === name.toUpperCase()) {
        return `HELLO ${name}!`
    } else if (typeof(name) === 'object' && name.length > 1) {
        return `Hello, ${name[0]} and ${name[1]}.`
    } else {
        return `Hello, ${name}.`
    }
}

module.exports = greet