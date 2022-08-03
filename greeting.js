function greet (name) {
    if (!name) {
        return 'Hello, my friend.'
    } else {
        return `Hello, ${name}.`
    }
}

module.exports = greet